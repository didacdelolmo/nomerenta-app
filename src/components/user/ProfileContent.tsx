import { useState } from 'react';
import useProfileState from '../../hooks/user/use-profile-state';
import useUserAvatarURL from '../../hooks/user/use-user-avatar-url';
import useUserRoleColorClass from '../../hooks/user/use-user-role-class';
import User from '../../store/types/user-interface';
import ChangeAvatar from './ChangeAvatar';
import ProfileComments from './ProfileComments';
import ProfilePosts from './ProfilePosts';
import SetFlair from './SetFlair';
import SetBiography from './SetBiography';
import useUserStore from '../../store/user-store';
import FollowButton from './FollowButton';
import UnfollowButton from './UnfollowButton';

export default function ProfileContent({ user }: { user: User }) {
  const [canEdit, setCanEdit] = useState(false);
  const currentUser = useUserStore((state) => state.user);

  const { _id, username, roleId, flair, biography, followers } = user;
  const { avatar } = useUserAvatarURL({ user });
  const { roleColorClass } = useUserRoleColorClass({ user });

  const {
    isPostsSection,
    isCommentsSection,
    setPostsSection,
    setCommentsSection,
  } = useProfileState();

  return (
    <div className="relative flex flex-col outline outline-1 outline-gray-500 p-2 gap-5">
      {(!currentUser || currentUser?.roleId === 'member') && (
        <button className="absolute right-0 mr-2">
          <a
            href="https://buy.stripe.com/9AQg08e7bc312haaEF"
            target="_blank"
            className="hover:cursor-default"
          >
            Comprar PREMIUM
          </a>
        </button>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <img height={75} width={75} src={avatar} alt="Avatar" />
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <span className={`${roleColorClass} font-bold text-2xl`}>
                {username}
              </span>
              {roleId === 'premium' && (
                <div className="bg-yellow-600 w-fit text-white font-bold text-sm px-2">
                  Premium
                </div>
              )}
              {roleId === 'editor' && (
                <div className="bg-pink-600 w-fit text-white font-bold text-sm px-2">
                  Editor
                </div>
              )}
              {roleId === 'judge' && (
                <div className="bg-teal-600 w-fit text-white font-bold text-sm px-2">
                  Administrador
                </div>
              )}
              {roleId === 'police_officer' && (
                <div className="bg-blue-600 w-fit text-white font-bold text-sm px-2">
                  Administrador
                </div>
              )}
              {roleId === 'professor' && (
                <div className="bg-purple-600 w-fit text-white font-bold text-sm px-2">
                  El Jefe
                </div>
              )}
              {roleId === 'dealer' && (
                <div className="bg-lime-600 w-fit text-white font-bold text-sm px-2">
                  El Jefe
                </div>
              )}
              {roleId === 'dictator' && (
                <div className="bg-red-600 w-fit text-white font-bold text-sm px-2">
                  El Jefe
                </div>
              )}
            </div>
            {flair && <span className="text-lg italic leading-5">{flair}</span>}
          </div>
        </div>
        {currentUser?._id === _id && <ChangeAvatar />}
        <div className="flex flex-col w-fit">
          {currentUser && currentUser._id !== _id && (
            <>
              {followers.includes(currentUser?._id as never) ? (
                <UnfollowButton target={user} />
              ) : (
                <FollowButton target={user} />
              )}
            </>
          )}
          <span>{followers.length} seguidores</span>
        </div>
        {biography && <p>{biography}</p>}
      </div>
      {currentUser?.roleId === 'editor' && (
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
