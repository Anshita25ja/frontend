import axios from "axios";
import { useState } from "react";
import {Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layout/HomeLayout.jsx";


const ForgotPassword= () => {

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    console.log(email)
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8081/api/v1/auth/forgot-password`, {
      
        email
      
      });
  
      if (res.data.success) {
        navigate('/resetpassword/' + res.data.token);
      }
    
    } catch (error) {
      alert(error.res.data.message);
    
    }
  };

  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">
        {/* forget password card */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-6 rounded-lg p-4 text-white w-80 h-[26rem] shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-bold">Forget Password</h1>

          <p>
            Enter your registered email, we will send you a verification link on
            your registered email from which you can reset your password
          </p>

          <div className="flex flex-col gap-1">
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your registered email"
              className="bg-transparent px-2 py-1 border"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
            Get Verification Link
          </button>

          <p className="text-center">
            Already have an account ?{" "}
            <Link to={"/signin"} className="link text-accent cursor-pointer">
              Login
            </Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
};

 
export default ForgotPassword;
