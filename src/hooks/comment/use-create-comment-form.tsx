import { useState } from 'react';
import useCreatePostCommentMutation from '../../api/mutations/comment/use-create-post-comment-mutation';

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

  const handleContent = (content) => {
    setContent(content);
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

          setContent('');
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
