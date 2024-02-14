import { useState } from 'react';
import useCreateCurrentUserPostMutation from '../../api/mutations/post/use-create-current-user-post-mutation';
import replaceWords from '../../utils/replace-words';
import sillyReplacements from '../../services/silly-replacements';

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
    mutation.mutate({
      title,
      content: replaceWords(content, sillyReplacements),
    });
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
