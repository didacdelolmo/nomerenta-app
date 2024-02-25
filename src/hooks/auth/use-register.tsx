import { useState } from 'react';
import useRegisterMutation from '../../api/mutations/auth/use-register-mutation';

export default function useRegister({
  invitationCode = '',
}: {
  invitationCode?: string;
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState(invitationCode);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const mutation = useRegisterMutation();

  const toggleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleCode = (e) => {
    setCode(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ username, password, code });
  };

  return {
    username,
    password,
    code,
    visiblePassword,
    toggleVisiblePassword,
    handleUsername,
    handlePassword,
    handleCode,
    handleSubmit,
    ...mutation,
  };
}
