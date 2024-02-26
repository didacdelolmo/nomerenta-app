import { Link } from 'react-router-dom';
import Notification from '../../store/types/notification-interface';
import useNotification from '../../hooks/notification/use-notification';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export default function NotificationPreview({
  notification,
}: {
  notification: Notification;
}) {
  const { post, message, seen, date, existsSender, senderAvatar, handleNotification } =
    useNotification({ notification });

  return (
    <>
      {post ? (
        <Link
          onClick={handleNotification}
          to={`/posts/${post._id}`}
          className="flex items-center justify-between gap-2 hover:bg-gray-50 p-2"
        >
          <div className="flex gap-2">
            {existsSender && (
              <img
                className="rounded-full"
                width={48}
                height={48}
                src={senderAvatar}
              ></img>
            )}
            <div className="flex flex-col">
              <span className="font-semibold">{message}</span>
              <span className="text-gray-800">
                Hace {formatDistanceToNow(date, { locale: es })}
              </span>
            </div>
          </div>
          {!seen && (
            <div className="size-2 animate-bounce bg-red-600 rounded-full"></div>
          )}
        </Link>
      ) : (
        <div onClick={handleNotification} className="p-2 hover:bg-gray-100 items-center justify-between">
          <div className="flex flex-col">
            <span className="font-semibold">{message}</span>
            <span className="text-gray-800">
              Hace {formatDistanceToNow(date, { locale: es })}
            </span>
          </div>
          {!seen && (
            <div className="size-2 animate-bounce bg-red-600 rounded-full"></div>
          )}
        </div>
      )}
    </>
  );
}
