import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../../provider/AuthContext';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const ForgetPassword = () => {
  const location = useLocation();
  const initialEmail = location?.state?.email || '';
  const [email, setEmail] = useState(initialEmail);
  const { forgetPassword } = useContext(AuthContext);


  const handleForget = (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error('Please enter your email address');
    }
    forgetPassword(email)
      .then(() => {
        setEmail('')
        toast.success('Password reset email sent');
        window.location.href = 'https://mail.google.com'
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
        if(location.pathname === '/forgetPassword'){
          window.document.title = 'Forget Password - Event Master'
        }
      }, [location.pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-100 to-white relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-blue-300 blur-[250px] rounded-full opacity-30 animate-pulse"></div>

      <div className="bg-white shadow-xl rounded-2xl p-10 z-10 w-full max-w-md border border-blue-100">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Reset Your Password</h2>
        <form onSubmit={handleForget} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="btn btn-primary mt-2">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
