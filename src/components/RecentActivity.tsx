import useRecentActivityState from '../hooks/use-recent-activity-state';
import FollowsPosts from './post/FollowsPosts';
import RecentPosts from './post/RecentPosts';

export default function RecentActivity() {
  const {
    isPostsActivity,
    isFollowsActivity,
    // isCommentsActivity,
    setPostsActivity,
    setFollowsActivity,
    // setCommentsActivity,
  } = useRecentActivityState();

  return (
    <div className="flex flex-col w-full divide-y divide-gray-600">
      <div className="flex flex-col p-2 w-full items-center gap-2">
        <span className="text-2xl font-bold">Actividad más reciente</span>
        <div className="flex gap-2 flex-wrap justify-center">
          <button
            onClick={setPostsActivity}
            className={`${
              isPostsActivity ? 'bg-gray-300' : 'bg-gray-200 hover:bg-gray-300'
            } text-lg px-2 rounded-md font-bold flex-1`}
          >
            Publicaciones
          </button>
          <button
            onClick={setFollowsActivity}
            className={`${
              isFollowsActivity
                ? 'bg-gray-300'
                : 'bg-gray-200 hover:bg-gray-300'
            } text-lg px-2 rounded-md font-bold flex-1`}
          >
            Siguiendo
          </button>
          {/* <button
            onClick={setCommentsActivity}
            className={`${
              isCommentsActivity
                ? 'bg-gray-300'
                : 'bg-gray-200 hover:bg-gray-300'
            } text-lg px-2 rounded-md font-bold flex-1`}
          >
            Comentarios
          </button> */}
        </div>
      </div>
      {isPostsActivity && <RecentPosts />}
      {isFollowsActivity && <FollowsPosts />}
    </div>
  );
}
