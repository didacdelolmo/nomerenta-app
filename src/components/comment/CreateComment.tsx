import useCreateCommentForm from '../../hooks/comment/use-create-comment-form';

export default function CreateComment({
  postId,
  parentId,
  onSuccessCallback,
}: {
  postId: string;
  parentId?: string;
  onSuccessCallback?: () => void;
}) {
  const { content, handleContent, handleSubmit, isPending, isError, error } =
    useCreateCommentForm({ postId, parentId, onSuccessCallback });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <textarea
        value={content}
        onChange={handleContent}
        rows={5}
        placeholder="¿En qué piensas?"
        className="p-2 text-lg"
        required
      ></textarea>
      <button disabled={isPending} className="text-lg">
        Publicar comentario
      </button>
      {isError && (
        <span className="text-red-600 underline">{error?.message}</span>
      )}
    </form>
  );
}