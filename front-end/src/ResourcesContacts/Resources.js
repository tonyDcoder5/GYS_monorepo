import React from "react";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";
import Events from "./Events";

export default function Resources() {
  return (
    <div className="container resources">
        <h4>Resources Section</h4>
        <div className="roadmap-block">
          <h6>Block 1- Resource Section</h6>
        </div>
        <div className="roadmap-block">
          <h6>Block 2- Resource Section</h6>
        </div>
        <div className="roadmap-block">
          <h6>Block 3- Resource Section</h6>
        </div>
      <Contacts />
      <Events />
    </div>
  );
}
