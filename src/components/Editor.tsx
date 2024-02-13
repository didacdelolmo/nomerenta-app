import { SimpleMdeReact } from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import useEditor from '../hooks/use-editor';

export default function Editor({
  placeholder,
  content,
  handleContent,
  handleMarkdown,
}) {
  const { isPremium, editorOptions } = useEditor();

  return (
    <>
      {isPremium ? (
        <SimpleMdeReact
          onChange={handleMarkdown}
          value={content}
          options={editorOptions}
          className="text-lg"
          placeholder={placeholder}
        />
      ) : (
        <textarea
          onChange={handleContent}
          value={content}
          className="p-2 text-lg h-64"
          placeholder={placeholder}
          required
        />
      )}
    </>
  );
}
