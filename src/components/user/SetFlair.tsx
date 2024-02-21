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
        <input
          onChange={handleFlair}
          value={flair}
          className="italic w-full"
          type="text"
        />
        <button disabled={isPending} type="submit">
          Actualizar
        </button>
      </form>
      {isPending && <span>Actualizando...</span>}
      {isError && (
        <span className="text-red-600 underline">{error.message}</span>
      )}
      {isSuccess && <span>actualizado Satisfactoriamente</span>}
    </>
  );
}
