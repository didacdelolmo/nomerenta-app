import { useState } from 'react';
import useCreatePostCommentMutation from '../../api/mutations/use-create-post-comment-mutation';

export default function useCreatePostCommentForm({
  postId,
  parentId = undefined,
}: {
  postId: string;
  parentId?: string;
}) {
  const [content, setContent] = useState('');

  const mutation = useCreatePostCommentMutation();

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    const payload: { postId: string; parentId?: string; content: string } = {
      postId,
      content,
    };
    if (parentId !== undefined) {
      payload.parentId = parentId;
    }

    e.preventDefault();
    mutation.mutate({ postId, parentId, content });
  };

  return {
    content,
    handleContent,
    handleSubmit,
    ...mutation,
  };
}
