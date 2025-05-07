import React, { use, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { CiMenuBurger } from "react-icons/ci";
import toast from "react-hot-toast";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logOutUser } = use(AuthContext);

  const logOut = () => {
    logOutUser()
      .then(() => {
        toast.success("User Logged Out");
      })
      .catch((error) => {
        toast.error(error.message)
      });
  };

  const links = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "btn btn-primary" : "btn")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "btn btn-primary" : "btn")}
        to="/about"
      >
        About
      </NavLink>
      {user && (
        <>
          <NavLink
            className={({ isActive }) => (isActive ? "btn btn-primary" : "btn")}
            to="/profile"
          >
            My Profile
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "btn btn-primary" : "btn")}
            to="/my-bookings"
          >
            My Bookings
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="w-full mx-auto z-10 border-b border-gray-400">
      <div className="flex w-11/12 mx-auto justify-between items-center py-5 relative">
        <div>
          <Link to="/">
            <img className="w-44" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="hidden lg:flex gap-x-5">{links}</div>
        <div className="hidden lg:flex items-center gap-x-4">
          <div
            className="tooltip tooltip-left"
            data-tip={user?.displayName || "User"}
          >
            <img
              className="w-[54px] rounded-full border border-gray-300"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://toppng.com//public/uploads/preview/donna-picarro-dummy-avatar-115633298255iautrofxa.png"
              }
              alt="User"
            />
          </div>
          {user ? (
            <button onClick={logOut} className="btn btn-primary">
              Log Out
            </button>
          ) : (
            <Link className="btn" to="/login">
              Login
            </Link>
          )}
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-circle p-2 border-none hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            <CiMenuBurger className="text-3xl" />
          </button>
        </div>
      </div>
      {open && (
        <div className="bg-white border w-full absolute left-0 top-24 text-center shadow-md z-50 rounded-lg">
          <ul className="flex flex-col p-5 gap-y-5">
            {links}
          </ul>
          <div className="flex flex-col items-center pb-4">
            <div
              className="tooltip tooltip-top"
              data-tip={user?.displayName || "User"}
            >
              <img
                className="w-[54px] rounded-full border border-gray-300 mb-2"
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://toppng.com//public/uploads/preview/donna-picarro-dummy-avatar-115633298255iautrofxa.png"
                }
                alt="User"
              />
            </div>
            {user ? (
              <button onClick={logOut} className="btn btn-primary w-full mb-4">
                Log Out
              </button>
            ) : (
              <Link className="btn w-full mb-4" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
