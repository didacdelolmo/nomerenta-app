import User from '../../store/types/user-interface';
import defaultAvatar from '../../assets/default.jpg';

export default function useUserAvatarURL({ user }: { user: User }) {
  const { VITE_REST_API_URL } = import.meta.env;

  if (user.avatar !== null) {
    return `${VITE_REST_API_URL}/avatars/${user.avatar}`;
  }
  return defaultAvatar;
}
