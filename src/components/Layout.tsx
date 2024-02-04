import Gifs from './Gifs';
import Navbar from './Navbar';
import CreatePost from './post/CreatePost';
import PopularPosts from './post/PopularPosts';
import RecentPosts from './post/RecentPosts';

export default function Layout() {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Navbar />
      <div className="flex flex-col md:hidden gap-2">
        <CreatePost />
        <PopularPosts />
        <RecentPosts />
      </div>
      <div className="hidden md:grid grid-cols-4 grid-flow-row gap-2">
        <div className="col-span-1">
          <PopularPosts />
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <CreatePost />
          <RecentPosts />
        </div>
        <div className="col-span-1">
          <Gifs />
        </div>
      </div>
    </div>
  );
}
