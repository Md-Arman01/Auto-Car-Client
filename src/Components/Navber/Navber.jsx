import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { FiMenu } from 'react-icons/fi';
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaArrowRightToBracket } from 'react-icons/fa6'

const Navber = () => {
    const {user, logoutUser} = useAuth()
    const {displayName, photoURL} = user || {}
    const menuItems = <div  className="flex flex-col lg:flex-row justify-center items-center gap-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-white underline underline-offset-8 text-lg"
            : "text-lg text-gray-400 hover:text-white"
        }>
        Home
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-white underline underline-offset-8 text-lg"
            : "text-lg text-gray-400 hover:text-white"
        }>
        Services
      </NavLink>

      {
        user &&
        <div className="dropdown dropdown-hover lg:dropdown-end ">
        <label tabIndex={0} className="text-lg text-gray-400 hover:text-white">
          Deshboard 
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52 items-center space-y-3 py-5">
          <NavLink
            to={`/myServices`}
            className={({ isActive }) =>
              isActive
                ? "text-black underline underline-offset-8 text-lg"
                : "text-lg text-gray-400 hover:text-black"
            }>
            My Services
          </NavLink>
          <NavLink
            to="/addServices"
            className={({ isActive }) =>
              isActive
                ? "text-black underline underline-offset-8 text-lg"
                : "text-lg text-gray-400 hover:text-black"
            }>
            Add Services
          </NavLink>
          <NavLink
            to="/mySchedules"
            className={({ isActive }) =>
              isActive
                ? "text-black underline underline-offset-8 text-lg"
                : "text-lg text-gray-400 hover:text-black"
            }>
            My Schedules
          </NavLink>
        </ul>
      </div>
      }
    </div>

    const handleLogout = () => {
      const toastId = toast.loading('logOut...')
  
      logoutUser()
      .then(() => {
        toast.success('LogOut Successfully!', { id: toastId })
        // Sign-out successful.
      }).catch((error) => {
        toast.error( error.code , {id: toastId})
        // An error happened.
      });
    }


  return (
    <div>
      {/* <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          
          <div className="w-full navbar bg-[#00463E] py-3 px-10 lg:z-50">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <img className='w-20' src={logo} alt="" />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {menuItems}
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side z-50 lg:z-0">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {menuItems}
          </ul>
        </div>
      </div> */}
      {/* ----------- */}
      <div className="navbar sticky top-0 z-10 bg-[#00463E] py-5 px-4 lg:px-20">
        <div className="navbar-start"> 
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FiMenu className="text-3xl text-cyan-50"></FiMenu>
            </label>
            <ul
              tabIndex={0}
              className="flex flex-col gap-2 dropdown-content mt-3 z-[1] py-4 px-5  shadow bg-gray-100 rounded-box w-52">
              
              {menuItems}
            </ul>
          </div>
          <img className='w-20' src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* navber */}
            <div  >
            {menuItems}
            </div>
            
          </ul>
        </div>
        <div className="navbar-end">
        {
        user?
        <div>
          <div className="dropdown dropdown-hover dropdown-end">
                <label tabIndex={0}>
                    <div className="avatar online">
                      <div className="w-12 rounded-full">
                        <img src={photoURL} />
                      </div>
                    </div>
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-5 text-center shadow bg-base-100 rounded-box w-52 space-y-3">
                  <div>
                  <h1 className="text-lg py-2">{displayName}</h1>
                    <hr />
                  </div>
                  <div onClick={handleLogout} className="flex items-center justify-center gap-2 text-lg text-gray-400 hover:text-black hover:cursor-pointer">
                  <p>logout</p>
                  <FaArrowRightToBracket ></FaArrowRightToBracket>
                  </div>
                </ul>
          </div>

          

        </div>
      :
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "text-white underline underline-offset-8 text-lg"
            : "text-lg text-gray-400 hover:text-white"
        }>
        Login
      </NavLink>

      }
        </div>
      </div>
    </div>
  );
};

export default Navber;
