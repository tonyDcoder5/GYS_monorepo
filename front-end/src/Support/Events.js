import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { formatAsDate, listEvents } from "../utils/api";

export default function Events() {
  const date = new Date().toDateString();
  const [events, setEvents] = useState([]);
  const [eventsError, setEventsError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const abortController = new AbortController();
        const response = await listEvents(abortController.signal);        
        console.log(response);
        setEvents(response);

      } catch (error) {
        setEventsError(error);
      }
    };
    fetchEvents();
  }, []);



  return (
    <div className="events">
      <div className="row">
        <h4>Upcoming Events:</h4>
        <span>Today: {date}</span>
        <div className="col events-block">
          {events.map((event, idx) => (
            <div className="agenda-block" key={event.event_id}>
              <div className="col m-2">
              <img src={require("../assets/img/GYS_logo.jpg")} width="40%" />
              <h5>{formatAsDate(event.event_date)}</h5>
              </div>
              <div className="col">
              <h4>{event.event_title}</h4>
              <p>{event.event_text}</p>
              </div>              
            </div>
          ))}
          <h4 className="mt-3">
            Follow us on <a href="https://www.facebook.com/">Facebook</a> for
            more updates!
          </h4>
        </div>
      </div>
    </div>
  );
}


