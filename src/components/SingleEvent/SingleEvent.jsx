import React from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const SingleEvent = ({ singleEvent }) => {
  const {
    id,
    name,
    thumbnail,
    category,
    date,
    location,
    entry_fee,
  } = singleEvent;

  return (
    <div className="px-4 py-6">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-indigo-500 rounded-xl">
        <figure className="overflow-hidden rounded-t-xl">
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>
        <div className="card-body p-6 space-y-4">
          <h2 className="card-title text-xl font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-indigo-600">{category}</p>
          <div className="text-sm space-y-1 text-gray-600">
            <p>
              <span className="font-medium text-gray-800">📅 Date:</span> {date}
            </p>
            <p>
              <span className="font-medium text-gray-800">📍 Location:</span> {location}
            </p>
            <p>
              <span className="font-medium text-gray-800">🎟️ Entry Fee:</span> {entry_fee} TK
            </p>
          </div>
          <div className="card-actions justify-end mt-4">
            <Link
              to={`/events/${id}`}
              className="btn btn-primary text-white hover:bg-indigo-700 flex items-center gap-2"
            >
              View More <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
