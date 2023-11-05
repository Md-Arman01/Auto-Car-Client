import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { FaArrowRightToBracket } from 'react-icons/fa6'

const MenuItems = () => {
  const {user, logoutUser} = useAuth()
  const {displayName, photoURL} = user || {}

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
    <div className="flex flex-col lg:flex-row items-center gap-3 md:gap-5">
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
            to="/myServices"
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
  );
};

export default MenuItems;
