import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Support() {
  const prompts = [
    {
      id: 0,
      icon: require("../assets/img/GYS_logo.jpg"),
      title: "Sample Title",
      text: "sample text",
      url: "#",
    },
    {
      id: 0,
      icon: require("../assets/img/GYS_logo.jpg"),
      title: "Sample Title",
      text: "sample text",
      url: "#",
    },
    {
      id: 0,
      icon: require("../assets/img/GYS_logo.jpg"),
      title: "Sample Title",
      text: "sample text",
      url: "#",
    },
    {
      id: 0,
      icon: require("../assets/img/GYS_logo.jpg"),
      title: "Sample Title",
      text: "sample text",
      url: "#",
    },
  ];

  return (
    <div className="support">
      <h4>Support Section</h4>
      <Row xs={1} sm={2} className="g-4">
      {prompts.map((prompt, idx) => (
          <Col key={prompt.id}>
            <Card className="bg-dark support-card">
                <img src={prompt.icon} width={"50%"} alt={prompt.title + "icon"} />
                <p>
                  Brief description how to support GYS (Events, Social Media, Partnered Resources, Merch)
                </p>
                  <button className="btn btn-secondary">
                    <a href={prompt.url} target="_blank">
                      Link
                    </a>
                  </button>
            </Card>
          </Col>
        ))}   
      </Row>
    </div>
  );
}
