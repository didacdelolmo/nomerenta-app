import { useState } from 'react';
import useCreatePostCommentMutation from '../../api/mutations/use-create-post-comment-mutation';

export default function useCreateCommentForm({
  postId,
  parentId,
  onSuccessCallback,
}: {
  postId: string;
  parentId?: string;
  onSuccessCallback?: () => void;
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
    mutation.mutate(
      { postId, parentId, content },
      {
        onSuccess: () => {
          if (onSuccessCallback) {
            onSuccessCallback();
          }
        },
      }
    );
  };

  return {
    content,
    handleContent,
    handleSubmit,
    ...mutation,
  };
}
