import { useState } from 'react';
import User from '../../store/types/user-interface';
import useSetOutsiderBiographyMutation from '../../api/mutations/user/use-set-outsider-biography-mutation';

export default function useSetOutsiderBiography({ user }: { user: User }) {
  const [biography, setBiography] = useState(user.biography ?? '');
  const mutation = useSetOutsiderBiographyMutation();

  const handleBiography = (e) => {
    setBiography(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({ userId: user._id, biography });
  };

  return {
    biography,
    handleBiography,
    handleSubmit,
    ...mutation,
  };
}
