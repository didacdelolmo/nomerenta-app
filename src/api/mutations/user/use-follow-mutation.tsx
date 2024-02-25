import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchFollow } from '../../api';

export default function useFollowMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchFollow,

    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['get-user', variables.userId]
      })
      queryClient.invalidateQueries({
        queryKey: ['get-user-follows', variables.userId],
      });
    },
  });
}
