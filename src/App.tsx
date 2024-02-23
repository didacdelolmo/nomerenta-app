import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Post from './pages/Post';
import Notifications from './pages/Notifications';
import useGetCurrentUserQuery from './api/queries/user/use-get-current-user-query';
import Layout from './pages/Layout';
import Search from './pages/Search';

export default function App() {
  // Initialize the authenticated user to the store
  useGetCurrentUserQuery();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/users/:userId" element={<Profile />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Route>
    </Routes>
  );
}
