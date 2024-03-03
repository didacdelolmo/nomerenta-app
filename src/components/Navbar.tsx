import Auth from './auth/Auth';
import NavbarProfile from './user/NavbarProfile';
import { Link, useNavigate } from 'react-router-dom';
import { useAudio } from '../context/audio-context';
import useGetCurrentUserUnseenNotificationsCountQuery from '../api/queries/notification/use-get-current-user-unseen-notifications-count-query';
import useUserStore from '../store/user-store';
import nmrsvg from '../assets/nmrsvg.svg'
import { Cog } from 'lucide-react';

export default function Navbar() {
  const { data: response, isSuccess } =
    useGetCurrentUserUnseenNotificationsCountQuery();
  const { isPlaying, toggleAudio } = useAudio();

  const user = useUserStore((state) => state.user);

  const navigate = useNavigate();

  return (
    <>
      <nav className="relative min-h-[12vh] flex justify-between items-center px-2">
        <Link to="/" className='flex items-center gap-2'>
          <img width={64} height={64} src={nmrsvg} alt="NOMERENTA" />
          {/* <h1 className="text-3xl tracking-tighter italic m-0 font-bold">NOMERENTA</h1> */}
          {/* <span className="italic">Sin censura</span> */}
        </Link>
        <div className="flex gap-5">
          <div className="flex items-center">
            {user?.roleId === 'dictator' && (
              <Link to="/replacements">
                <Cog />
              </Link>
            )}
            <div
              onClick={() => navigate('/search')}
              className="flex p-1 items-center hover:cursor-pointer hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            {isSuccess && (
              <Link
                to="/notifications"
                className="relative flex p-1 items-center hover:cursor-pointer hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
                {response.data >= 1 && (
                  <div className="absolute bg-red-600 w-3 h-3 rounded-full bottom-[16px] left-[16px]"></div>
                )}
                {/* <div className="absolute animate-ping bg-red-600 w-3 h-3 rounded-full bottom-[16px] left-[10px]"></div> */}
              </Link>
            )}
            <div
              onClick={toggleAudio}
              className="flex p-1 items-center hover:cursor-pointer hover:bg-gray-100"
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                  />
                </svg>
              )}
            </div>
          </div>
          {user ? <NavbarProfile /> : <Auth />}
        </div>
      </nav>
      <hr className='border-gray-600' />
    </>
  );
}
