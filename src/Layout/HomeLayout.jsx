
import { AiFillCloseCircle } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

import Footer from "../Components/Footer.jsx"
const HomeLayout = ({children}) => {
  const hideDrawer = () => {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;
    // collapsing the drawer-side width to zero
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 0;
  };
  const changeWidth = () => {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  };

  return (
    <div className="min-h-[90vh] bg-gray-800">
    <div className="drawer absolute z-50 left-0 w-fit ">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="cursor-pointer relative">
    <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-white m-4"
            /></label>
  </div>
  <div className="drawer-side w-0 ">
    <label htmlFor="my-drawer"  className="drawer-overlay"></label>
<ul className="menu p-4 w-48 bg-gray-800 sm:w-80 bg-base-100 text-base-content relative bg-gray-800 text-white">     
      <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>

            <li>
              <Link to={"/"}>Home</Link>
            </li>

         
              <li>
                <Link to={"/admin/dashboard"}>Admin Dashboard</Link>
              </li>
        

            <li>
              <Link to={"/courses"}>All Courses</Link>
            </li>

            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>

            <li>
              <Link to={"/about"}>About Us</Link>
            </li>

    </ul>
  </div>
</div>
{children}
<Footer/>

    </div>
  );
};

export default HomeLayout;
