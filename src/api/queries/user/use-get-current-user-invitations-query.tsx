import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUserInvitations } from '../../api';

export default function useGetCurrentUserInvitationsQuery() {
  return useQuery({
    queryKey: ['get-current-user-invitations'],
    queryFn: fetchCurrentUserInvitations,
  });
}
