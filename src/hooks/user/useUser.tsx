import { useQueryClient } from '@tanstack/react-query';
import useGetCurrentUserQuery from '../../api/queries/use-get-current-user-query';
import useUserStore from '../../store/user-store';
import Cookies from 'js-cookie'

export default function useUser() {
  const query = useGetCurrentUserQuery();
  const queryClient = useQueryClient();

  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const existsUser = user !== undefined;

  const logout = () => {
    Cookies.remove('connect.sid');
    setUser(undefined);
    queryClient.invalidateQueries({ queryKey: ['get-current-user'] })
  }

  return {
    user,
    setUser,
    existsUser,
    logout,
    ...query
  };
}
