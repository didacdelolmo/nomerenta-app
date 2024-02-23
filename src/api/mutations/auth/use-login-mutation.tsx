import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchLogin } from '../../api';
import User from '../../../store/types/user-interface';
import useUserStore from '../../../store/user-store';

export default function useLoginMutation() {
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchLogin,
    onSuccess: (data) => {
      const user: User = data.data;

      setUser(user);
      queryClient.setQueryData(['get-current-user'], { data: user });
      queryClient.invalidateQueries({
        queryKey: ['get-current-user-notifications'],
      });
      queryClient.invalidateQueries({
        queryKey: ['get-current-user-unseen-notifications-count'],
      });
    },
  });
}
