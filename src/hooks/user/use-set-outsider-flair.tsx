import { useState } from 'react';
import User from '../../store/types/user-interface';
import useSetOutsiderFlairMutation from '../../api/mutations/user/use-set-outsider-flair-mutation';

export default function useSetOutsiderFlair({ user }: { user: User }) {
  const [flair, setFlair] = useState(user.flair ?? '');
  const mutation = useSetOutsiderFlairMutation();

  const handleFlair = (e) => {
    setFlair(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({ userId: user._id, flair });
  };

  return {
    flair,
    handleFlair,
    handleSubmit,
    ...mutation,
  };
}
