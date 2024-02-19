import useProfileState from '../../hooks/user/use-profile-state';
import useUpdateCurrentUserAvatarInput from '../../hooks/user/use-update-current-user-avatar-form';
import useUser from '../../hooks/user/use-user';
import useUserAvatarURL from '../../hooks/user/use-user-avatar-url';
import useUserRoleClassColor from '../../hooks/user/use-user-role-class';
import User from '../../store/types/user-interface';
import ProfileComments from './ProfileComments';
import ProfilePosts from './ProfilePosts';

export default function ProfileContent({ user }: { user: User }) {
  const { isCurrentUser } = useUser();
  const { classColor } = useUserRoleClassColor({ user });

  const { username, roleId, biography, flair } = user;
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
          <div className="flex flex-col">
            <span className={`${classColor} font-bold text-2xl`}>
              {username}
            </span>
            {roleId === 'premium' && (
              <div className="bg-yellow-600 w-fit text-white font-bold text-sm px-2">
                Premium
              </div>
            )}
            {roleId === 'admin' && (
              <div className="bg-red-600 w-fit text-white font-bold text-sm px-2">
                Administrador
              </div>
            )}
            {roleId === 'boss' && (
              <div className="bg-purple-600 w-fit text-white font-bold text-sm px-2">
                El Jefe
              </div>
            )}
            {flair && <span className="text-lg italic">{flair}</span>}
          </div>
        </div>
        {isCurrentUser(user) && (
          <label className="w-fit bg-gray-100 outline outline-1 px-2 hover:bg-gray-200 hover:cursor-pointer">
            <span>Cambiar foto de perfil</span>
            <input
              onChange={handleInput}
              className="hidden"
              type="file"
              accept="image/*"
            />
          </label>
        )}
        {isPending && <span>Actualizando...</span>}
        {isError && (
          <span className="text-red-600 underline">{error.message}</span>
        )}
        {isSuccess && <span>ala Ya tienes foto</span>}
        {biography && <p>{biography}</p>}
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
