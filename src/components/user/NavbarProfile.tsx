import { Link } from 'react-router-dom';
import useUser from '../../hooks/user/use-user';
import useUserAvatarURL from '../../hooks/user/use-user-avatar-url';
import User from '../../store/types/user-interface';
import useUserRoleClassColor from '../../hooks/user/use-user-role-class';

export default function NavbarProfile({ user }: { user: User }) {
  const { _id, username, anonymous: isAnonymous } = user;
  const { logout } = useUser();
  const { classColor } = useUserRoleClassColor({ user });
  const avatar = useUserAvatarURL({ user });

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center">
        <img height={48} width={48} src={avatar} alt={username} />
        <div className="flex flex-col">
          <span className={`${classColor} font-semibold`}>{username}</span>
          <span>Dios te bendiga</span>
        </div>
      </div>
      <div className="flex">
        {!isAnonymous && (
          <Link to={`/users/${_id}`}>
            <button>Ver perfil</button>
          </Link>
        )}
        <button onClick={logout} className="flex-1">
          {!isAnonymous ? 'Cerrar sesión' : 'Crear cuenta'}
        </button>
      </div>
    </div>
  );
}
