import { useState } from 'react';

export default function useProfileState() {
  const [section, setSection] = useState<'posts' | 'comments'>('posts');

  const isPostsSection = section === 'posts';
  const isCommentsSection = section === 'comments';

  const setPostsSection = () => {
    setSection('posts');
  };
  const setCommentsSection = () => {
    setSection('comments');
  };

  return {
    isPostsSection,
    isCommentsSection,
    setPostsSection,
    setCommentsSection,
  };
}
