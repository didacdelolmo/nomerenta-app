import { useState } from 'react';
import useCreateCurrentUserPostMutation from '../../api/mutations/use-create-current-user-post';

export default function useCreateCurrentUserPostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const mutation = useCreateCurrentUserPostMutation();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ title, content });
  };

  return {
    title,
    content,
    handleTitle,
    handleContent,
    handleSubmit,
    ...mutation,
  };
}
