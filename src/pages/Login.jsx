import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { selectEmail, selectPassword, setEmail, setPassword } from "../redux/features/auth/loginSlice"
import { useState } from "react";
import { toast } from "react-toastify";
import authServices from "../services/authServices"

const LoginPage = () => {

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // handle login logic here
    authServices.login({ email, password })
      .then((response) => {
        toast.success(response.data.message);

        // clear the form
        dispatch(setEmail(""));
        dispatch(setPassword(""));

        // navigate the user to dashboard
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
  }

  return (
    <div className="relative top-20 bg-white border-4 border-double border-red-400 mx-5 mt-5 sm:mx-auto max-w-xl rounded-lg">
      <h2 className=" text-xl sm:text-2xl md:text-3xl text-gray-600 font-bold text-center pt-3 underline">User Login</h2>
      <form className="flex flex-col mx-5 mt-5" onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))}
          className="p-2 rounded mb-5 border-cyan-300 border-2 focus:outline-green-500" />
        <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))}
          className="p-2 rounded mb-2 border-cyan-300 border-2 focus:outline-green-500" />
        <span className="p-2 rounded mb-2 border-gray-300 hover:bg-gray-300 border-2 text-center font-semibold text-gray-600 cursor-pointer" onClick={togglePassword}>
          Password : {showPassword ? "Hide" : "Show"}</span>
        <ul className="list-disc ml-5 grid sm:grid-cols-2">
          <li className="text-cyan-600 text-sm font-medium mb-1">8-16 characters</li>
          <li className="text-cyan-600 text-sm font-medium mb-1">At least one uppercase (A-Z)</li>
          <li className="text-cyan-600 text-sm font-medium mb-1">At least one lowercase (a-z)</li>
          <li className="text-cyan-600 text-sm font-medium mb-3">At least one number (0-9)</li>
        </ul>
        <button type="submit" className="bg-cyan-600 text-white font-semibold p-2 rounded hover:bg-cyan-700 mb-3">Login</button>
        <p className="text-gray-600 text-md font-bold mb-5">New to QuoteCraft ? <Link to="/register">
          <span className="text-cyan-600 text-md font-bold">Register here</span></Link></p>
      </form>
    </div>
  )
}

export default LoginPage