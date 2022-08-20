import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h6>SPONSORED Organization Highlight</h6>
      <div className="row header-block">
        <div className="col-4">Picture</div>
        <div className="col-8">Text</div>
      </div>
    </div>
  );
}
