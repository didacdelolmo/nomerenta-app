import Gifs from '../components/Gifs';
import Premium from '../components/Premium';
import CreatePost from '../components/post/CreatePost';
import PopularPosts from '../components/post/PopularPosts';
import RecentPosts from '../components/post/RecentPosts';
import useUserStore from '../store/user-store';

export default function Home() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex flex-col lg:grid grid-cols-4 grid-flow-row gap-2">
      <div className="hidden lg:grid col-span-1">
        <PopularPosts />
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <CreatePost />
        <div className="flex flex-col gap-2 lg:hidden">
          <PopularPosts />
          {(!user || user?.roleId === 'member') && <Premium />}
        </div>
        <RecentPosts />
      </div>
      <div className="hidden lg:grid col-span-1">
        <Gifs />
      </div>
    </div>
  );
}
