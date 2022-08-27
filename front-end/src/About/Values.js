import React, { useState } from "react";
import {Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
const logo = require("../assets/img/GYS_logo.jpg");

export default function Values() {
  const team = [
    {
      id: 0,
      name: "Test Name",
      image: logo,
      title: "Test Title",
      bio: "Test bio",
      link: "https://www.linkedin.com/in/tonydcoder/",
    },
    {
      id: 1,
      name: "Test Name 1",
      image: logo,
      title: "Test Title 1",
      bio: "Test bio 1",
      link: "https://www.linkedin.com/in/tonydcoder/",
    },
  ];

  const values = [
    {
      id: 0,
      title: "Teamwork",
      subtitle: "Teamwork subtitle",
      link: "#",
    },
    {
      id: 2,
      title: "Relentlessness",
      subtitle: "Relentlessness subtitle",
      link: "#",
    },
    {
      id: 3,
      title: "Determination",
      subtitle: "Determination subtitle",
      link: "#",
    },
    {
      id: 4,
      title: "Compassion",
      subtitle: "Compassion subtitle",
      link: "#",
    },
  ];

  return (
    <div>
      <div className="row who-block">
        <h2>Who are we?</h2>

        {team ? (
          team.map((i) => {
            return (
              <div className="who-row">
                {" "}
                <img src={i.image} width={"25%"} alt="headshot image" />
                <section className="who-text">
                  <h4>{i.name}</h4>
                  <h6>{i.title}</h6>
                  <p>{i.bio}</p>
                  <a href={i.link}>LinkedIn</a>
                </section>
              </div>
            );
          })
        ) : (
          <div className="who-row">
            <h3>Loading ...</h3>
          </div>
        )}
      </div>
      <div className="values-block">
        <h3>Our Values at GYS:</h3>
        <Row className="g-4">
            {values ? (
              values.map((value) => {
                return (
                  <Col key={value.id}>
                    <h3>{value.title}</h3>
                    <p>{value.subtitle}</p>
                    <a href={value.link}>Link</a>
                  </Col>
                );
              })
            ) : (
              <div className="value-block">Loading...</div>
            )}
        </Row>
      </div>
    </div>
  );
}
