import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthContext';
import toast from 'react-hot-toast';

const MyProfile = () => {

    const {user, setUser, updateUser} = use(AuthContext);
    const {email, displayName, photoURL} = user;

    const handleUpdateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        console.log(name, photoUrl);

        if(name == '' || photoUrl == ''){
            return toast.error('Give Name or Photo URL')
        }

        updateUser({displayName: name, photoURL: photoUrl})
        .then(() => {
            setUser({...user, displayName: name, photoURL: photoUrl})
            toast.success("User Update Successfully")
            e.target.reset()
        })
        .catch(error => {
            toast.error(error.message)
        })
    }
    
      return (
        <div className="p-4 border rounded-lg shadow-lg px-10 m-10 py-18">
          <img src={photoURL} alt="User Avatar" className="w-24 h-24 rounded-full mb-4" />
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Name: {displayName}</h2>
            <p>Email: {email}</p>
          </div>
          <div className='mt-8 bg-gray-100 lg:w-1/3 p-10 shadow w-full'>
            <form onSubmit={handleUpdateUser}>
                <input name='name' className='input block mb-4' type="text" placeholder='Change Name'  />
                <input name='photoUrl' type="text" className='input block mb-4' placeholder='Change Photo URL' />
                <button className='btn btn-primary'>Save Changes</button>
            </form>
          </div>
        </div>
      )
};

export default MyProfile;