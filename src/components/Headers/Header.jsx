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
        console.log(error);
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
    <div className="w-full mx-auto shadow z-10">
      <div className="flex w-11/12 mx-auto justify-between items-center py-5 relative">
      <div>
        <img className="w-44" src={logo} alt="" />
      </div>
      <div className="hidden lg:flex gap-x-5">{links}</div>
      <div className="lg:block hidden">
        {user ? (
          <div className="flex items-center gap-x-4">
            <img className="w-[54px] rounded-full" src={user?.photoURL ? user?.photoURL : 'https://fortmyersradon.com/wp-content/uploads/2019/12/dummy-user-img-1.png'} title={user?.displayName} alt="" />
            <button onClick={logOut} className="btn btn-primary">
              Log Out
            </button>
          </div>
        ) : (
          <Link className="btn" to="/login">
            Login
          </Link>
        )}
      </div>
      <div className="lg:hidden">
        <button onClick={() => setOpen(!open)} className="btn btn-circle p-2">
          <CiMenuBurger className="text-3xl" />
        </button>
        {open && (
          <div className="bg-white border w-full absolute left-0 top-22 text-center">
            <ul className="flex flex-col p-5 gap-y-5">{links}</ul>
            {user ? (
              <div className="flex items-center justify-center gap-x-4">
                <img className="w-[54px] rounded-full" src={user?.photoURL} title={user?.displayName} alt="" />
                <button onClick={logOut} className="btn btn-primary">
                  Log Out
                </button>
              </div>
            ) : (
              <Link className="btn" to="/login">
                Login
              </Link>
            )}
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default Header;
