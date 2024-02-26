import { Link } from 'react-router-dom';
import useUserAvatarURL from '../../hooks/user/use-user-avatar-url';
import useUserRoleColorClass from '../../hooks/user/use-user-role-class';
import useUserStore from '../../store/user-store';
import useLogoutMutation from '../../api/mutations/auth/use-logout-mutation';

export default function NavbarProfile() {
  const user = useUserStore((state) => state.user);

  const { roleColorClass } = useUserRoleColorClass({ user });
  const { avatar } = useUserAvatarURL({ user: user ?? null });

  const { mutate: logout } = useLogoutMutation();

  return (
    <>
      {user && (
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <img className='rounded-full' height={48} width={48} src={avatar} />
            <div className="flex flex-col">
              <span className={`${roleColorClass} font-semibold`}>
                {user.username}
              </span>
              <span>Dios te bendiga</span>
            </div>
          </div>
          <div className="flex gap-1 my-1">
            <Link to={`/users/${user._id}`} className="flex bg-gray-100 border border-gray-600 rounded-md px-2 font-medium text-sm hover:bg-gray-200">
              <button>Ver perfil</button>
            </Link>
            <button onClick={() => logout()} className="flex bg-gray-100 border border-gray-600 rounded-md px-2 font-medium text-sm hover:bg-gray-200">
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </>
  );
}
