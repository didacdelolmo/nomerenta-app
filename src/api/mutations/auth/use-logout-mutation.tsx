import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchLogout } from '../../api';
import useUserStore from '../../../store/user-store';

export default function useLogoutMutation() {
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchLogout,

    onSuccess: () => {
      setUser(undefined);

      queryClient.refetchQueries({ queryKey: ['get-current-user'] });
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
