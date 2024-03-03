import useCreatePostForm from '../../hooks/post/use-create-post-form';
import Tiptap from '../Tiptap';

export default function CreatePost() {
  const {
    title,
    content,
    handleTitle,
    handleContent,
    handleSubmit,
    isPending,
  } = useCreatePostForm();

  return (
    <form onSubmit={handleSubmit} className="px-2 gap-2 flex flex-col">
      {/* <span>Members Only</span> */}
      <div className="flex flex-col md:flex-row items-center gap-2 p-1 md:p-0 mt-2">
        <h2 className="text-4xl m-0 font-bold">No me renta</h2>
        <input
          onChange={handleTitle}
          value={title}
          placeholder="salir de fiesta"
          className="box-border text-4xl flex-1 min-w-0 w-full text-center md:text-start md:px-2 border border-gray-600 rounded-lg"
          type="text"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <Tiptap
          placeholder="No te contengas..."
          content={content}
          handleContent={handleContent}
        />
        <button
          type="submit"
          className="text-xl border border-gray-600 bg-gray-200 hover:bg-black hover:text-white rounded-md py-1.5 font-bold"
          disabled={isPending}
        >
          Publicar
        </button>
      </div>
    </form>
  );
}
