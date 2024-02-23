import { useState } from 'react';
import useLoginMutation from '../../api/mutations/auth/use-login-mutation';

export default function useLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useLoginMutation();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ username, password });
  };

  return {
    username,
    password,
    handleUsername,
    handlePassword,
    handleSubmit,
    ...mutation,
  };
}
