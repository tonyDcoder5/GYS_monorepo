import React, { useState, useEffect } from "react";
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
          {events.length > 0 ? events.map((event, idx) => (
            <div className="agenda-block" key={event.event_id}>
              <div className="col m-2">
              <img src={require("../assets/img/GYS_logo.jpg")} width="40%" alt={event.event_title} />
              <h5>{formatAsDate(event.event_date)}</h5>
              </div>
              <div className="col">
              <h4>{event.event_title}</h4>
              <p>{event.event_text}</p>
              </div>              
            </div>
          )) : 
          <div className="agenda-block">
          <h3>Loading...</h3></div>
          }
         
        </div>
        <h4 className="mt-3">
            Follow us on <a href="https://www.facebook.com/">Facebook</a> for
            more updates!
          </h4>
      </div>
    </div>
  );
}


