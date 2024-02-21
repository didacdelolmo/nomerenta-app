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
        <textarea
          onChange={handleBiography}
          value={biography}
          className="w-full"
          rows={5}
        ></textarea>
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
