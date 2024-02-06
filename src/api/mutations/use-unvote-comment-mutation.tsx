import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUnvoteComment } from '../api';
import Comment from '../../store/types/comment-interface';

export default function useUnvoteCommentMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUnvoteComment,
    onSuccess: (data) => {
      const comment: Comment = data.data;

    },
  });
}
