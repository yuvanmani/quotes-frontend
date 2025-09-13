import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectOtp, setEmail, setOtp } from "../redux/features/auth/verifySlice"
import { useNavigate } from "react-router";
import { useState } from "react";

const VerifyPage = () => {

    const email = useSelector(selectEmail);
    const otp = useSelector(selectOtp);

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleVerify = (e) => {
        e.preventDefault();
    }

    return (
        <div className="relative top-20 bg-white mx-5 mt-5 sm:mx-auto max-w-xl rounded-lg border-4 border-double border-red-400">
            <h2 className=" text-xl sm:text-2xl md:text-3xl text-gray-600 underline font-bold text-center pt-3">Verify OTP</h2>
            <form className="flex flex-col mx-5 mt-5" onSubmit={handleVerify}>
                <input type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))}
                    className="p-2 rounded mb-5 border-cyan-300 border-2 focus:outline-green-500" />
                <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter OTP" autoComplete="off" value={otp} onChange={(e) => dispatch(setOtp(e.target.value))}
                    className="p-2 rounded mb-5 border-cyan-300 border-2 focus:outline-green-500" />
                <span className="p-2 rounded mb-2 border-gray-300 hover:bg-gray-300 border-2 text-center font-semibold text-gray-600 cursor-pointer" onClick={togglePassword}>
                    OTP : {showPassword ? "Hide" : "Show"}</span>
                <button type="submit" className="bg-cyan-600 text-white font-semibold p-2 rounded hover:bg-cyan-700 mb-5">Submit</button>
            </form>
        </div>
    )
}

export default VerifyPage