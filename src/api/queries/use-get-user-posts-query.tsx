import { useQuery } from '@tanstack/react-query';
import { fetchUserPosts } from '../api';

export default function useGetUserPosts({ userId }) {
  return useQuery({
    queryKey: ['get-user-posts', userId],
    queryFn: () => fetchUserPosts(userId),
  });
}
