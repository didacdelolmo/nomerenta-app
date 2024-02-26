import useSetOutsiderFlair from '../../hooks/user/use-set-outsider-flair';
import User from '../../store/types/user-interface';

export default function SetFlair({ user }: { user: User }) {
  const {
    flair,
    handleFlair,
    handleSubmit,
    isPending,
    isError,
    error,
    isSuccess,
  } = useSetOutsiderFlair({ user });

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <label className="font-bold">Etiqueta:</label>
        <div className='flex w-full'>
          <input
            onChange={handleFlair}
            value={flair}
            className="italic w-full border border-gray-600 border-r-0 rounded-l-md"
            type="text"
          />
          <button
            disabled={isPending}
            type="submit"
            className="bg-gray-200 px-2 border border-gray-600 hover:bg-black hover:text-white text-sm font-medium"
          >
            Actualizar
          </button>
        </div>
      </form>
      {isPending && <span>Actualizando...</span>}
      {isError && (
        <span className="text-red-600 underline">{error.message}</span>
      )}
      {isSuccess && <span>actualizado Satisfactoriamente</span>}
    </>
  );
}
