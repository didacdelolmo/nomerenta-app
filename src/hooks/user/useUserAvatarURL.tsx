import User from '../../store/types/user-interface';

export default function useUserAvatarURL({ user }: { user: User }) {
  const { VITE_REST_API_URL = 'http://127.0.0.1:3000' } = import.meta.env;

  if (user.avatar !== null) {
    return `${VITE_REST_API_URL}/avatars/${user.avatar}`;
  }
  return 'public/default.jpg';
}
