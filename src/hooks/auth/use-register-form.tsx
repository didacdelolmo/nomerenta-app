import useRegisterMutation from '../../api/mutations/use-register-mutation';
import useAuthState from './use-auth-state';

export default function useRegisterForm() {
  const { username, password, handleUsername, handlePassword } = useAuthState();
  const mutation = useRegisterMutation();

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
