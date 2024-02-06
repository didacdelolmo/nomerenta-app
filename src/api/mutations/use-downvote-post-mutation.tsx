import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchDownvotePost } from '../api';
import Post from '../../store/types/post-interface';

export default function useDownvotePostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchDownvotePost,
    onSuccess: (data) => {
      const post: Post = data.data;

      queryClient.setQueryData(['get-post-by-id', post._id], { data: post });
    },
  });
}
