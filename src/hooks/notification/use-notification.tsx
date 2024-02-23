import Notification from '../../store/types/notification-interface';
import User from '../../store/types/user-interface';
import Post from '../../store/types/post-interface';
import useUserAvatarURL from '../user/use-user-avatar-url';

export default function useNotification({
  notification,
}: {
  notification: Notification;
}) {
  const sender = notification.sender as User;
  const post = notification.post as Post;
  const message = notification.message;

  const existsSender = sender !== null;
  const existsPost = post !== null;

  const { avatar } = useUserAvatarURL({ user: sender });

  return {
    sender,
    post,
    message,
    existsSender,
    existsPost,
    senderAvatar: avatar,
  };
}
