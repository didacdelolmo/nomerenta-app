import useCreateCurrentUserPostForm from '../../hooks/post/use-create-current-user-post-form';

export default function CreatePost() {
  const { title, content, handleTitle, handleContent, handleSubmit, isPending } =
    useCreateCurrentUserPostForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 gap-5 flex flex-col outline outline-1 outline-gray-500"
    >
      <div className="flex items-center gap-2">
        <h2 className="text-4xl m-0">No me renta</h2>
        <input
          onChange={handleTitle}
          value={title}
          placeholder="la navidad"
          className="text-4xl px-2 flex-1 min-w-0"
          type="text"
          required
        />
      </div>
      <textarea
        onChange={handleContent}
        value={content}
        placeholder={`No me renta ${title ? title : 'la navidad'}`}
        className="p-2 text-lg"
        cols={30}
        rows={10}
        required
      />
      <button type="submit" className="text-xl font-semibold" disabled={isPending}>
        Publicar
      </button>
    </form>
  );
}
