import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUnfollow } from '../../api';

export default function useUnfollowMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUnfollow,

    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['get-user', variables.userId],
      });
      queryClient.invalidateQueries({
        queryKey: ['get-user-follows', variables.userId],
      });
    },
  });
}
