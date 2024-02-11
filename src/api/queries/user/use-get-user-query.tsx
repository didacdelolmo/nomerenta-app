import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../../api';

export default function useGetUserQuery({ userId }: { userId: string }) {
  return useQuery({
    queryKey: ['get-user', userId],
    queryFn: () => fetchUser({ userId }),
  });
}
