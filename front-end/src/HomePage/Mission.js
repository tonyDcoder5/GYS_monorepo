import React from "react";
import { Link } from "react-router-dom";

export default function Mission({ prompts }) {
  const flag = require("../assets/img/flag-gif.gif");

  //TODO: create api call for specific prompts at each component for easier rendering
  const missionContent = prompts.find(
    (prompt) => prompt.section_name === "header-block"
  );

  const statsContent = prompts.find(
    (prompt) => prompt.section_name === "mission-stats"
  );

  return (
    <div className="mission-sect" name="mission-sect">
      <div className="intro-animation">
        <img
          src={flag}
          alt="Waving flag gif"
          name="flag animation"
          id="intro-animation"
        />
        <p className="intro-subhead">
          <h3>{missionContent?.section_title}</h3>
          {missionContent?.section_text || null}
        </p>
      </div>
      <div className="mission-stats mt-4">
        <div className="mb-4 row">
          <h3>Statistics headline</h3>
        </div>
        <div className="row mb-5">
          <div className="col">
            <h3>Block 1</h3>
            <p>Block 1 subtitle</p>
            <button className="btn">Link</button>
          </div>
          <div className="col">
            <h3>Block 2</h3>
            <p>Block 2 subtitle</p>
            <button className="btn">Link</button>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <h3>Block 3</h3>
            <p>Block 3 subtitle</p>
            <button className="btn">Link</button>
          </div>
          <div className="col">
            <h3>Block 4</h3>
            <p>Block 4 subtitle</p>
            <button className="btn">Link</button>
          </div>
        </div>
      </div>
    </div>
  );
}
