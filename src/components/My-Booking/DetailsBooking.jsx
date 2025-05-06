import React from "react";

const DetailsBooking = ({ event, handleRemove }) => {
  const {
    name,
    thumbnail,
    category,
    date,
    location: eventLocation,
    entry_fee,
    description,
  } = event;

  return (
    <div className="w-full m-10 p-5 lg:w-11/12 mx-auto">
      <div className="border rounded-2xl p-10">
        <div className="flex flex-col lg:flex-row items-center gap-x-5">
          <div className="w-full lg:w-1/2">
            <img className="rounded-4xl" src={thumbnail} alt="" />
          </div>
          <div className="w-full lg:w-1/2 lg:mt-0 mt-5">
            <h1 className="text-4xl mb-3">{name}</h1>
            <h1 className="mb-4">{description}</h1>
            <h1>
              <span className="font-bold">Category:</span> {category}
            </h1>
            <h1>
              <span className="font-bold">Date:</span> {date}
            </h1>
            <h1>
              <span className="font-bold">Location:</span> {eventLocation}
            </h1>
            <h1>
              <span className="font-bold">Entry Fee:</span> {entry_fee} TK
            </h1>
            <button
              onClick={() => handleRemove(event.id)}
              className="btn bg-red-500 text-white mt-4"
            >
              Remove Booked Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBooking;
