import { Link } from 'react-router-dom';
import User from '../../store/types/user-interface';
import useUserAvatarURL from '../../hooks/user/use-user-avatar-url';
import useUserRoleColorClass from '../../hooks/user/use-user-role-class';

export default function ProfilePreview({ user }: { user: User }) {
  const { _id, username } = user;
  const { avatar } = useUserAvatarURL({ user });
  const { roleColorClass } = useUserRoleColorClass({ user });

  return (
    <Link
      to={`/users/${_id}`}
      className="p-2 hover:cursor-pointer hover:bg-gray-100"
    >
      <div className='flex gap-2'>
        <img width={48} height={48} src={avatar} />
        <div className='flex flex-col justify-around'>
          <span className={`${roleColorClass} font-bold`}>{username}</span>
        </div>
      </div>
    </Link>
  );
}
