import { useQuery } from '@tanstack/react-query';
import { fetchCurrentUserUnseenNotificationsCount } from '../../api';

export default function useGetCurrentUserUnseenNotificationsCountQuery() {
  return useQuery({
    queryKey: ['get-current-user-unseen-notifications-count'],
    queryFn: fetchCurrentUserUnseenNotificationsCount,
  });
}
