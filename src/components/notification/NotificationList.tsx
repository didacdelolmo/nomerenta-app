  import useGetCurrentUserNotificationsQuery from '../../api/queries/notification/use-get-current-user-notifications-query';
import NotificationPreview from './NotificationPreview';

export default function NotificationList() {
  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetCurrentUserNotificationsQuery();

  return (
    <>
      <div className="flex flex-col">
        <h2 className="p-2 text-2xl font-bold">Notificaciones</h2>
        {isPending && <span>Cargando...</span>}
        {isError && (
          <span className="text-red-600 underline">{error.message}</span>
        )}
        {isSuccess && (
          <div className="divide-y divide-gray-600">
            {response?.data.map((notification, index) => (
              <NotificationPreview key={index} notification={notification} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
