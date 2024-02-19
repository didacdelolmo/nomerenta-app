import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchMarkCurrentUserNotificationsAsSeen } from '../../api';

export default function useMarkCurrentUserNotificationsAsSeen() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchMarkCurrentUserNotificationsAsSeen,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-current-user-unseen-notifications-count'],
      });
    },
  });
}
