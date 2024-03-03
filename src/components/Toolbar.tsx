import { Editor } from '@tiptap/react';
import {
  Bold,
  Heading2,
  ImagePlus,
  Italic,
  Palette,
  Strikethrough,
  Underline,
} from 'lucide-react';
import useImageUploadMutation from '../api/mutations/image/use-image-upload-mutation';
import React, { useRef } from 'react';
import { getImageUrl } from '../utils/image-url';

export default function Toolbar({ editor }: { editor: Editor | null }) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const colorInputRef = useRef<HTMLInputElement>(null);

  const { mutate: upload } = useImageUploadMutation();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }
    const image = files[0];

    upload(
      { file: image },
      {
        onSuccess: (response) => {
          if (editor) {
            const url = getImageUrl(response.data.image);
            editor.chain().focus().setImage({ src: url }).run();
          }
        },
      }
    );
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="flex rounded-md border border-gray-600 p-1 gap-1">
      <button
        type="button"
        onClick={() => {
          editor.chain().focus().toggleBold().run();
        }}
        // disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`${
          editor.isActive('bold') && 'bg-gray-200'
        } p-2 rounded-md hover:bg-gray-200`}
      >
        <Bold className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => {
          editor.chain().focus().toggleItalic().run();
        }}
        // disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`${
          editor.isActive('italic') && 'bg-gray-200'
        } p-2 rounded-md hover:bg-gray-200`}
      >
        <Italic className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => {
          editor.chain().focus().toggleUnderline().run();
        }}
        // disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={`${
          editor.isActive('underline') && 'bg-gray-200'
        } p-2 rounded-md hover:bg-gray-200`}
      >
        <Underline className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => {
          editor.chain().focus().toggleStrike().run();
        }}
        // disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`${
          editor.isActive('strike') && 'bg-gray-200'
        } p-2 rounded-md hover:bg-gray-200`}
      >
        <Strikethrough className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        // disabled={!editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${
          editor.isActive('heading') && 'bg-gray-200'
        } p-2 rounded-md hover:bg-gray-200`}
      >
        <Heading2 className="size-4" />
      </button>
      <input
        ref={colorInputRef}
        value={editor.getAttributes('textStyle').color}
        onInput={(e) => {
          const target = e.target as HTMLInputElement;
          editor.chain().focus().setColor(target.value).run();
        }}
        type="color"
        className="hidden"
      />
      <button
        type="button"
        onClick={() => colorInputRef.current?.click()}
        className="p-2 rounded-md hover:bg-gray-200"
      >
        <Palette className="size-4" />
      </button>
      <input
        ref={imageInputRef}
        onChange={handleImageUpload}
        type="file"
        accept="image/jpeg, image/png"
        className="hidden"
      />
      <button
        onClick={() => imageInputRef.current?.click()}
        type="button"
        className="p-2 rounded-md hover:bg-gray-200"
      >
        <ImagePlus className="size-4" />
      </button>
    </div>
  );
}
