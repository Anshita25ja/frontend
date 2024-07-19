
import { Route,Routes } from "react-router-dom"

import Homepages from "../src/Pages/HomePages.jsx"

const App = () => {
  return (

    <Routes>
      <Route  path="/" element={<Homepages/>}/>
    </Routes>
    
  )
}

export default App

