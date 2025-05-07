import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { addEventDataToLocalStorage } from "../../utilities/localStorage";

const SingleEventDetails = ({ snEvent }) => {
  const { name, thumbnail, category, date, location, entry_fee, description } =
    snEvent;

  const handleBook = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    if (userName === "" || email === "") {
      toast.error("Please enter both name and email.");
    } else {
      toast.success(`${name} seat booked successfully!`);
      e.target.reset();
      addEventDataToLocalStorage(snEvent);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="flex flex-col lg:flex-row gap-10 my-20 px-5 lg:px-20">
        <div className="lg:w-1/2">
          <img
            src={thumbnail}
            alt={name}
            className="rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          />
        </div>
        <div className="lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">{name}</h1>
          <p className="text-gray-600 leading-relaxed">{description}</p>
          <div className="mt-6 space-y-2 text-sm text-gray-700">
            <p><span className="font-semibold">📅 Date:</span> {date}</p>
            <p><span className="font-semibold">📁 Category:</span> {category}</p>
            <p><span className="font-semibold">🎟️ Entry Fee:</span> {entry_fee} TK</p>
            <p><span className="font-semibold">📍 Location:</span> {location}</p>
          </div>
        </div>
      </div>
      <div className="bg-base-200 py-16 px-6 lg:px-32 rounded-xl shadow-inner mb-20">
        <form
          onSubmit={handleBook}
          className="bg-white p-8 md:w-1/2 mx-auto rounded-xl shadow-md space-y-4"
        >
          <h2 className="text-3xl font-bold text-center text-indigo-600">Book a Seat</h2>

          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          />

          <button
            type="submit"
            className="btn btn-primary w-full hover:scale-[1.02] transition-transform duration-200"
          >
            Book Now
          </button>
        </form>
      </div>
    </>
  );
};

export default SingleEventDetails;
