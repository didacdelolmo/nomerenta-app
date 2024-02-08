import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUnvotePost } from '../../api';
import Post from '../../../store/types/post-interface';

export default function useUnvotePostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUnvotePost,
    onSuccess: (data) => {
      const post: Post = data.data;

      queryClient.setQueryData(['get-post-by-id', post._id], { data: post });
    },
  });
}
