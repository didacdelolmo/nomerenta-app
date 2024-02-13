import useCreatePostForm from '../../hooks/post/use-create-post-form';
import Editor from '../Editor';

export default function CreatePost() {
  const {
    title,
    content,
    handleTitle,
    handleContent,
    handleMarkdown,
    handleSubmit,
    isPending,
  } = useCreatePostForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 gap-5 flex flex-col outline outline-1 outline-gray-500"
    >
      <div className="flex flex-col md:flex-row items-center gap-2 p-1 md:p-0">
        <h2 className="text-4xl m-0">No me renta</h2>
        <input
          onChange={handleTitle}
          value={title}
          placeholder="la navidad"
          className="text-4xl flex-1 min-w-0 w-full text-center md:text-start md:px-2"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Editor
          placeholder={`No me renta ${title ? title : 'la navidad'}`}
          content={content}
          handleContent={handleContent}
          handleMarkdown={handleMarkdown}
        />
        <button
          type="submit"
          className="text-xl font-semibold"
          disabled={isPending}
        >
          Publicar
        </button>
      </div>
    </form>
  );
}
