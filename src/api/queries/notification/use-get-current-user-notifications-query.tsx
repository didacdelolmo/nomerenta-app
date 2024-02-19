import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUserNotifications } from '../../api';

export default function useGetCurrentUserNotificationsQuery() {
  return useQuery({
    queryKey: ['get-current-user-notifications'],
    queryFn: fetchCurrentUserNotifications,
  });
}
