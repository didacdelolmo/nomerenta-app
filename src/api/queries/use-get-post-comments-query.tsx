import { useQuery } from '@tanstack/react-query';
import { fetchPostComments } from '../api';

export default function useGetPostComments({ postId }) {
  return useQuery({
    queryKey: ['get-post-comments', postId],
    queryFn: () => fetchPostComments({ postId }),
  });
}
