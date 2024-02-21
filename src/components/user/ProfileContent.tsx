import { useState } from 'react';
import useProfileState from '../../hooks/user/use-profile-state';
import useUser from '../../hooks/user/use-user';
import useUserAvatarURL from '../../hooks/user/use-user-avatar-url';
import useUserRoleClassColor from '../../hooks/user/use-user-role-class';
import User from '../../store/types/user-interface';
import ChangeAvatar from './ChangeAvatar';
import ProfileComments from './ProfileComments';
import ProfilePosts from './ProfilePosts';
import SetFlair from './SetFlair';
import SetBiography from './SetBiography';

export default function ProfileContent({ user }: { user: User }) {
  const [canEdit, setCanEdit] = useState(false);

  const { isCurrentUser, isAdmin, isBoss } = useUser();
  const { classColor } = useUserRoleClassColor({ user });

  const { username, roleId, biography, flair } = user;
  const avatar = useUserAvatarURL({ user });

  const {
    isPostsSection,
    isCommentsSection,
    setPostsSection,
    setCommentsSection,
  } = useProfileState();

  return (
    <div className="flex flex-col outline outline-1 outline-gray-500 p-2 gap-5">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
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
            {flair && <span className="text-lg italic leading-5 my-1">{flair}</span>}
          </div>
        </div>
        {isCurrentUser(user) && <ChangeAvatar />}
        {biography && <p>{biography}</p>}
      </div>
      {(isAdmin || isBoss) && (
        <div className="flex flex-col">
          <span
            onClick={() => setCanEdit(!canEdit)}
            className="hover:underline hover:cursor-pointer text-xl font-bold w-fit"
          >
            Administrar perfil
          </span>
          <hr className="w-full" />
          {canEdit && (
            <div className="flex flex-col gap-2">
              <SetFlair user={user} />
              <SetBiography user={user} />
            </div>
          )}
        </div>
      )}
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
