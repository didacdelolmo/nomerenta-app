import { useMutation } from '@tanstack/react-query';
import { fetchIncrementCounter } from '../../api';

export default function useIncrementCounterMutation() {
  return useMutation({
    mutationFn: fetchIncrementCounter,
  });
}
