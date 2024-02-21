import { useQuery } from '@tanstack/react-query';
import { fetchUserFollowers } from '../../api';

export default function useGetUserFollowers({ userId }) {
  return useQuery({
    queryKey: ['get-user-followers', userId],
    queryFn: () => fetchUserFollowers({ userId }),
  });
}
