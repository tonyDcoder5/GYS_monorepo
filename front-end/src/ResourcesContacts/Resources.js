import React from "react";
import { Link } from "react-router-dom";
import ResourceBlock from "./ResourceBlock";
import Events from "./Events";

export default function Resources() {
  return (
    <div className="resources">
        <h4>Downloadables Section</h4>
        <div className="row">
        <div className="col downloadable-block">
          <h6>Block 1- Downloadable Section</h6>
        </div>
        <div className="col downloadable-block">
          <h6>Block 2- Downloadable Section</h6>
        </div>
      <ResourceBlock />
      <Events />
      </div>
    </div>
  );
}
