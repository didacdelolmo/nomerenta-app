import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchFeaturePost } from '../../api';

export default function useCreateCurrentUserPostMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchFeaturePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-posts'],
      });
    },
  });
}
