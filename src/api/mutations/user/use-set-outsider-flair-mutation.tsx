import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchSetOutsiderFlair } from '../../api';
import User from '../../../store/types/user-interface';

export default function useSetOutsiderFlairMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchSetOutsiderFlair,
    onSuccess: (data) => {
      const user: User = data.data;

      queryClient.invalidateQueries({ queryKey: ['get-user', user._id] });
    },
  });
}
