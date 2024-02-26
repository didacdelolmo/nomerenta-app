import useSetOutsiderBiography from '../../hooks/user/use-set-outsider-biography';
import User from '../../store/types/user-interface';

export default function SetBiography({ user }: { user: User }) {
  const {
    biography,
    handleBiography,
    handleSubmit,
    isPending,
    isError,
    error,
    isSuccess,
  } = useSetOutsiderBiography({ user });

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <label className="font-bold">Biografía:</label>
        <div className="flex w-full">
          <textarea
            onChange={handleBiography}
            value={biography}
            className="italic w-full border border-gray-600 border-r-0 rounded-l-md"
            rows={3}
          ></textarea>
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
