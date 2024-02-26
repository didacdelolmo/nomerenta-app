import { useState } from 'react';

export default function useProfileState() {
  const [section, setSection] = useState<'posts' | 'comments' | 'follows'>(
    'posts'
  );

  const isPostsSection = section === 'posts';
  const isCommentsSection = section === 'comments';
  const isFollowsSection = section === 'follows';

  const setPostsSection = () => {
    setSection('posts');
  };
  const setCommentsSection = () => {
    setSection('comments');
  };
  const setFollowsSection = () => {
    setSection('follows');
  };

  return {
    isPostsSection,
    isCommentsSection,
    isFollowsSection,
    setPostsSection,
    setCommentsSection,
    setFollowsSection,
  };
}
