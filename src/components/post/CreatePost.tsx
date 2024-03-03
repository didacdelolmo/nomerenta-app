import { Cog } from 'lucide-react';
import useCreatePostForm from '../../hooks/post/use-create-post-form';
import usePostTimer from '../../hooks/post/use-post-timer';
import Tiptap from '../Tiptap';
import useUserStore from '../../store/user-store';

export default function CreatePost() {
  const {
    title,
    content,
    setContent,
    handleTitle,
    handleContent,
    handleSubmit,
    isPending,
    isError,
    error,
  } = useCreatePostForm();

  const {
    timeLeft,
    message,
    startTimer,
    // stopTimer,
    // resetTimer,
    replaceWords,
    isTicking,
  } = usePostTimer({ content, setContent, handleSubmit });

  const user = useUserStore((state) => state.user);

  return (
    <form onSubmit={handleSubmit} className="px-2 gap-2 flex flex-col">
      {/* <span>Members Only</span> */}
      <div className="flex flex-col md:flex-row items-center gap-2 p-1 md:p-0 mt-2">
        <h2 className="text-4xl m-0 font-bold">No me renta</h2>
        <input
          onChange={handleTitle}
          onFocus={startTimer}
          value={title}
          placeholder="salir de fiesta"
          className="box-border text-4xl flex-1 min-w-0 w-full text-center md:text-start md:px-2 border border-gray-600 rounded-lg"
          type="text"
          required
        />
      </div>
      <div className="flex justify-between">
        <span
          className={`${
            isTicking && timeLeft % 2 !== 0 ? 'visible' : 'invisible'
          } font-bold text-red-600`}
        >
          TIC...
        </span>
        <span className="italic text-red-600">
          {timeLeft} segundos {message}
        </span>
        <span
          className={`${
            isTicking && timeLeft % 2 === 0 ? 'visible' : 'invisible'
          } font-bold text-red-600`}
        >
          TAC...
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <Tiptap
          placeholder="No te contengas..."
          content={content}
          handleContent={handleContent}
          startTimer={startTimer}
        />
        <div className="flex gap-1">
          <button
            type="submit"
            className="flex-1 px-2 text-xl border border-gray-600 bg-gray-200 hover:bg-black hover:text-white rounded-md py-1.5 font-bold"
            disabled={isPending}
          >
            Publicar
          </button>
          {user?.roleId === 'dictator' && (
            <button
              type="button"
              onClick={replaceWords}
              className="px-2 border border-gray-600 bg-gray-200 hover:bg-black hover:text-white rounded-md py-1.5"
            >
              <Cog />
            </button>
          )}
        </div>
      </div>
      {isError && <span className="text-red-600">{error.message}</span>}
    </form>
  );
}
