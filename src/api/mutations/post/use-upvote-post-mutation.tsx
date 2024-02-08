import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUpvotePost } from '../../api';
import Post from '../../../store/types/post-interface';

export default function useUpvotePostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUpvotePost,
    onSuccess: (data) => {
      const post: Post = data.data;

      queryClient.setQueryData(['get-post-by-id', post._id], { data: post });
    },
  });
}
