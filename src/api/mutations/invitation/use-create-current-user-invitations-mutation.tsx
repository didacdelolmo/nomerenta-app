import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCreateCurrentUserInvitations } from '../../api';

export default function useCreateCurrentUserInvitationsMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchCreateCurrentUserInvitations,

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['get-current-user'],
      });
      queryClient.refetchQueries({
        queryKey: ['get-current-user-invitations'],
      });
    },
  });
}
