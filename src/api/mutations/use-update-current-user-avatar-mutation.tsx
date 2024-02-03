import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUpdateCurrentUserAvatar } from '../api';
import User from '../../store/types/user-interface';
import useUserStore from '../../store/user-store';

export default function useUpdateCurrentUserAvatarMutation() {
  const setUser = useUserStore((state) => state.setUser);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchUpdateCurrentUserAvatar,
    onSuccess: (data) => {
      const user: User = data.data;

      setUser(user);
      queryClient.setQueryData(['get-current-user'], user);
    },
  });

  return mutation;
}
