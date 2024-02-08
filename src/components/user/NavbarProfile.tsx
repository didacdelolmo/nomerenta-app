import useUser from '../../hooks/user/useUser';
import useUserAvatarURL from '../../hooks/user/useUserAvatarURL';
import User from '../../store/types/user-interface';

export default function NavbarProfile({ user }: { user: User }) {
  const { username, anonymous: isAnonymous } = user;
  const { logout } = useUser();
  const avatar = useUserAvatarURL({ user });

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center">
        <img height={48} width={48} src={avatar} alt={username} />
        <div className="flex flex-col">
          <span className="font-semibold">{username}</span>
          <span>Dios te bendiga</span>
        </div>
      </div>
      <div className="flex">
        {!isAnonymous && <button>Ver perfil</button>}
        <button onClick={logout} className="flex-1">
          {!isAnonymous ? 'Cerrar sesión' : 'Crear cuenta'}
        </button>
      </div>
    </div>
  );
}
