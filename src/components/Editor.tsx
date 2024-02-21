import { SimpleMdeReact } from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import useEditor from '../hooks/use-editor';

export default function Editor({
  placeholder,
  content,
  handleContent,
  handleMarkdown,
}) {
  const { isMember, editorOptions } = useEditor();

  return (
    <>
      {!isMember ? (
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
          className="p-2 text-lg h-48"
          placeholder={placeholder}
          required
        />
      )}
    </>
  );
}
