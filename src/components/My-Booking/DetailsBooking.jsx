import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const DetailsBooking = ({ event, handleRemove }) => {
  const {
    id,
    name,
    thumbnail,
    category,
    date,
    location: eventLocation,
    entry_fee,
    description,
  } = event;

  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-10 h-full">
          <div className="lg:w-1/2 w-full h-full">
            <img
              src={thumbnail}
              alt={name}
              className="w-full h-full object-cover rounded-2xl shadow-md hover:scale-[1.01] transition duration-300"
              style={{ minHeight: "100%", maxHeight: "400px" }}
            />
          </div>

          <div className="lg:w-1/2 w-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{name}</h2>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex flex-wrap gap-3 text-sm mb-4">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 shadow-sm">
                  📁 {category}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 shadow-sm">
                  📅 {date}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 shadow-sm">
                  📍 {eventLocation}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 shadow-sm">
                  🎟️ {entry_fee} TK
                </span>
              </div>
            </div>

            <button
              onClick={() => handleRemove(id)}
              className="btn bg-red-500 hover:bg-red-600 text-white mt-4 w-fit flex items-center gap-2 transition-transform duration-200 hover:scale-105"
            >
              <FaTrashAlt /> Remove Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBooking;
