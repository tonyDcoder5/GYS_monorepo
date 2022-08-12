import React from "react";
import { Link } from "react-router-dom";

export default function Mission() {
  const missionVid = "https://www.w3schools.com/html/mov_bbb.mp4";

  return (
    <div className="mission-sect">
      <div className="mission-vid">
        <video width="100%" height="100%" controls autoplay muted>
          <source src={missionVid} type="video/mp4" />
        </video>
        <p className="mt-5">
          Mission Video Section w/ statement *find overlay w/ tailwind?*
        </p>
      </div>
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
  );
}
