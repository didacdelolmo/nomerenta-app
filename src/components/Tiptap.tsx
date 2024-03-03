import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './Toolbar';
import Placeholder from '@tiptap/extension-placeholder';
import useUserStore from '../store/user-store';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Color from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';

export default function Tiptap({
  placeholder,
  content,
  handleContent,
}: {
  placeholder: string;
  content: string;
  handleContent: (content: string) => void;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        dropcursor: false,
        heading: {
          HTMLAttributes: {
            class: 'tiptap-h2',
            levels: [2],
          }
        }
      }),
      Placeholder.configure({
        placeholder,
        emptyEditorClass: 'is-editor-empty',
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'tiptap-image',
        },
      }),
      Link.configure({
        HTMLAttributes: {
          class: 'tiptap-class'
        }
      }),
      TextStyle,
      Color,
      Underline,
    ],
    content,
    editorProps: {
      attributes: {
        class: 'rounded-md border border-gray-600 p-2 text-lg min-h-32',
      },
    },
    onUpdate({ editor }) {
      handleContent(editor.getHTML());
    },
  });

  const user = useUserStore((state) => state.user);
  if (!user || user.roleId === 'member') {
    return (
      <textarea
        onChange={(e) => {
          handleContent(e.target.value);
        }}
        value={content}
        placeholder={placeholder}
        className="rounded-md border border-gray-600 p-2 text-lg h-32"
      ></textarea>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
