import React from "react";
import { Link } from "react-router";

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
    <div>
      <section className="py-10 px-5">
      <div >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={thumbnail} alt={name} className="w-full h-48 object-cover" />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm text-gray-500">{category}</p>
              <p className="text-sm"><strong>Date:</strong> {date}</p>
              <p className="text-sm"><strong>Location:</strong> {location}</p>
              <p className="text-sm"><strong>Entry Fee:</strong> {entry_fee}</p>
              <Link to={`/events/${id}`} className="btn mt-4 text-sm text-blue-600 hover:text-blue-800 font-medium">
                View More →
              </Link>
            </div>
          </div>
      </div>
    </section>
    </div>
  );
};

export default SingleEvent;
