import { useState } from "react";
import { FaRegUser, FaAngleDown, FaSearch } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { setFilter } from "../store/slices/fetchCourses";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {
  // we can fetch user data from db and have a real user instead of this hard code when we have a fully functional backend
  const userData = {
    name: "Ryo Styles"
  };
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch()
  const handleSearch = (e) => {
    dispatch(setFilter(e.target.value));
  };
  const location = useLocation()
  const path = location.pathname;
  const navigateTo = useNavigate();
  console.log("Path is ", path)
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center md:px-2">
        {/* Brand Logo */}
        <div>
          <Link to="/"  className=" flex justify-center cursor-pointer items-center text-white md:text-2xl font-semibold">
          <PiStudentBold className="text-2xl md:text-4xl text-black" /> CourseV
          <span className="text-black">erse</span>
        </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center mx-auto">
          <input
            type="text"
            placeholder="Search courses...authors.."
            onChange={handleSearch}
            className="bg-white border-black border-4 px-4 py-2 rounded-xl mr-4 focus:outline-none w-full lg:w-72"
          />
          <FaSearch className="text-black text-2xl cursor-pointer hover:scale-125 transition-transform duration-300" onClick={()=>{navigateTo("/")}} />
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-4">
          {/* User Icon (replace with your own user icon) */}
          <div className="hidden sm:block bg-white p-2 rounded-full">
            <FaRegUser />
          </div>

          {/* User Name */}
          <span className="text-white font-medium md:text-lg">
            {userData.name}
          </span>

          {/* Dropdown (you can customize this based on your requirements) */}
          <div
            className="group relative inline-block"
            onMouseOver={(e) => setShowMenu(true)}
            onMouseOut={(e) => setShowMenu(false)}
          >
            <FaAngleDown className="text-white cursor-pointer" />
            {showMenu ? (
              <ul className="absolute -top-2 -right-2 bg-blue-950 text-blue-400 rounded-md mt-2 space-y-2 px-5 py-2 shadow-md">
                <li className="sm:hidden">
                  {/* Search Bar */}
                  <div className="flex items-center mx-auto">
                    <input
                      type="text"
                      placeholder="Search courses...authors.."
                      onChange={handleSearch}
                      className="bg-white border border-gray-300 px-3 py-1 text-black rounded-md mr-4 focus:outline-none w-36"
                    />
                    <FaSearch className="text-white text-xl cursor-pointer hover:scale-125 transition-transform duration-300" onClick={()=>{navigateTo("/")}}/>
                  </div>
                </li>
                <li>
                  <Link
                    to="/"
                    className={`block font-semibold hover:scale-110 hover:text-white px-4 py-2 ${path ==="/"? 'scale-110 text-white underline' :""}`}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className={`block font-semibold hover:scale-110 hover:text-white px-4 py-2 ${path ==="/dashboard"? 'scale-110 text-white underline' :""}`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#"
                    className="block font-semibold hover:scale-110 hover:text-white px-4 py-2"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#"
                    className="block font-semibold hover:scale-110 hover:text-white px-4 py-2"
                  >
                    Logout
                  </Link>
                </li>
                
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
