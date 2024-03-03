import { useMutation } from '@tanstack/react-query';
import { fetchImageUpload } from '../../api';

export default function useImageUploadMutation() {
  return useMutation({ mutationFn: fetchImageUpload });
}
