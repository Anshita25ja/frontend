
import { Route,Routes } from "react-router-dom"

import AboutUs from "../src/Pages/AboutUs.jsx"
import Homepages from "../src/Pages/HomePages.jsx"
import NotFound from "../src/Pages/NotFound.jsx"
import Register from "../src/Pages/Register.jsx"

const App = () => {
  return (

    <Routes>
      <Route  path="/" element={<Homepages/>}/>
      <Route  path="/about" element={<AboutUs/>}/>
      <Route  path="*" element={<NotFound/>}/>
      <Route path="/register" element={<Register/>} /> 

    </Routes>
    
  )
}

export default App

