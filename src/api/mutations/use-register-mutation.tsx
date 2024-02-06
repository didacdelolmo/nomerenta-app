import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchRegisterUser } from '../api';
import useUserStore from '../../store/user-store';
import User from '../../store/types/user-interface';

export default function useRegisterMutation() {
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchRegisterUser,
    onSuccess: (data) => {
      const user: User = data.data;

      setUser(user);
      queryClient.setQueryData(['get-current-user'], { data: user });
    },
  });
}
