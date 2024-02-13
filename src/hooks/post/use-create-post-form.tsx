import { useState } from 'react';
import useCreateCurrentUserPostMutation from '../../api/mutations/post/use-create-current-user-post-mutation';

export default function useCreatePostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const mutation = useCreateCurrentUserPostMutation();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleMarkdown = (content) => {
    setContent(content);
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
    handleMarkdown,
    handleSubmit,
    ...mutation,
  };
}
