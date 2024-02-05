import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Navbar />
      {children}
    </div>
  );
}
