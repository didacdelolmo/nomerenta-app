import { useQuery } from '@tanstack/react-query';
import { fetchReplacements } from '../../api';

export default function useGetReplacementsQuery() {
  return useQuery({
    queryKey: ['get-replacements'],
    queryFn: fetchReplacements,
  });
}
