import EasyMDE from 'easymde';
import useUser from './user/useUser';
import { useMemo } from 'react';

export default function useEditor() {
  const { isPremium } = useUser();

  const editorOptions: EasyMDE.Options = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      status: false,
      maxHeight: '12rem'
    };
  }, []);

  return { isPremium, editorOptions };
}
