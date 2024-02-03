import { useState } from 'react';
import useRegisterMutation from '../api/mutations/use-register-mutation';

export function useRegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { mutate, isPending, isError, error, isSuccess } = useRegisterMutation();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ username, password });
  };

  return {
    username,
    password,
    handleUsername,
    handlePassword,
    handleSubmit,
    isPending,
    isError,
    error,
    isSuccess
  };
}
