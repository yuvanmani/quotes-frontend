import { useEffect } from "react";
import { useNavigate } from "react-router"
import authServices from "../services/authServices";
import { toast } from "react-toastify";

const Logout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    authServices.logout()
      .then((response) => {
        toast.success(response.data.message);

        // navigate to login page
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
  }, [])

  return (
    <div className="relative top-20">Logging out...</div>
  )
}

export default Logout