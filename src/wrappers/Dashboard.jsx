import { Outlet, useLocation } from "react-router"
import Navbar from "../components/Navbar"
import Profile from "../components/Profile"

const Dashboard = () => {

  const location = useLocation();

  const dashboardRoute = location.pathname === "/dashboard";

  return (
    <>
      <div className="bg-gradient-to-bl from-purple-200 to-green-300 h-[150vh] 2xl:h-screen">
        <Navbar />
        {dashboardRoute && <Profile />}
        <Outlet />
      </div>
    </>
  )
}

export default Dashboard