import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-base-200 py-10 text-base-content">
      <div className="mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to='/'><img className='w-54' src={logo} alt="" /></Link>
            <p>
              Your all-in-one platform for managing and organizing events. We help you plan and execute events with ease.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li><a href="/terms" className="text-primary hover:underline">Terms & Conditions</a></li>
              <li><a href="/privacy" className="text-primary hover:underline">Privacy Policy</a></li>
              <li><a href="/faq" className="text-primary hover:underline">FAQ</a></li>
              <li><a href="/contact" className="text-primary hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="btn btn-circle btn-ghost">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="btn btn-circle btn-ghost">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="btn btn-circle btn-ghost">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Stay Updated</h2>
            <p>Sign up for our newsletter and get the latest updates on events, tips, and more.</p>
            <form className="flex items-center mt-4">
              <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
              <button type="submit" className="btn btn-primary ml-4">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} EventMaster. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
