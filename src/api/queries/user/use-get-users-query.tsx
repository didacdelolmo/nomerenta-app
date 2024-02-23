import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../../api';

export default function useGetUsersQuery({ username }: { username: string }) {
  return useQuery({
    queryKey: ['get-users', username],
    queryFn: () => fetchUsers({ username }),
    enabled: !!username,
  });
}
