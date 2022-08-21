import React from "react";
import { Link } from "react-router-dom";
import ResourceBlock from "./ResourceBlock";
import Events from "./Events";

export default function Resources() {
  return (
    <div className="resources">
      <Events />
      <ResourceBlock />
    </div>
  );
}
