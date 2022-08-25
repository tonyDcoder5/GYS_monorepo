import React, {useState} from "react";

import { Link } from "react-router-dom";


export default function Events() {

    const date = new Date().toDateString();

    return(
      <div className="events">
        <div className="row">
        <h4>Upcoming Events:</h4>
        <span>Today: {date}</span>
        <div className="col events-block">
          <div className="col agenda-block">
            <span>display from Facebook Group events</span>
          </div>
          <h6>Follow us on <a href="https://www.facebook.com/">Facebook</a> for more updates!</h6>
        </div>
        </div>
      </div>
    )
}