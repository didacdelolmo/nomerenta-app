import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUserFollowsPosts } from '../../api';

export default function useGetCurrentUserFollowsPostsQuery() {
  return useQuery({
    queryKey: ['get-current-user-follows-posts'],
    queryFn: fetchCurrentUserFollowsPosts,
  });
}
