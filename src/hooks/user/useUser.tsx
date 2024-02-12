import { useQueryClient } from '@tanstack/react-query';
import useGetCurrentUserQuery from '../../api/queries/user/use-get-current-user-query';
import useUserStore from '../../store/user-store';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import useRegisterAnonimouslyMutation from '../../api/mutations/auth/use-register-anonimously-mutation';

export default function useUser() {
  const query = useGetCurrentUserQuery();
  const { mutate: registerAnonimously } = useRegisterAnonimouslyMutation();
  const queryClient = useQueryClient();

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const existsUser = user !== undefined;
  const isPremium = existsUser && user.roleId === 'premium';

  const logout = () => {
    Cookies.remove('connect.sid');
    setUser(undefined);
    queryClient.setQueryData(['get-current-user'], { data: undefined });
  };

  useEffect(() => {
    if (query.isError) {
      registerAnonimously();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.isError]);

  return {
    user,
    setUser,
    existsUser,
    isPremium,
    logout,
    ...query,
  };
}
