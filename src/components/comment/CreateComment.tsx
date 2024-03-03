import useCreateCommentForm from '../../hooks/comment/use-create-comment-form';
import Tiptap from '../Tiptap';

export default function CreateComment({
  postId,
  parentId,
  onSuccessCallback,
}: {
  postId: string;
  parentId?: string;
  onSuccessCallback?: () => void;
}) {
  const {
    content,
    handleContent,
    handleSubmit,
    isPending,
    isError,
    error,
    isSuccess,
  } = useCreateCommentForm({ postId, parentId, onSuccessCallback });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Tiptap
        placeholder="¿En qué piensas?"
        content={content}
        handleContent={handleContent}
        clearContent={isSuccess}
      />

      {/* <Editor
        placeholder="¿En qué piensas?"
        content={content}
        handleContent={handleContent}
        handleMarkdown={handleMarkdown}
      /> */}
      {/* <textarea
        value={content}
        onChange={handleContent}
        rows={5}
        placeholder="¿En qué piensas?"
        className="p-2 text-lg"
        required
      ></textarea> */}
      <button
        disabled={isPending}
        className="text-xl bg-gray-200 rounded-md py-1.5 font-bold border border-gray-600 hover:bg-black hover:text-white"
      >
        Publicar comentario
      </button>
      {isError && (
        <span className="text-red-600 underline">{error?.message}</span>
      )}
    </form>
  );
}
