import useUpdateCurrentUserAvatarInput from '../../hooks/user/use-update-current-user-avatar-form';

export default function ChangeAvatar() {
  const { handleInput, isPending, isError, error, isSuccess } =
    useUpdateCurrentUserAvatarInput();

  return (
    <>
      <label className="w-fit rounded-md bg-gray-100 px-2 border border-gray-600 hover:bg-gray-200">
        <span>Cambiar foto de perfil</span>
        <input
          onChange={handleInput}
          className="hidden"
          type="file"
          accept="image/*"
        />
      </label>
      {isPending && <span>Actualizando...</span>}
      {isError && (
        <span className="text-red-600 underline">{error.message}</span>
      )}
      {isSuccess && <span>ala Ya tienes foto</span>}
    </>
  );
}
