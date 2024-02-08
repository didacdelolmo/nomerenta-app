import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchLoginUser } from '../../api';
import User from '../../../store/types/user-interface';
import useUserStore from '../../../store/user-store';

export default function useLoginMutation() {
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchLoginUser,
    onSuccess: (data) => {
      const user: User = data.data;

      setUser(user);
      queryClient.setQueryData(['get-current-user'], { data: user });
    },
  });
}
