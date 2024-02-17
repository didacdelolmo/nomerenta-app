import useUpdateCurrentUserAvatarMutation from '../../api/mutations/user/use-update-current-user-avatar-mutation';

export default function useUpdateCurrentUserAvatarInput() {
  const mutation = useUpdateCurrentUserAvatarMutation();

  const handleInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      mutation.mutate({ file });
    }
  };

  return {
    handleInput,
    ...mutation,
  };
}
