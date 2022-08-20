import React from "react";
import { Link } from "react-router-dom";
import SupportGYS from "./Support";

export default function AboutUs() {
  return (
    <div className="about">
      <h3>About Us Section</h3>
      <div className="row roadmap-block p-5">
        <div className="col">
          <h6>Our Why:</h6>
        </div>
        <div className="col">
          Short why w/ accompanying voiceover video
        </div>
      </div>
      <div className="roadmap-block">
        <h6>Block 2- Values Section</h6>
        <div className="mission-stats">
          <div className="mb-4 row">
            <span>Our Values at GYS:</span>
          </div>
          <div className="row mb-5">
            <div className="col">
              <h3>Teamwork</h3>
              <p>Block 1 subtitle</p>
            </div>
            <div className="col">
              <h3>Relentlessness</h3>
              <p>Block 2 subtitle</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <h3>Determination</h3>
              <p>Block 3 subtitle</p>
            </div>
            <div className="col">
              <h3>Compassion</h3>
              <p>Block 4 subtitle</p>
            </div>
          </div>
        </div>
      </div>
      <SupportGYS />
    </div>
  );
}
