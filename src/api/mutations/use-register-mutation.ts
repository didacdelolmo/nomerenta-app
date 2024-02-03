import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchRegisterUser } from '../api';
import User from '../../store/types/user-interface';
import useUserStore from '../../store/user-store';

export default function useRegisterMutation() {
  const setUser = useUserStore((state) => state.setUser);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchRegisterUser,
    onSuccess: (data) => {
      setUser(data as unknown as User);
      queryClient.setQueryData(['get-current-user'], data);
    },
  });

  return mutation;
}
