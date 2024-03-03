import { useEffect, useState } from 'react';
import useUpdateReplacementsMutation from '../../api/mutations/replacement/use-update-replacements-mutation';
import useGetReplacementsQuery from '../../api/queries/replacement/use-get-replacements-query';
import Replacement from '../../store/types/replacement-interface';

export default function useUpdateReplacements() {
  const query = useGetReplacementsQuery();
  const { mutate: update, isSuccess: isUpdateSuccess } = useUpdateReplacementsMutation();

  const [replacements, setReplacements] = useState<Replacement[]>([]);

  useEffect(() => {
    if (query.isSuccess) {
      const response = query.data;

      setReplacements(response.data.replacements);
    }
  }, [query.isSuccess, query.data]);

  const addReplacement = (replacement: Replacement) => {
    setReplacements((currentReplacements) => [
      ...currentReplacements,
      replacement,
    ]);
  };
  const removeReplacement = (index: number) => {
    setReplacements((currentReplacements) =>
      currentReplacements.filter((_, i) => i !== index)
    );
  };

  const updateReplacements = () => {
    update({ replacements });
  };

  return {
    replacements,
    addReplacement,
    removeReplacement,
    updateReplacements,
    isUpdateSuccess,
    ...query,
  };
}
