import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUpdateReplacements } from '../../api';

export default function useUpdateReplacementsMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUpdateReplacements,

    onSuccess: (response) => {
      queryClient.setQueryData(['get-replacements'], { data: response.data });
    },
  });
}
