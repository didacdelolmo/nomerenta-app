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
      {(user && user.roleId === 'dictator') ? (
        <SimpleMdeReact
          onChange={handleMarkdown}
          value={content}
          options={options}
          className="text-lg border border-gray-600 rounded-md outline-orange-400"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          onChange={handleContent}
          value={content}
          className="p-2 text-lg h-40 border border-gray-600 rounded-md"
          placeholder={placeholder}
          required
        />
      )}
    </>
  );
}
