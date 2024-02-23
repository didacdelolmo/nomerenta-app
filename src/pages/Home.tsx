import Gifs from '../components/Gifs';
import CreatePost from '../components/post/CreatePost';
import PopularPosts from '../components/post/PopularPosts';
import RecentPosts from '../components/post/RecentPosts';

export default function Home() {
  return (
    <div className="flex flex-col lg:grid grid-cols-4 grid-flow-row gap-2">
      <div className="hidden lg:grid col-span-1">
        <PopularPosts />
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <CreatePost />
        <div className="lg:hidden">
          <PopularPosts />
        </div>
        <RecentPosts />
      </div>
      <div className="hidden lg:grid col-span-1">
        <Gifs />
      </div>
    </div>
  );
}
