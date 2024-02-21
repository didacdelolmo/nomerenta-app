import { Link } from 'react-router-dom';
import Notification from '../../store/types/notification-interface';
import useNotification from '../../hooks/notification/use-notification-hook';

export default function NotificationPreview({
  notification,
}: {
  notification: Notification;
}) {
  const { post, message, existsSender, senderAvatar } =
    useNotification({ notification });

  return (
    <>
      {post && (
        <Link
          to={`/posts/${post._id}`}
          className="flex items-center gap-2 outline outline-1 outline-gray-600 hover:bg-gray-50 p-2"
        >
          {existsSender && <img width={48} height={48} src={senderAvatar}></img>}
          {message}
        </Link>
      )}
    </>
  );
}
