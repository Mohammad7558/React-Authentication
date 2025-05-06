import React, { useEffect, useState } from "react";
import SingleEvent from "../SingleEvent/SingleEvent";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("eventData.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center">Upcoming Events</h2>
      <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
        {events.map((singleEvent) => (
          <SingleEvent
            key={singleEvent.id}
            singleEvent={singleEvent}
          ></SingleEvent>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEvents;
