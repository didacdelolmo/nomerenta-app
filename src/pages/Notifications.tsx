import Gifs from "../components/Gifs";
import NotificationList from "../components/notification/NotificationList";
import PopularPosts from "../components/post/PopularPosts";

export default function Notifications() {
  return (
    <div className="flex flex-col lg:grid grid-cols-4 grid-flow-row gap-2">
      <div className="hidden lg:grid col-span-1">
        <PopularPosts />
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <NotificationList />
      </div>
      <div className="hidden lg:grid col-span-1">
        <Gifs />
      </div>
    </div>
  );
}