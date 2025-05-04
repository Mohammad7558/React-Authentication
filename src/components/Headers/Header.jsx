import React, { useState } from "react";
import logo from '../../assets/logo.png'
import { Link, NavLink } from "react-router";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar shadow-sm bg-base-100 sticky top-0 z-10 py-5">
      <div className="flex-1">
        <Link to='/'><img className="w-34" src={logo} alt="" /></Link>
      </div>
      <div className="flex-none lg:hidden">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-circle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
      <div className="flex-none hidden lg:flex gap-4">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn'}
      >
        Home
      </NavLink>
      <NavLink 
        to="/about" 
        className={({ isActive }) => isActive ? 'btn active' : 'btn'}
      >
        About
      </NavLink>
      <NavLink 
        to="/photo" 
        className={({ isActive }) => isActive ? 'btn active' : 'btn'}
      >
        Photo
      </NavLink>
      <NavLink 
        to="/video" 
        className={({ isActive }) => isActive ? 'btn active' : 'btn'}
      >
        Video
      </NavLink>
        
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                title="name"
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-64 bg-base-100 p-4 rounded-lg shadow-md lg:hidden">
          <a href="#" className="block mb-2">Home</a>
          <a href="#" className="block mb-2">About</a>
          <a href="#" className="block mb-2">Services</a>
          <a href="#" className="block mb-2">Contact</a>
          <div className="dropdown dropdown-end mt-4">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
