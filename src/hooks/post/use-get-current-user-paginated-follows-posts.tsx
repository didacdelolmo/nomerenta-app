import { useCallback, useEffect, useState } from 'react';
import Post from '../../store/types/post-interface';
import useGetCurrentUserFollowsPostsQuery from '../../api/queries/user/use-get-current-user-follows-posts-query';

export default function useGetCurrentUserPaginatedFollowsPosts() {
  const [start, setStart] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const limit = 20;

  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetCurrentUserFollowsPostsQuery();

  useEffect(() => {
    if (isSuccess && response.data.length > 0) {
      if (start === 0) {
        setPosts(response.data as Post[]);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...response.data] as Post[]);
      }
      if (response.data.length < limit) {
        setHasMore(false);
      }
    }
  }, [isSuccess, response, start]);

  const loadMorePosts = () => {
    setStart((prevStart) => prevStart + limit);
  };

  const resetPagination = useCallback(() => {
    setStart(0);
    setPosts([]);
    setHasMore(true);
  }, []);

  return {
    posts,
    loadMorePosts,
    resetPagination,
    hasMore,
    isPending,
    isError,
    isSuccess,
    error,
  };
}
