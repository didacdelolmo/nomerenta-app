import useUser from '../hooks/user/useUser';
import Auth from './auth/Auth';
import NavbarProfile from './user/NavbarProfile';

export default function Navbar() {
  const { user, existsUser, isPending } = useUser();

  return (
    <>
      <nav className="relative min-h-[10vh] flex justify-between items-center">
        <h1 className='tracking-tighter italic'>NO ME RENTA</h1>
        <div className="flex items-center">
          <img width={48} height={48} src="public/star.gif" alt="Estrella" />
          {isPending ? (
            <span>Cargando...</span>
          ) : existsUser && user ? (
            <NavbarProfile user={user} />
          ) : (
            <Auth />
          )}
        </div>
      </nav>
      <hr />
    </>
  );
}
