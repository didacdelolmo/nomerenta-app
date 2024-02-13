import useProfileState from '../../hooks/user/useProfileState';
import useUpdateCurrentUserAvatarInput from '../../hooks/user/useUpdateCurrentUserAvatarForm';
import useUser from '../../hooks/user/useUser';
import useUserAvatarURL from '../../hooks/user/useUserAvatarURL';
import User from '../../store/types/user-interface';
import ProfileComments from './ProfileComments';
import ProfilePosts from './ProfilePosts';

export default function ProfileContent({ user }: { user: User }) {
  const { username, roleId } = user;
  const avatar = useUserAvatarURL({ user });

  const { isCurrentUser } = useUser();

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
          <div className="flex items-center gap-2">
            <span
              className={`${
                roleId === 'premium' && 'text-yellow-600'
              } font-bold text-2xl`}
            >
              {username}
            </span>
            {roleId === 'premium' && (
              <div className="flex items-center bg-gray-100 px-2 rounded-full gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-blue-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-bold">Usuario premium</span>
              </div>
            )}
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
