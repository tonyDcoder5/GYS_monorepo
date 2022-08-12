import React from "react";
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className="support">
      <h4>Support Section</h4>
      <div className="row roadmap-block">
        <h6>Block 1- Roadmap Section</h6>
        <div className="col-4">Picture</div>
        <div className="col-8">Text</div>
      </div>
      <div className="row roadmap-block">
        <h6>Block 2- Roadmap Section</h6>
        <div className="col-8">Text</div>
        <div className="col-4">Picture</div>
      </div>
      <div className="row roadmap-block">
        <h6>Block 3- Roadmap Section</h6>
        <div className="col-4">Picture</div>
        <div className="col-8">Text</div>
      </div>
      <div className="row roadmap-block">
        <h6>Block 4- Roadmap Section</h6>
        <div className="col-8">Text</div>
        <div className="col-4">Picture</div>
      </div>
    </div>
  );
}
