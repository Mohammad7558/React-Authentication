import React, { useContext, useState } from "react";
import { FaEye, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate} from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import { LuEyeClosed } from "react-icons/lu";
import { GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {createUserWithEmailPass, createUserWithGoogle, setUser, updateUser} = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const photoLink = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    setPasswordError("");
    const haveUpperCase = /[A-Z]/;
    const haveLowerCase = /[a-z]/;

    if (!haveUpperCase.test(password)) {
      return setPasswordError("Password Must Have An Uppercase");
    } else if (!haveLowerCase.test(password)) {
      return setPasswordError("Password Must Have An Lowercase");
    } else if (password.length < 6) {
      setPasswordError("Password should Be 6 Character Long");
    } 
    createUserWithEmailPass(email, password)
    .then(result => {
        const user = result.user;
        updateUser({displayName: userName, photoURL: photoLink})
        .then(() => {
            setUser({...user, displayName: userName, photoURL: photoLink})
        })
        .catch(error => {
            toast.error(error.message)
        })
        toast.success('User Created Successfully')
        navigate(from, { replace: true });
        e.target.reset()
    })
    .catch(error => {
        toast.error(error.message)
    })
  };

  const handleRegisterWithGoogle = () => {
    createUserWithGoogle(provider)
    .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success('User create Successfully')
    })
    .catch(error => {
        console.log(error);
        toast.error(error.message)
    })
  }

  return (
    <div>
      <div className="bg-gray-100 py-20 px-10">
        <div className="w-full lg:w-1/3 mx-auto mt-10 bg-white p-10 shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-5">Register</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="input w-full rounded-md mb-2"
                placeholder="Enter your name"
                name="userName"
              />
            </div>
            <div>
              <label
                htmlFor="photoUrl"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photoUrl"
                className="input w-full rounded-md mb-2"
                placeholder="Enter your photo URL"
                name="photoUrl"
              />
            </div>
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
              <p className="text-red-500 font-semibold">{passwordError}</p>
            </div>

            <button type="submit" className="w-full btn btn-primary">
              Register
            </button>
          </form>
          <div className="divider pt-4">Or Register With</div>
          <div className="text-center mt-10 mb-5">
            <button onClick={handleRegisterWithGoogle} className="btn btn-circle">
              <FaGoogle />
            </button>
            <h1>Google</h1>
          </div>
          <hr />
          <div className="mt-4">
            <p className="text-center">
              Already Have An Account ?{" "}
              <Link className="link text-blue-500" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
