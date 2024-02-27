import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCreateCurrentUserPost } from '../../api';
import Post from '../../../store/types/post-interface';
import useGetRecentPaginatedPosts from '../../../hooks/post/use-get-recent-paginated-posts';

export default function useCreateCurrentUserPostMutation() {
  const queryClient = useQueryClient();
  const { resetPagination } = useGetRecentPaginatedPosts();

  return useMutation({
    mutationFn: fetchCreateCurrentUserPost,
    onSuccess: (data) => {
      const post: Post = data.data;

      queryClient.invalidateQueries({
        queryKey: ['get-user-posts', post.author],
      });
      queryClient.invalidateQueries({
        queryKey: ['get-posts'],
      });
      resetPagination();
    },
  });
}
