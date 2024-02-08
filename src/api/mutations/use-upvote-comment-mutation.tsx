import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUpvoteComment } from '../api';
import Comment from '../../store/types/comment-interface';

export default function useUpvoteCommentMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchUpvoteComment,
    onSuccess: (data) => {
      const comment: Comment = data.data;
      const postId = comment.post;

      queryClient.invalidateQueries({
        queryKey: ['get-post-comments', postId],
      });
    },
  });
}
