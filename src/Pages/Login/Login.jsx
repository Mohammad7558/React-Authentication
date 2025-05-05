import React, { useContext, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import toast from "react-hot-toast";
import { LuEyeClosed } from "react-icons/lu";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const { signInEmailPassword, createUserWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const provider = new GoogleAuthProvider();

  const handleSignInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");

    signInEmailPassword(email, password)
      .then(() => {
        toast.success("User Login Successfully");
        e.target.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  

  const signInUser = () => {
    createUserWithGoogle(provider)
    .then(result => {
        const user = result.user;
        toast.success('User Log in Successfully')
    })
    .catch(error => {
        console.log(error);
        setError(error.message)
    })
  }

  return (
    <div className="bg-gray-100 py-20 px-10">
      <div className="w-full lg:w-1/3 mx-auto mt-10 bg-white p-10 shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-5">Login</h2>
        <form onSubmit={handleSignInUser} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input w-full rounded-md mb-2"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full rounded-md input"
                placeholder="Enter your password"
                name="password"
              />
              {showPassword ? (
                <LuEyeClosed
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-4 z-10 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-4 z-10 cursor-pointer"
                />
              )}
            </div>
          </div>
          <p className="text-red-500">{error}</p>

          <button type="submit" className="w-full btn btn-primary">
            Login
          </button>
        </form>
        <div className="divider pt-4">Or Login With</div>
        <div className="text-center mt-10 mb-5">
          <button onClick={signInUser} className="btn btn-circle">
            <FaGoogle />
          </button>
          <h1>Google</h1>
        </div>

        <div className="mt-4">
          <p className="text-center">
            New Here ?{" "}
            <Link className="link text-blue-500" to="/register">
              Create An Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
