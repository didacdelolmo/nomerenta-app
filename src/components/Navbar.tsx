import useUser from '../hooks/user/use-user';
import Auth from './auth/Auth';
import NavbarProfile from './user/NavbarProfile';
import star from '../assets/star.gif';
import { Link } from 'react-router-dom';
import { useAudio } from '../context/audio-context';
import useGetCurrentUserUnseenNotificationsCountQuery from '../api/queries/notification/use-get-current-user-unseen-notifications-count-query';

export default function Navbar() {
  const { user, isPending } = useUser();
  const { isPlaying, toggleAudio } = useAudio();

  const { data: response, isSuccess } =
    useGetCurrentUserUnseenNotificationsCountQuery();

  return (
    <>
      <nav className="relative min-h-[10vh] flex justify-between items-center">
        <Link to="/">
          <h1 className="tracking-tighter italic m-0">NO ME RENTA</h1>
          <span className="italic">Sin censura</span>
        </Link>
        <div className="flex items-center">
          <Link to="/notifications" className="relative">
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
            {isSuccess && response.data >= 1 && (
              <div className="absolute bg-red-600 w-3 h-3 rounded-full bottom-[16px] left-[10px]"></div>
            )}
            {/* <div className="absolute animate-ping bg-red-600 w-3 h-3 rounded-full bottom-[16px] left-[10px]"></div> */}
          </Link>
          <div onClick={toggleAudio}>
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
          <img width={48} height={48} src={star} alt="Estrella" />
          {isPending ? (
            <span>Cargando...</span>
          ) : user ? (
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
