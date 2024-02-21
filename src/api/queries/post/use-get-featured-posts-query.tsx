import { useQuery } from '@tanstack/react-query';
import { fetchFeaturedPosts } from '../../api';

export default function useGetFeaturedPostsQuery() {
  return useQuery({
    queryKey: ['get-featured-posts'],
    queryFn: fetchFeaturedPosts,
  });
}
