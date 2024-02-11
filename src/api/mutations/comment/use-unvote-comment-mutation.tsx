import { useMutation, useQueryClient } from '@tanstack/react-query';
import Comment from '../../../store/types/comment-interface';
import { fetchUnvoteComment } from '../../api';

export default function useUnvoteCommentMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUnvoteComment,
    onSuccess: (data) => {
      const comment: Comment = data.data;
      const postId = comment.post;

      queryClient.invalidateQueries({
        queryKey: ['get-post-comments', postId],
      });
    },
  });
}
