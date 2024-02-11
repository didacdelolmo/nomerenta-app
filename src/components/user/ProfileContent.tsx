import useProfileState from '../../hooks/user/useProfileState';
import useUpdateCurrentUserAvatarInput from '../../hooks/user/useUpdateCurrentUserAvatarForm';
import useUserAvatarURL from '../../hooks/user/useUserAvatarURL';
import User from '../../store/types/user-interface';
import ProfileComments from './ProfileComments';
import ProfilePosts from './ProfilePosts';

export default function ProfileContent({ user }: { user: User }) {
  const { username } = user;
  const avatar = useUserAvatarURL({ user });

  const { handleInput, isPending, isError, error, isSuccess } =
    useUpdateCurrentUserAvatarInput();

  const {
    isPostsSection,
    isCommentsSection,
    setPostsSection,
    setCommentsSection,
  } = useProfileState();

  return (
    <div className="flex flex-col outline outline-1 outline-gray-500 p-2 gap-5">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-end">
          <img height={75} width={75} src={avatar} alt="Avatar" />
          <span className="font-bold text-2xl">{username}</span>
        </div>
        <label className='w-fit bg-gray-100 outline outline-1 px-2 hover:bg-gray-200 hover:cursor-pointer'>
          <span>Cambiar foto de perfil</span>
          <input onChange={handleInput} className='hidden' type="file" accept="image/*" />
        </label>
        {isPending && <span>Actualizando...</span>}
        {isError && <span className='text-red-600 underline'>{error.message}</span>}
        {isSuccess && <span>ala Ya tienes foto</span>}
      </div>
      <div className="flex flex-col">
        <div className="flex gap-5 text-xl font-bold">
          <span
            onClick={setPostsSection}
            className="hover:underline hover:cursor-pointer"
          >
            Publicaciones
          </span>
          <span
            onClick={setCommentsSection}
            className="hover:underline hover:cursor-pointer"
          >
            Comentarios
          </span>
        </div>
        <hr className="w-full" />
        {isPostsSection && <ProfilePosts user={user} />}
        {isCommentsSection && <ProfileComments user={user} />}
      </div>
    </div>
  );
}
