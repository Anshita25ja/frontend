
import { Route,Routes } from "react-router-dom"

import AboutUs from "../src/Pages/AboutUs.jsx"
import CourseList from "../src/Pages/Course/CourseList.jsx"
import ForgotPassword from "../src/Pages/ForgotPassword.jsx"
import Homepages from "../src/Pages/HomePages.jsx"
import NotFound from "../src/Pages/NotFound.jsx"
import Register from "../src/Pages/Register.jsx"
import ResetPassword from "../src/Pages/ResetPassword.jsx"
import Signin from "../src/Pages/Signin.jsx"
import Contact from "./Pages/Contact.jsx"
import CourseDescription from "./Pages/Course/CourseDescription.jsx"
import Denied from "./Pages/Denied.jsx"
const App = () => {
  return (

    <Routes>
      <Route  path="/" element={<Homepages/>}/>
      <Route  path="/courses" element={<CourseList/>}/>
      <Route  path="/course/description" element={<CourseDescription/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/about" element={<AboutUs/>}/>
      <Route path="/denied" element={<Denied />} />
      <Route  path="*" element={<NotFound/>}/>
      <Route path="/register" element={<Register/>} /> 
      <Route path="/signin" element={<Signin/>} /> 
    
      <Route path="/forgot-password" element={<ForgotPassword/>} />
      <Route
          path="/resetpassword/:resetPasswordToken"
          element={<ResetPassword />}
        />
    </Routes>
    
  )
}

export default App

