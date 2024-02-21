import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUnfollow } from '../../api';
import User from '../../../store/types/user-interface';

export default function useUnfollowMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUnfollow,

    onSuccess: (data) => {
      const user: User = data.data;

      queryClient.invalidateQueries({
        queryKey: ['get-user-followers', user._id],
      });
    },
  });
}
