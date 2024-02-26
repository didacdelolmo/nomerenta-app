import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchMarkCurrentUserNotificationAsSeen } from '../../api';

export default function useMarkCurrentUserNotificationAsSeen() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchMarkCurrentUserNotificationAsSeen,

    onSuccess: () => {  
      queryClient.invalidateQueries({
        queryKey: ['get-current-user-notifications'],
      });
      queryClient.refetchQueries({
        queryKey: ['get-current-user-unseen-notifications-count'],
      });
    },
  });
}
