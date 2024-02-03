import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCreateCurrentUserPost } from '../api';
import Post from '../../store/types/post-interface';

export default function useCreateCurrentUserPostMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchCreateCurrentUserPost,
    onSuccess: (data) => {
      const post: Post = data.data;

      queryClient.invalidateQueries({
        queryKey: ['get-user-posts', post.author],
      });
    },
  });

  return mutation;
}
