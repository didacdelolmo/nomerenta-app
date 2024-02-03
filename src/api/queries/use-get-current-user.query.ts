import { useQuery } from '@tanstack/react-query';
import { fetchGetCurrentUser } from '../api';
import useUserStore from '../../store/user-store';
import { useEffect } from 'react';
import User from '../../store/types/user-interface';

export default function useGetCurrentUserQuery() {
  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ['get-current-user'],
    queryFn: fetchGetCurrentUser,
  });

  const user: User = response?.data;
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (isSuccess && user) {
      setUser(user);
    }
  }, [isSuccess, setUser, user]);

  return { isPending, isError, error, isSuccess };
}
