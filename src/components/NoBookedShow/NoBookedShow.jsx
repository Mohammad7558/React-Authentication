import React from "react";
import { Link } from "react-router";

const NoBookedShow = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-white/80 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-1/2 h-96 bg-purple-200 opacity-30 blur-3xl rounded-full absolute top-[-80px] left-[-50px]" />
          <div className="w-[60%] h-[80%] bg-pink-200 opacity-30 blur-3xl rounded-full absolute bottom-[-20px] right-[-30px]" />
        </div>
        <div className="card z-10 bg-base-100 shadow-xl p-6 border border-purple-500">
          <div className="card-body justify-center items-center text-center">
            <h2 className="card-title text-3xl font-bold text-purple-500 text-center">
              No Bookings Found
            </h2>
            <p className="text-base-content">
              You haven't booked anything yet. Start exploring and make your
              first booking!
            </p>
            <div className="card-actions justify-center mt-4">
              <Link to='/' className="btn btn-primary">Browse Event</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoBookedShow;
