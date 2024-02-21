import { useQuery } from '@tanstack/react-query';
import { fetchUserFollows } from '../../api';

export default function useGetUserFollows({ userId }) {
  return useQuery({
    queryKey: ['get-user-follows', userId],
    queryFn: () => fetchUserFollows({ userId }),
  });
}
