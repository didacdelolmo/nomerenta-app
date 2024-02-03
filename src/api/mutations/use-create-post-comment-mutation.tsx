import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCreatePostComment } from '../api';
import Comment from '../../store/types/comment-interface';

export default function useCreatePostCommentMutation() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: fetchCreatePostComment,
    onSuccess: (data) => {
      const comment: Comment = data.data;

      queryClient.invalidateQueries({
        queryKey: ['get-post-comments', comment.post],
      });
    },
  });

  return mutation;
}
