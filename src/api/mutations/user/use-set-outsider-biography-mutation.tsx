import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchSetOutsiderBiography } from '../../api';
import User from '../../../store/types/user-interface';

export default function useSetOutsiderBiographyMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchSetOutsiderBiography,
    onSuccess: (data) => {
      const user: User = data.data;

      queryClient.invalidateQueries({ queryKey: ['get-user', user._id] });
    },
  });
}
