import axios from "axios";
import  { useState } from "react";
import toast from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";

import HomeLayout from "../Layout/HomeLayout.jsx";



const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();


  const handleSubmit = async (e) => {
   

    console.log(email,password)
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8081/api/v1/auth/signin`, {
      
        email,
        password,
       
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    }

  return (
    <HomeLayout>
     
          
          <div className="flex items-center justify-center h-[100vh]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-4 rounded-lg p-4 text-white w-80 h-[26rem] shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-bold">Login Page</h1>
          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent px-2 py-1 border"

              id="email"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent px-2 py-1 border"

              id="password"
              placeholder="Enter Your Password"
              required
            />
          </div>


          <button
            className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
            Signin
          </button>

          <Link to={"/forgot-password"}>
            <p className="text-center link text-accent cursor-pointer">
              Forget Password
            </p>
          </Link>

          <p className="text-center">
           Don t have an account ?{" "}
            <Link to={"/register"} className="link text-accent cursor-pointer">
              Create Account
            </Link>
          </p>


    
        
        </form>
      </div>
    </HomeLayout>
  );
};

export default Signin;
