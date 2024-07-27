// import "../styles/AuthStles.css";
// import "../styles/AuthStyle.css";

import axios from "axios";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import {Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layout/HomeLayout.jsx";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [previewImage, setImagePreview] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();

  // form function
  const getImage = (event) => {
    event.preventDefault();
    // getting the image
    const uploadedImage = event.target.files[0];

    // if image exists then getting the url link of it
    if (uploadedImage) {
      
        setAvatar(uploadedImage);
      
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadedImage);
      fileReader.addEventListener("load", function () {
        setImagePreview(this.result);
      });
    }
  };

  const handleSubmit = async (e) => {
    console.log(name,email,password,phone,address)
    
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:8081/api/v1/auth/register`, {
       name,
        email,
        password,
        phone,address,avatar
  
      });
      if (res && res.data.success) {
     
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
     
    }
  };

  return (
    <HomeLayout >
   
          <div className="flex items-center justify-center h-[100vh]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
        >
          <h1 className="text-center text-2xl font-bold">Registration Page</h1>
          <label className="cursor-pointer" htmlFor="image_uploads">
            {previewImage ? (
              <img
                className="w-24 h-24 rounded-full m-auto"
                src={previewImage}
                alt="preview image"
              />
            ) : (
              <BsPersonCircle className="w-24 h-24 rounded-full m-auto" />
            )}
          </label>
          <input
            onChange={getImage}
            className="hidden"
            type="file"
            id="image_uploads"
            name="image_uploads"
            accept=".jpg, .jpeg, .png"
          />
         
         
         
         
          <div className="flex flex-col gap-1">
            <label className="font-semibold" htmlFor="password">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            
              id="exampleInput1"
                 className="bg-transparent px-2 py-1 border"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
      


          <div className="flex flex-col gap-1">
            <label className="font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             className="bg-transparent px-2 py-1 border"
              id="exampleInput2"
              placeholder="Enter Your Email "
              required
            />
          </div>
     

          <div className="flex flex-col gap-1">
            <label className="font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent px-2 py-1 border"
              id="exampleInput3"
              placeholder="Enter Your Password"
              required
            />
        </div>
        <div className="flex flex-col gap-1">
            <label className="font-semibold" htmlFor="password">
              Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-transparent px-2 py-1 border"
              id="exampleInput4"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold" htmlFor="password">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
             className="bg-transparent px-2 py-1 border"
              id="exampleInput5"
              placeholder="Enter Your address "
              required
            />
          </div>
          <button type="submit"             className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
          >
            REGISTER
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

export default Register;
