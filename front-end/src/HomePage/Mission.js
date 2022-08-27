import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Mission({ prompts }) {
  const flag = require("../assets/img/flag-gif.gif");

  //TODO: create api call for specific prompts at each component for easier rendering
  const missionContent = prompts.find(
    (prompt) => prompt.section_name === "mission-sect"
  );

  const statsContent = prompts.filter((prompt) =>
    prompt.section_name.includes("mission-stats")
  );

  console.log(missionContent, statsContent);

  return (
    <div className="mission-sect" name="mission-sect">
      <div className="intro-animation">
        <img
          src={flag}
          alt="Waving flag gif"
          name="flag animation"
          id="intro-animation"
        />
        <span className="intro-subhead">
          <h3>{missionContent?.section_title}</h3>
          {missionContent?.section_text || null}
        </span>
      </div>
      <div className="mission-stats mt-4">
          <h3>Statistics headline</h3>
          <Row className="g-4">
        {statsContent ? (
          statsContent.map((stat) => {
            return (
                <Col>
                  <h3>{stat.section_title}</h3>
                  <p>{stat.section_text}</p>
                  <button className="btn">Link</button>
                </Col>
            );
          })) : (
          <div className="row mb-5">
            <div className="col">
              <h3>Loading ....</h3>
            </div>
          </div>
        )}
        </Row>
      </div>
    </div>
  );
}
