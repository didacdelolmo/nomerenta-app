import { useState } from 'react';

export default function useRecentActivityState() {
  const [activity, setActivity] = useState<'posts' | 'follows' | 'comments'>(
    'posts'
  );

  const isPostsActivity = activity === 'posts';
  const isFollowsActivity = activity === 'follows';
  const isCommentsActivity = activity === 'comments';

  const setPostsActivity = () => {
    setActivity('posts');
  };
  const setFollowsActivity = () => {
    setActivity('follows');
  };
  const setCommentsActivity = () => {
    setActivity('comments');
  };

  return {
    isPostsActivity,
    isFollowsActivity,
    isCommentsActivity,
    setPostsActivity,
    setFollowsActivity,
    setCommentsActivity,
  };
}
