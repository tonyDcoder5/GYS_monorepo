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
              <h5>{formatAsDate(event.event_date)}</h5>
              <img src={require("../assets/img/GYS_logo.jpg")} width="25%" />
              <h4>{event.event_title}</h4>
              <p>{event.event_text}</p>
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

/* 

FACEBOOK PLUGIN, DOES NOT RESPOND TO WINDOW RESIZE, MUST BE RERENDERED EACH TIME? SUPER SLOW
<div
              className="fb-page"
              data-href="https://www.facebook.com/Straw-Hat-Media-Agency-108894155235434/"
              data-tabs="events, timeline, messages"
              data-width="500"
              data-height="500"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="true"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/Straw-Hat-Media-Agency-108894155235434/"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/Straw-Hat-Media-Agency-108894155235434/">
                  Straw Hat Media Agency
                </a>
              </blockquote>
            </div>
*/
