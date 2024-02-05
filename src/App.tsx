import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Post from './pages/Post';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/:userId" element={<Profile />} />
      <Route path="/posts/:postId" element={<Post />} />
    </Routes>
  );
}
