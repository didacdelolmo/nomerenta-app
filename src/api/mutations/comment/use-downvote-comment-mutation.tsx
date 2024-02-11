import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchDownvoteComment } from '../../api';
import Comment from '../../../store/types/comment-interface';
export default function useDownvoteCommentMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchDownvoteComment,
    onSuccess: (data) => {
      const comment: Comment = data.data;
      const postId = comment.post;

      queryClient.invalidateQueries({
        queryKey: ['get-post-comments', postId],
      });
    },
  });
}
