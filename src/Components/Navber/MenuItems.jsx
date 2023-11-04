import { NavLink } from "react-router-dom";

const MenuItems = () => {
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
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "text-white underline underline-offset-8 text-lg"
            : "text-lg text-gray-400 hover:text-white"
        }>
        Login
      </NavLink>
    </div>
  );
};

export default MenuItems;
