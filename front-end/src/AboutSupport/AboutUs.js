import React from "react";
import { Link } from "react-router-dom";
import Support from "./Support";

export default function AboutUs() {
  return (
    <div className="about">
      <h3>About Us Section</h3>
      <div className="row roadmap-block p-5">
        <div className="col">
          <h6>Our Mission:</h6>
        </div>
        <div className="col">
          VIDEO
        </div>
      </div>
      <div className="roadmap-block">
        <h6>Block 2- About us Section</h6>
        <div className="mission-stats">
          <div className="mb-4 row">
            <span>Statistics headline</span>
          </div>
          <div className="row mb-5">
            <div className="col">
              <h3>Block 1</h3>
              <p>Block 1 subtitle</p>
              <button>Link to resource/reference</button>
            </div>
            <div className="col">
              <h3>Block 2</h3>
              <p>Block 2 subtitle</p>
              <button>Link to resource/reference</button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <h3>Block 3</h3>
              <p>Block 3 subtitle</p>
              <button>Link to resource/reference</button>
            </div>
            <div className="col">
              <h3>Block 4</h3>
              <p>Block 4 subtitle</p>
              <button>Link to resource/reference</button>
            </div>
          </div>
        </div>
      </div>
      <Support />
    </div>
  );
}
