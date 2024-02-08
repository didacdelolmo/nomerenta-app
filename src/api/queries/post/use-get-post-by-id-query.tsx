import { useQuery } from '@tanstack/react-query';
import { fetchPostById } from '../../api';

export default function useGetPostByIdQuery({ postId }) {
  return useQuery({
    queryKey: ['get-post-by-id', postId],
    queryFn: () => fetchPostById({ postId }),
  });
}
