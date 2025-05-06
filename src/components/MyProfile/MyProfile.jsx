import React, { use, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';

const MyProfile = () => {
    const { user, setUser, updateUser } = use(AuthContext);
    const { email, displayName, photoURL } = user;

    const handleUpdateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;

        if (name === '' || photoUrl === '') {
            return toast.error('Give Name or Photo URL');
        }

        updateUser({ displayName: name, photoURL: photoUrl })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoUrl });
                toast.success('User Updated Successfully');
                e.target.reset();
            })
            .catch(error => {
                toast.error(error.message);
            });
    };

    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/profile'){
          window.document.title = 'My Profile - Event Master'
        }
      }, [location.pathname])

    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-br from-white to-blue-50 overflow-hidden">
            <div className="absolute -inset-0 z-0 blur-3xl opacity-30 bg-blue-300 rounded-full w-[80%] h-[80%] mx-auto"></div>

            <div className="relative z-10 p-6 rounded-2xl shadow-lg m-10 bg-white border border-gray-200 w-full max-w-3xl">
                <img
                    src={photoURL}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full mb-4 shadow-md border-4 border-white mx-auto"
                    style={{ boxShadow: '0 0 15px rgba(0, 123, 255, 0.3)' }}
                />
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Name: {displayName}</h2>
                    <p className="text-gray-500">Email: {email}</p>
                </div>
                <div className="mt-8 bg-white w-full p-8 rounded-xl shadow-md border border-gray-100"
                    style={{ boxShadow: '0 0 20px rgba(0, 132, 255, 0.1)' }}>
                    <form onSubmit={handleUpdateUser}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Change Name"
                            className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all shadow-sm"
                        />
                        <input
                            name="photoUrl"
                            type="text"
                            placeholder="Change Photo URL"
                            className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all shadow-sm"
                        />
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg text-white font-semibold bg-blue-500 hover:bg-blue-600 transition-all shadow-md"
                            style={{ boxShadow: '0 0 10px rgba(59, 130, 246, 0.4)' }}
                        >
                            Save Changes
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
