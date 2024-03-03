import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchRegister } from '../../api';
import useUserStore from '../../../store/user-store';
import User from '../../../store/types/user-interface';

export default function useRegisterMutation() {
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchRegister,
    onSuccess: (data) => {
      const user: User = data.data;

      setUser(user);
      queryClient.setQueryData(['get-current-user'], { data: user });
      queryClient.invalidateQueries({
        queryKey: ['get-current-user-notifications'],
      });
      queryClient.refetchQueries({
        queryKey: ['get-current-user-unseen-notifications-count'],
      });
      queryClient.invalidateQueries({
        queryKey: ['get-current-user-invitations'],
      });
      queryClient.invalidateQueries({
        queryKey: ['get-current-user-follows-posts'],
      });
    },
  });
}
