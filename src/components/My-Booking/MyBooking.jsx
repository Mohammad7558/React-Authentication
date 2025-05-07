import React, { useEffect, useState } from "react";
import {
  getEventDataFromLocalStorage,
  removeDoctorFromLocalStorage,
} from "../../utilities/localStorage";
import DetailsBooking from "./DetailsBooking";
import toast from "react-hot-toast";
import NoBookedShow from "../NoBookedShow/NoBookedShow";
import { useLocation } from "react-router";

const MyBooking = () => {
  const [bookedEvent, setBookedEvent] = useState([]);
  const location = useLocation();

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

  useEffect(() => {
    if (location.pathname === "/my-bookings") {
      window.document.title = "My Booking - Event Master";
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-purple-100 via-white to-blue-100 backdrop-blur-md">
      {bookedEvent.length === 0 ? (
        <NoBookedShow />
      ) : (
        <>
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 shadow-md inline-block px-6 py-2 rounded-lg bg-white/70 backdrop-blur-md">
              My Booked Events
            </h2>
          </div>
          <div className="space-y-8">
            {bookedEvent.map((event) => (
              <DetailsBooking
                key={event.id}
                event={event}
                handleRemove={handleRemove}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyBooking;
