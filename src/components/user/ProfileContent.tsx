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
import ProfileFollows from './ProfileFollows';
import UserInvitations from './UserInvitations';

export default function ProfileContent({ user }: { user: User }) {
  const [canEdit, setCanEdit] = useState(false);
  const [showInvitations, setShowInvitations] = useState(false);

  const currentUser = useUserStore((state) => state.user);

  const { _id, username, roleId, flair, biography, followers } = user;
  const { avatar } = useUserAvatarURL({ user });
  const { roleColorClass } = useUserRoleColorClass({ user });

  const {
    isPostsSection,
    isCommentsSection,
    isFollowsSection,
    setPostsSection,
    setCommentsSection,
    setFollowsSection,
  } = useProfileState();

  return (
    <div className="relative flex flex-col outline outline-1 outline-gray-500 gap-5">
      {(!currentUser || currentUser?.roleId === 'member') && (
        <button className="lg:hidden absolute right-0 m-2 bg-yellow-600 px-2 text-white font-semibold rounded-md hover:bg-yellow-500">
          <a href="https://buy.stripe.com/9AQg08e7bc312haaEF" target="_blank">
            Comprar PREMIUM
          </a>
        </button>
      )}
      <div className="flex flex-col gap-2 p-2">
        <div className="flex gap-2 items-center">
          <img
            className="rounded-md"
            height={75}
            width={75}
            src={avatar}
            alt="Avatar"
          />
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <span className={`${roleColorClass} font-bold text-2xl`}>
                {username}
              </span>
              {roleId === 'premium' && (
                <div className="bg-yellow-600 w-fit text-white font-bold text-sm px-2 rounded-md">
                  Premium
                </div>
              )}
              {roleId === 'editor' && (
                <div className="bg-pink-600 w-fit text-white font-bold text-sm px-2 rounded-md">
                  Editor
                </div>
              )}
              {roleId === 'judge' && (
                <div className="bg-teal-600 w-fit text-white font-bold text-sm px-2 rounded-md">
                  Juez
                </div>
              )}
              {roleId === 'police_officer' && (
                <div className="bg-blue-600 w-fit text-white font-bold text-sm px-2 rounded-md">
                  Policía
                </div>
              )}
              {roleId === 'professor' && (
                <div className="bg-purple-600 w-fit text-white font-bold text-sm px-2 rounded-md">
                  Profesor
                </div>
              )}
              {roleId === 'dealer' && (
                <div className="bg-lime-600 w-fit text-white font-bold text-sm px-2 rounded-md">
                  Traficante
                </div>
              )}
              {roleId === 'dictator' && (
                <div className="bg-red-600 w-fit text-white font-bold text-sm px-2 rounded-md">
                  Dictador
                </div>
              )}
            </div>
            {flair && (
              <span className="bg-gray-100 rounded-md px-2 text-lg py-0.5 italic leading-5">
                {flair}
              </span>
            )}
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
        {biography && (
          <div>
            <span className="font-bold text-lg">Sobre mí</span>
            <p className="text-gray-800">{biography}</p>
          </div>
        )}
      </div>
      {currentUser?._id === _id && (
        <div className="flex flex-col">
          <span
            onClick={() => {
              setShowInvitations(!showInvitations);
            }}
            className="text-xl font-bold px-2 pb-2 hover:underline hover:cursor-pointer w-fit"
          >
            Obtener invitaciones
          </span>
          {showInvitations && <UserInvitations />}
          <hr className='border-gray-600' />
        </div>
      )}
      {currentUser?.roleId === 'editor' && (
        <div className="flex flex-col">
          <span
            onClick={() => setCanEdit(!canEdit)}
            className="hover:underline hover:cursor-pointer text-xl font-bold w-fit px-2 pb-2"
          >
            Administrar perfil
          </span>
          {canEdit && (
            <div className="flex flex-col gap-2 px-2 pb-2">
              <SetFlair user={user} />
              <SetBiography user={user} />
            </div>
          )}
          <hr className="border-gray-600" />
        </div>
      )}
      <div className="flex flex-col">
        <div className="flex gap-2 text-xl font-bold px-2 pb-2 flex-wrap">
          <span
            onClick={setPostsSection}
            className={`${
              isPostsSection && 'bg-gray-200'
            } px-2 rounded-md hover:bg-gray-200 hover:cursor-pointer text-2xl`}
          >
            Publicaciones
          </span>
          <span
            onClick={setCommentsSection}
            className={`${
              isCommentsSection && 'bg-gray-200'
            } px-2 rounded-md hover:bg-gray-200 hover:cursor-pointer text-2xl`}
          >
            Comentarios
          </span>
          {currentUser?._id === _id && (
            <span
              onClick={setFollowsSection}
              className={`${
                isFollowsSection && 'bg-gray-200'
              } px-2 rounded-md hover:bg-gray-200 hover:cursor-pointer text-2xl`}
            >
              Siguiendo
            </span>
          )}
        </div>
        <hr className="border-gray-600" />
        {isPostsSection && <ProfilePosts user={user} />}
        {isCommentsSection && <ProfileComments user={user} />}
        {isFollowsSection && <ProfileFollows user={user} />}
      </div>
    </div>
  );
}
