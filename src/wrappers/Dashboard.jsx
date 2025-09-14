import { useState } from "react";
import { Navigate, Outlet, useLoaderData, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import AllQuotes from "../components/AllQuotes";
import quoteLoader from "../loaders/unit/quoteLoader";

const Dashboard = () => {
  const user = useLoaderData();
  const [quotes, setQuotes] = useState([]);
  const [showQuotes, setShowQuotes] = useState(false);

  const location = useLocation();

  const dashboardRoute = location.pathname === "/dashboard";

  if (!user) {
    return <Navigate to="/login" />
  }

  const fetchQuotes = async () => {

    // handle getAllQuotes logic here
    try {
      const data = await quoteLoader();
      setQuotes(data);
      setShowQuotes(true);
    } catch (err) {
      console.error("Failed to fetch quotes", err);
    }
  };

  return (
    <div className="bg-gradient-to-bl from-purple-200 to-green-300 min-h-screen pb-20">
      <Navbar user={user} />

      {/* Pass the fetchQuotes handler to Profile */}
      {dashboardRoute && <Profile user={user} onGenerateQuotes={fetchQuotes} />}

      {/* Conditionally render AllQuotes */}
      {(dashboardRoute && showQuotes) && <AllQuotes notes={quotes} />}
      <Outlet />
    </div>
  );
};

export default Dashboard;
