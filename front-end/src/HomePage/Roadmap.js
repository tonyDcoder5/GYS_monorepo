import React from "react";

export default function Roadmap() {
  return (
    <div className="roadmap-sect m-3">
      <div className="row roadmap-block">
      <h6>Block 1- Roadmap Section</h6>
        <div className="col-4">Picture</div>
        <div className="col-8">
          Text
        </div>
      </div>
      <div className="row roadmap-block">
        <h6>Block 2- Roadmap Section</h6>
        <div className="col-8">Text</div>
        <div className="col-4">
          Picture
        </div>
      </div>
      <div className="row roadmap-block">
        <h6>Block 3- Roadmap Section</h6>
        <div className="col-4">Picture</div>
        <div className="col-8">
          Text
        </div>
      </div>
    </div>
  );
}
