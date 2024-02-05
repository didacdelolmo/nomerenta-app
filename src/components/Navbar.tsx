import useUser from '../hooks/user/useUser';
import Auth from './auth/Auth';
import NavbarProfile from './user/NavbarProfile';
import star from '../assets/star.gif';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { user, existsUser, isPending } = useUser();

  return (
    <>
      <nav className="relative min-h-[10vh] flex justify-between items-center">
        <Link to='/'>
          <h1 className="tracking-tighter italic">NO ME RENTA</h1>
        </Link>
        <div className="flex items-center">
          <img width={48} height={48} src={star} alt="Estrella" />
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
