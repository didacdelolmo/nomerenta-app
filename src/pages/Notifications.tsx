import Gifs from "../components/Gifs";
import Layout from "../components/Layout";
import NotificationList from "../components/notification/NotificationList";
import PopularPosts from "../components/post/PopularPosts";

export default function Notifications() {
  return (
    <>
      <Layout>
        <div className="flex flex-col md:grid grid-cols-4 grid-flow-row gap-2">
          <div className="hidden md:grid col-span-1">
            <PopularPosts />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <NotificationList />
          </div>
          <div className="hidden md:grid col-span-1">
            <Gifs />
          </div>
        </div>
      </Layout>
    </>
  );
}