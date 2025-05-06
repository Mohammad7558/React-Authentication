import React, { useEffect, useState } from "react";
import {
  getEventDataFromLocalStorage,
  removeDoctorFromLocalStorage,
} from "../../utilities/localStorage";
import DetailsBooking from "./DetailsBooking";
import toast from "react-hot-toast";
import NoBookedShow from "../NoBookedShow/NoBookedShow";

const MyBooking = () => {
  const [bookedEvent, setBookedEvent] = useState([]);

  const handleRemove = (id) => {
    const filteredEvent = bookedEvent.filter((event) => event.id !== id);
    setBookedEvent(filteredEvent);
    removeDoctorFromLocalStorage(id);
    toast.success("Removed Successfully");
  };

  useEffect(() => {
    const eventData = getEventDataFromLocalStorage();
    setBookedEvent(eventData);
  }, []);

  return (
    <div>
      {bookedEvent.length === 0 ? (
        <NoBookedShow/>
      ) : (
        <>
          <h2 className="text-center text-4xl mt-10">My Booked Events</h2>
          {bookedEvent.map((event) => (
            <DetailsBooking
              key={event.id}
              event={event}
              handleRemove={handleRemove}
            ></DetailsBooking>
          ))}
        </>
      )}
    </div>
  );
};

export default MyBooking;
