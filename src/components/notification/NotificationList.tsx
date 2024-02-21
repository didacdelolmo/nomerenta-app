import { useEffect } from 'react';
import useGetCurrentUserNotificationsQuery from '../../api/queries/notification/use-get-current-user-notifications-query';
import useMarkCurrentUserNotificationsAsSeen from '../../api/mutations/notification/use-mark-current-user-notifications-as-seen-mutation';
import NotificationPreview from './NotificationPreview';

export default function NotificationList() {
  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetCurrentUserNotificationsQuery();

  const { mutate } = useMarkCurrentUserNotificationsAsSeen();

  useEffect(() => {
    if (isSuccess) {
      mutate();
    }
  }, [isSuccess]);

  return (
    <>
      <div className="flex flex-col outline outline-1 outline-gray-600 p-2">
        <h2>Notificaciones</h2>
        <div className="flex flex-col gap-2">
          {isPending && <span>Cargando...</span>}
          {isError && (
            <span className="text-red-600 underline">{error.message}</span>
          )}
          {isSuccess &&
            response?.data.map((notification, index) => (
              <NotificationPreview key={index} notification={notification} />
            ))}
        </div>
      </div>
    </>
  );
}
