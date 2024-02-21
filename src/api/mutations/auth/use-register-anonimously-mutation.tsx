import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchRegisterAnonymousUser } from '../../api';
import useUserStore from '../../../store/user-store';
import User from '../../../store/types/user-interface';

export default function useRegisterAnonimouslyMutation() {
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchRegisterAnonymousUser,
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
