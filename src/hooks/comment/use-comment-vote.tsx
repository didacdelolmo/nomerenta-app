import { useEffect, useState } from 'react';
import useDownvotePostMutation from '../../api/mutations/use-downvote-post-mutation';
import useUnvotePostMutation from '../../api/mutations/use-unvote-post-mutation';
import useUpvotePostMutation from '../../api/mutations/use-upvote-post-mutation';
import Post from '../../store/types/post-interface';
import useUserStore from '../../store/user-store';

export default function useCommentVote({ post }: { post: Post }) {
  const { _id: postId } = post;

  const user = useUserStore((state) => state.user);
  const existsUser = user !== undefined;

  const [vote, setVote] = useState<'none' | 'positive' | 'negative'>('none');

  const hasUpvoted = vote === 'positive';
  const hasDownvoted = vote === 'negative';

  const { mutate: upvote } = useUpvotePostMutation();
  const { mutate: downvote } = useDownvotePostMutation();
  const { mutate: unvote } = useUnvotePostMutation();

  const handleUpvote = () => {
    if (existsUser) {
      if (hasUpvoted) {
        unvote({ postId });
      } else {
        upvote({ postId });
      }
      setVote('positive');
    }
  };
  const handleDownvote = () => {
    if (existsUser) {
      if (hasDownvoted) {
        unvote({ postId });
      } else {
        downvote({ postId });
      }
      setVote('positive');
    }
  };

  useEffect(() => {
    if (!existsUser) {
      return;
    }
    const _id = user._id as string;
    const upvotes = post.upvotes as string[];
    const downvotes = post.downvotes as string[];

    if (upvotes.includes(_id)) {
      setVote('positive');
    } else if (downvotes.includes(_id)) {
      setVote('negative');
    } else {
      setVote('none');
    }
  }, [existsUser, user, post]);

  return {
    hasUpvoted,
    hasDownvoted,
    handleUpvote,
    handleDownvote,
  };
}
