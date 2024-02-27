import Gifs from '../components/Gifs';
import Premium from '../components/Premium';
import RecentActivity from '../components/RecentActivity';
import CreatePost from '../components/post/CreatePost';
import PopularPosts from '../components/post/PopularPosts';
import useUserStore from '../store/user-store';

export default function Home() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex flex-col lg:grid grid-cols-4 grid-flow-row divide-x divide-gray-600">
      <div className="hidden lg:grid col-span-1 mr-2">
        <PopularPosts />
      </div>
      <div className="col-span-2 flex flex-col gap-2 divide-y divide-gray-600">
        <CreatePost />
        <div className="flex flex-col gap-2 lg:hidden mx-2">
          <PopularPosts />
          {(!user || user?.roleId === 'member') && <Premium />}
        </div>
        <RecentActivity />
      </div>
      <div className="hidden lg:grid col-span-1">
        <Gifs />
      </div>
    </div>
  );
}
