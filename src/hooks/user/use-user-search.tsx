import { useEffect, useState } from 'react';
import useGetUsersQuery from '../../api/queries/user/use-get-users-query';

export default function useUserSearch() {
  const [username, setUsername] = useState('');
  const [debouncedUsername, setDebouncedUsername] = useState('');

  const query = useGetUsersQuery({ username: debouncedUsername });

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedUsername(username);
    }, 500);

    return () => clearTimeout(timerId);
  }, [username]);

  return { username, handleUsername, ...query };
}
