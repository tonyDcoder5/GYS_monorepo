import React, {useState} from "react";
// import Calendar from 'react-calendar';
import { Link } from "react-router-dom";


export default function Events() {

  const [date, onChangeDate] = useState(new Date());

    return(
      <div className="events">
        <div className="row">
        <h4>Events Section</h4>
        <div className="col events-block">
          <h6>Block 1- Calendar Section</h6>
          {/* <Calendar className="event-calendar" onChange={onChangeDate} value={date} /> */}
        </div>
        <div className="col events-block">
          <h6>Block 2- Agenda Section</h6>
        </div>
        </div>
      </div>
    )
}