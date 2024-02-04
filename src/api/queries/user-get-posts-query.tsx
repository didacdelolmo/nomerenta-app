import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api';

type Sort = 'score' | 'createdAt';

export default function useGetPostsQuery({
  sortBy,
  start,
  limit,
}: {
  sortBy: Sort;
  start: number;
  limit: number;
}) {
  return useQuery({
    queryKey: ['get-posts', sortBy, start, limit],
    queryFn: () => fetchPosts({ sortBy, start, limit }),
  });
}
