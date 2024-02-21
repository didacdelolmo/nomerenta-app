import { useQueryClient } from '@tanstack/react-query';
import useGetCurrentUserQuery from '../../api/queries/user/use-get-current-user-query';
import useUserStore from '../../store/user-store';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import useRegisterAnonimouslyMutation from '../../api/mutations/auth/use-register-anonimously-mutation';
import User from '../../store/types/user-interface';

export default function useUser() {
  const queryClient = useQueryClient();

  const query = useGetCurrentUserQuery();
  const mutation = useRegisterAnonimouslyMutation();

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const roleId = user?.roleId;

  const isMember = roleId === 'member';
  const isPremium = roleId === 'premium';
  const isAdmin = roleId === 'admin';
  const isBoss = roleId === 'boss';

  const isCurrentUser = (target: User) => {
    return target._id === user?._id;
  };

  useEffect(() => {
    if (query.isError) {
      mutation.mutate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.isError]);

  const logout = () => {
    Cookies.remove('connect.sid');
    setUser(undefined);
    queryClient.setQueryData(['get-current-user'], { data: undefined });
    queryClient.invalidateQueries({
      queryKey: ['get-current-user-notifications'],
    });
    queryClient.invalidateQueries({
      queryKey: ['get-current-user-unseen-notifications-count'],
    });
  };

  return {
    user,
    setUser,
    isCurrentUser,
    logout,

    isMember,
    isPremium,
    isAdmin,
    isBoss,

    ...query,
  };
}
