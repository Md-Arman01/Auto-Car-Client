import { NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { FiMenu } from "react-icons/fi";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaArrowRightToBracket } from "react-icons/fa6";
import useAxios from "../../Hooks/useAxios";

const Navber = () => {
  const { user, logoutUser } = useAuth();
  const axiosSecure = useAxios();
  const { displayName, photoURL } = user || {};
  const menuItems = (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
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

      {user && (
        <div className="dropdown dropdown-hover lg:dropdown-end ">
          <label
            tabIndex={0}
            className="text-lg text-gray-400 hover:text-white">
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
      )}
    </div>
  );

  const handleLogout = () => {
    const toastId = toast.loading("logOut...");

    logoutUser()
      .then(() => {
        toast.success("LogOut Successfully!", { id: toastId });
        // Sign-out successful.
        const userEmail = { email: user?.email };
        axiosSecure.post("/logout", userEmail).then((res) => {
          console.log(res.data);
        });
      })
      .catch((error) => {
        toast.error(error.code, { id: toastId });
        // An error happened.
      });
  };

    // theme changes function---
    const handleToggle = () => {
      document.documentElement.classList.toggle('dark')
    };
    //------

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
              className="flex flex-col gap-2 dropdown-content mt-3 z-[1] py-4 px-5  shadow text-black bg-gray-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <img className="w-20" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* navber */}
            <div>{menuItems}</div>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <div>
              <div className="dropdown dropdown-hover dropdown-end">
                <label tabIndex={0}>
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <img src={photoURL} />
                    </div>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-5 text-center shadow bg-base-100 rounded-box w-52 space-y-3">
                  <div>
                    <h1 className="text-lg py-2">{displayName}</h1>
                    <hr />
                  </div>
                  <div
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 text-lg text-red-400 hover:text-red-500 hover:cursor-pointer">
                    <p>logout</p>
                    <FaArrowRightToBracket></FaArrowRightToBracket>
                  </div>
                </ul>
              </div>
            </div>
          ) : (
            <NavLink to="/login">
              <button
                className="normal-case block w-full select-none rounded-lg bg-gradient-to-tr from-[#54C2C3] to-[#00463E] py-1 px-6 text-center align-middle font-rancho text-xl   text-white shadow-md shadow-[#54C2C3]/20 transition-all hover:shadow-lg hover:shadow-[#54C2C3]/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true">
                Login
              </button>
            </NavLink>
          )}
            <div>
                  <label className="swap swap-rotate">
                    <input
                      type="checkbox"
                      onChange={handleToggle}
                    />
                    <svg
                      className="swap-on fill-current w-10 h-10 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg
                      className="swap-off fill-current w-10 h-10 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
