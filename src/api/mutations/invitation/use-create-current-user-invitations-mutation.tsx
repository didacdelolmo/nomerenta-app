import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCreateCurrentUserInvitations } from '../../api';

export default function useCreateCurrentUserInvitationsMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchCreateCurrentUserInvitations,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-current-user-invitations'],
      });
    },
  });
}
