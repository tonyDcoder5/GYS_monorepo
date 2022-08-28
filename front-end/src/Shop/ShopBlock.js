import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
const logo = require("../assets/img/GYS_logo.jpg");

export default function ShopBlock() {
  const [showDetails, setShowDetails] = useState(false);

  const handleShow = () => setShowDetails(!showDetails);

  const shirts = [
    {
      id: 0,
      name: "Test Name",
      image: logo,
      title: "Test Title",
      subtitle: "Test subtitle",
      date: "2022-09-01",
    },
    {
      id: 1,
      name: "Test Name 1",
      image: logo,
      title: "Test Title 1",
      subtitle: "Test subtitle 1",
      date: "2022-09-01",
    },
  ];

  const prompt = {
    image: "../assets/img/GYS_logo.jpg",
    name: "why-block",
    title: "",
    bio: "",
    link: "",
  };

  return (
    <div className="shop-block">
      <div className="shop-bx">
        <h2>DESIGNS BY COMPANY NAME HERE</h2>
        <div className="shop-row">
          <img src={prompt.image} width={"25%"} alt="headshot" />
          <section className="shop-text">
            <h4>{prompt.name}</h4>
            <h6>{prompt.title}</h6>
            <p>{prompt.bio}</p>
            <a href={prompt.link}>LinkedIn</a>
          </section>
        </div>
      </div>
      <div className="row shirt-block">
        <h2>DESIGNS COMING SOON</h2>
        <div className="shirt-content">
          <section>
            {shirts.map((shirt, idx) => {
              return (
                <div className="shirt-row">
                  <img src={logo} width={"25%"} alt={shirt.name} />
                  <span className="shirt-text">
                    <h3>{shirt.title}</h3>
                    <button
                      className="btn shirt-detail-btn"
                      onClick={handleShow}
                    >
                      More details
                    </button>
                    <Offcanvas
                      show={showDetails}
                      onHide={handleShow}
                      placement="bottom"
                      backdrop="true"
                      keyboard="true"
                      className="offcanvas-details"
                    >
                      <Offcanvas.Body>
                      <Offcanvas.Header closeButton />

                        <h3>{shirt.title}</h3>
                        <h5>{shirt.subtitle}</h5>
                        <img
                          src={shirt.image}
                          width={"25%"}
                          alt={shirt.subtitle}
                        />
                      </Offcanvas.Body>
                    </Offcanvas>
                    <p>{shirt.date}</p>
                  </span>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
}
