import Notification from '../../store/types/notification-interface';
import User from '../../store/types/user-interface';
import Post from '../../store/types/post-interface';
import useUserAvatarURL from '../user/use-user-avatar-url';
import useMarkCurrentUserNotificationAsSeen from '../../api/mutations/notification/use-mark-current-user-notification-as-seen-mutation';

export default function useNotification({
  notification,
}: {
  notification: Notification;
}) {
  const _id = notification._id;
  const sender = notification.sender as User;
  const post = notification.post as Post;
  const message = notification.message;
  const seen = notification.seen;
  const date = notification.createdAt;

  const existsSender = sender !== null;
  const existsPost = post !== null;

  const { avatar } = useUserAvatarURL({ user: sender });

  const { mutate: markAsSeen } = useMarkCurrentUserNotificationAsSeen();

  const handleNotification = () => {
    if (!seen) {
      markAsSeen({ notificationId: _id });
    }
  };

  return {
    sender,
    post,
    message,
    seen,
    date,
    existsSender,
    existsPost,
    senderAvatar: avatar,
    handleNotification,
  };
}
