import { useEffect, useState } from 'react';
import useCreateCurrentUserPostMutation from '../../api/mutations/post/use-create-current-user-post-mutation';
import { useNavigate } from 'react-router-dom';

export default function useCreatePostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const mutation = useCreateCurrentUserPostMutation();

  const { data: response, isSuccess } = mutation;
  const navigate = useNavigate();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (content) => {
    setContent(content);
  };

  const handleMarkdown = (content) => {
    setContent(content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      title,
      content,
    });
  };

  useEffect(() => {
    if (!isSuccess) {
      return;
    }

    navigate(`/posts/${response.data._id}`);

    setTitle('');
    setContent('');
  }, [isSuccess]);

  return {
    title,
    content,
    handleTitle,
    handleContent,
    handleMarkdown,
    handleSubmit,
    ...mutation,
  };
}
