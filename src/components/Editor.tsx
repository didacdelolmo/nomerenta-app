import { SimpleMdeReact } from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import useEditorOptions from '../hooks/use-editor';
import useUserStore from '../store/user-store';

export default function Editor({
  placeholder,
  content,
  handleContent,
  handleMarkdown,
}) {
  const user = useUserStore((state) => state.user);
  const { options } = useEditorOptions();

  return (
    <>
      {user?.roleId === 'member' ? (
        <SimpleMdeReact
          onChange={handleMarkdown}
          value={content}
          options={options}
          className="text-lg"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          onChange={handleContent}
          value={content}
          className="p-2 text-lg h-48"
          placeholder={placeholder}
          required
        />
      )}
    </>
  );
}
