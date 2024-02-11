import { useQuery } from '@tanstack/react-query';
import { fetchUserComments } from '../../api';

export default function useGetUserCommentsQuery({ userId }: { userId: string }) {
  return useQuery({
    queryKey: ['get-user-comments', userId],
    queryFn: () => fetchUserComments({ userId }),
  });
}
