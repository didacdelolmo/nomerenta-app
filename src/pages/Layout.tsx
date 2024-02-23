import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  )
}