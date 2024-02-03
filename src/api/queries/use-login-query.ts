import useUserStore from '../../store/user-store';
import User from '../../store/types/user-interface';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchLoginUser } from '../api';
import { useEffect } from 'react';

export default function useLoginQuery({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ['login-user', { username, password }],
    queryFn: () => fetchLoginUser({ username, password }),
  });

  const user: User = response?.data;
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (isSuccess && user) {
      setUser(user);
      queryClient.setQueryData(['get-current-user'], user);
    }
  }, [isSuccess, queryClient, setUser, user]);

  return { isPending, isError, error, isSuccess };
}
