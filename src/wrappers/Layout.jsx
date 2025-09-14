import { Navigate, Outlet, useLoaderData } from "react-router"
import Navbar from "../components/Navbar"

const Layout = () => {

    const user = useLoaderData();

    if (user) {
        return <Navigate to="/dashboard" />
    }

    return (
        <>
            <div className="bg-gradient-to-bl from-purple-200 to-green-300 min-h-screen pb-28">
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout