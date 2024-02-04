import useUser from './useUser';

export default function useUserAvatarURL() {
  const { user, existsUser } = useUser();

  if (existsUser && user) {
    const { VITE_REST_API_URL = 'http://127.0.0.1:3000' } = import.meta.env;
    if (user.avatar !== null) {
      return `${VITE_REST_API_URL}/avatars/${user.avatar}`;
    }
  }
  return 'public/default.jpg';
}
