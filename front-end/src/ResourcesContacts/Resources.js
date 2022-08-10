import React from "react";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";
import Events from "./Events";


export default function Resources() {

    return(
      <div className="resources">
        <h3>Resources</h3>   
        <Contacts />
        <Events />
      </div>
   
    )
}