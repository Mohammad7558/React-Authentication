import React from "react";
import toast, { Toaster } from "react-hot-toast";

const SingleEventDetails = ({ snEvent }) => {
  const { name, thumbnail, category, date, location, entry_fee, description } =
    snEvent;

  const handleBook = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    if(userName == '' || email == ''){
        toast.error('Give the name or email')
    }
    else{
        toast.success(`${name} A seat Booked Successfully`);
        e.target.reset();
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          removeDelay: 1000,

          // Default options for specific types
          success: {
            duration: 3000,
          },
        }}
      />
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-start lg:gap-x-10 my-20 p-10">
        <div className="lg:w-1/2 w-full">
          <img src={thumbnail} alt="" />
        </div>
        <div className="lg:w-1/2 w-full mt-5 lg:mt-0">
          <h1 className="font-normal text-4xl">{name}</h1>
          <p className="mt-2 leading-7">{description}</p>

          <h1 className="text-gray-700 mt-5">
            {" "}
            <span className="font-semibold">Date:</span> {date}
          </h1>
          <h1 className="text-gray-700">
            <span className="font-semibold">Category: </span> {category}
          </h1>
          <h1>
            <span className="font-semibold">Entry Fee:</span> {entry_fee} TK
          </h1>
          <h1 className="mb-4">
            <span className="font-semibold">Location:</span> {location}
          </h1>
        </div>
      </div>
      <div className="bg-gray-100 p-20 mb-20">
        <form onSubmit={handleBook} className="w-1/2 mx-auto">
          <h1 className="text-center font-bold mb-10 text-4xl">Book a Seat</h1>
          <input
            className="input w-full mb-2"
            name="userName"
            type="text"
            placeholder="Enter Name"
          />
          <br />
          <input
            className="input w-full mb-2"
            name="email"
            type="email"
            placeholder="Enter Email"
          />
          <br />
          <button className="btn btn-primary" type="submit">
            Book a Seat
          </button>
        </form>
      </div>
    </>
  );
};

export default SingleEventDetails;
