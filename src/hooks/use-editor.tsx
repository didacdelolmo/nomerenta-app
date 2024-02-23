import EasyMDE from 'easymde';
import { useMemo } from 'react';

export default function useEditorOptions() {
  const options: EasyMDE.Options = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      status: false,
      maxHeight: '12rem'
    };
  }, []);

  return { options };
}
