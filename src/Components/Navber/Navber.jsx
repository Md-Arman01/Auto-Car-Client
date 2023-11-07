import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { FiMenu } from 'react-icons/fi';
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaArrowRightToBracket } from 'react-icons/fa6'
import useAxios from "../../Hooks/useAxios";

const Navber = () => {
    const {user, logoutUser} = useAuth()
    const axiosSecure = useAxios()
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
        const userEmail = { email: user?.email };
        axiosSecure.post("/logout",userEmail)
          .then((res) => {
            console.log(res.data);
          });
      }).catch((error) => {
        toast.error( error.code , {id: toastId})
        // An error happened.
      });
    }


  return (
    <div className="relative">
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
                  <div onClick={handleLogout} className="flex items-center justify-center gap-2 text-lg text-red-400 hover:text-red-500 hover:cursor-pointer">
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
