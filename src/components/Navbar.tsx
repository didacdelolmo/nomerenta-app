import Auth from './auth/Auth';
import NavbarProfile from './user/NavbarProfile';
import { Link, useNavigate } from 'react-router-dom';
import { useAudio } from '../context/audio-context';
import useGetCurrentUserUnseenNotificationsCountQuery from '../api/queries/notification/use-get-current-user-unseen-notifications-count-query';
import useUserStore from '../store/user-store';
import nmrsvg from '../assets/nmrsvg.svg'
import { Bell, Cog, UserRoundSearch, Volume2, VolumeX } from 'lucide-react';

export default function Navbar() {
  const { data: response, isSuccess } =
    useGetCurrentUserUnseenNotificationsCountQuery();
  const { isPlaying, toggleAudio } = useAudio();

  const user = useUserStore((state) => state.user);

  const navigate = useNavigate();

  return (
    <>
      <nav className="relative min-h-[12vh] flex justify-between items-center px-2">
        <Link to="/" className="flex items-center gap-2">
          <img width={64} height={64} src={nmrsvg} alt="NOMERENTA" />
          {/* <h1 className="text-3xl tracking-tighter italic m-0 font-bold">NOMERENTA</h1> */}
          {/* <span className="italic">Sin censura</span> */}
        </Link>
        <div className="flex gap-5">
          <div className="flex items-center gap-1">
            {user?.roleId === 'dictator' && (
              <Link to="/replacements" className='hover:bg-gray-200 rounded-md p-1'>
                <Cog strokeWidth={1.5} className='size-6' />
              </Link>
            )}
            <div
              onClick={() => navigate('/search')}
              className="flex p-1 items-center hover:cursor-pointer hover:bg-gray-200 rounded-md"
            >
              <UserRoundSearch strokeWidth={1.5} className="size-6" />
            </div>
            {isSuccess && (
              <Link
                to="/notifications"
                className="relative flex p-1 items-center hover:cursor-pointer hover:bg-gray-200 rounded-md"
              >
                <Bell strokeWidth={1.5} className='size-6' />
                {response.data >= 1 && (
                  <div className="absolute bg-red-600 w-3 h-3 rounded-full bottom-[16px] left-[16px]"></div>
                )}
              </Link>
            )}
            <div
              onClick={toggleAudio}
              className="flex p-1 items-center hover:cursor-pointer hover:bg-gray-200 rounded-md"
            >
              {isPlaying ? (
                <Volume2 strokeWidth={1.5} className="size-6" />
              ) : (
                <VolumeX strokeWidth={1.5} className="size-6" />
              )}
            </div>
          </div>
          {user ? <NavbarProfile /> : <Auth />}
        </div>
      </nav>
      <hr className="border-gray-600" />
    </>
  );
}
