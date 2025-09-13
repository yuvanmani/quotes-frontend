import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

const Layout = () => {
    return (
        <>
            <div className="bg-gradient-to-bl from-purple-200 to-green-300 h-[150vh] 2xl:h-screen">
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout