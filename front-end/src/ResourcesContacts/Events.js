import React from "react";
import { Link } from "react-router-dom";


export default function Events() {

    return(
      <div className="events">
        <h4>Events Section</h4>
        <div className="row">
        <div className="col events-block">
          <h6>Block 1- Calendar Section</h6>
        </div>
        <div className="col events-block">
          <h6>Block 2- Agenda Section</h6>
        </div>
        </div>
      </div>
    )
}