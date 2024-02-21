import EasyMDE from 'easymde';
import useUser from './user/use-user';
import { useMemo } from 'react';

export default function useEditor() {
  const { isMember } = useUser();

  const editorOptions: EasyMDE.Options = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
      status: false,
      maxHeight: '12rem'
    };
  }, []);

  return { isMember, editorOptions };
}
