import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchFollow } from '../../api';
import User from '../../../store/types/user-interface';

export default function useFollowMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchFollow,

    onSuccess: (data) => {
      const user: User = data.data;

      queryClient.invalidateQueries({
        queryKey: ['get-user-follows', user._id],
      });
    },
  });
}
