import React, { useEffect, useState } from "react";
import { getEventDataFromLocalStorage } from "../../utilities/localStorage";

const MyBooking = () => {
  const [bookedEvent, setBookedEvent] = useState([]);

  useEffect(() => {
    const eventData = getEventDataFromLocalStorage();
    setBookedEvent(eventData);
  }, []);

  console.log(bookedEvent);

  return (
    <div>
      <h2>My Booked Events</h2>
      {bookedEvent.length > 0 ? (
        <ul>
          {bookedEvent.map((event, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{event.name}</h3>
              <p>{event.description}</p>
              <p><strong>Venue:</strong> {event.venue}</p>
              <p><strong>Date:</strong> {event.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events booked yet.</p>
      )}
    </div>
  );
};

export default MyBooking;
