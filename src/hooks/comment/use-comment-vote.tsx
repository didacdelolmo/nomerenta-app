import { useEffect, useState } from 'react';
import useUserStore from '../../store/user-store';
import useUpvoteCommentMutation from '../../api/mutations/comment/use-upvote-comment-mutation';
import useDownvoteCommentMutation from '../../api/mutations/comment/use-downvote-comment-mutation';
import useUnvoteCommentMutation from '../../api/mutations/comment/use-unvote-comment-mutation';
import Comment from '../../store/types/comment-interface';

export default function useCommentVote({ comment }: { comment: Comment }) {
  const { _id: commentId } = comment;

  const user = useUserStore((state) => state.user);
  const existsUser = user !== undefined;

  const [vote, setVote] = useState<'none' | 'positive' | 'negative'>('none');

  const hasUpvoted = vote === 'positive';
  const hasDownvoted = vote === 'negative';

  const { mutate: upvote } = useUpvoteCommentMutation();
  const { mutate: downvote } = useDownvoteCommentMutation();
  const { mutate: unvote } = useUnvoteCommentMutation();

  const handleUpvote = () => {
    if (existsUser) {
      if (hasUpvoted) {
        unvote({ commentId });
      } else {
        upvote({ commentId });
      }
      setVote('positive');
    }
  };
  const handleDownvote = () => {
    if (existsUser) {
      if (hasDownvoted) {
        unvote({ commentId });
      } else {
        downvote({ commentId });
      }
      setVote('negative');
    }
  };

  useEffect(() => {
    if (!existsUser) {
      return;
    }
    const _id = user._id as string;
    const upvotes = comment.upvotes as string[];
    const downvotes = comment.downvotes as string[];

    if (upvotes.includes(_id)) {
      setVote('positive');
    } else if (downvotes.includes(_id)) {
      setVote('negative');
    } else {
      setVote('none');
    }
  }, [existsUser, user, comment]);

  return {
    hasUpvoted,
    hasDownvoted,
    handleUpvote,
    handleDownvote,
  };
}
