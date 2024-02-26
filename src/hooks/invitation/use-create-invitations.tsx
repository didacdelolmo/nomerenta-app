import { useState } from 'react';
import useCreateCurrentUserInvitationsMutation from '../../api/mutations/invitation/use-create-current-user-invitations-mutation';

export default function useCreateInvitations() {
  const [email, setEmail] = useState('');
  const mutation = useCreateCurrentUserInvitationsMutation();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({ email });
  };

  return {
    email,
    handleEmail,
    handleSubmit,
    ...mutation,
  };
}
