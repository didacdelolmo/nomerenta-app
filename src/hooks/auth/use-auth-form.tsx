import { useState } from 'react';
import useLoginMutation from '../../api/mutations/use-login-mutation';
import useRegisterMutation from '../../api/mutations/use-register-mutation';

export default function useAuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {
    mutate: register,
    isPending: isRegisterPending,
    isError: isRegisterError,
    error: registerError,
  } = useRegisterMutation();
  const {
    mutate: login,
    isPending: isLoginPending,
    isError: isLoginError,
    error: loginError,
  } = useLoginMutation();

  const isPending = isRegisterPending || isLoginPending;
  const isError = isRegisterError || isLoginError;
  const error = isRegisterError ? registerError : loginError;

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    register({ username, password });
  };
  const handleLogin = () => {
    login({ username, password });
  };

  return {
    username,
    password,
    handleUsername,
    handlePassword,
    handleRegister,
    handleLogin,
    isPending,
    isError,
    error,
  };
}
