import useLoginMutation from '../../api/mutations/use-login-mutation';
import useAuthState from './use-auth-state';

export default function useLoginForm() {
  const { username, password, handleUsername, handlePassword } = useAuthState();
  const mutation = useLoginMutation();

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
