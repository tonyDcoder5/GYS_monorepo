import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/GYS_logo.jpg";

export default function Banner() {
  return (
    <div className="header-banner">
      <div className="banner-brand">
        <div className="brand-logo">
          <a href="home">
            <img src={logo} alt="GYS logo/Home Button" />
          </a>
        </div>
        <div className="brand-text">
          <a href="home"><h1><b>Golf Yankee Six</b></h1></a>
          <h4>We Got Your Back</h4>
        </div>
      </div>
      <div className="banner-link">
        <h4><b>Veterans Mental Health Advocacy</b></h4>
        <h6><b>Emergency?</b></h6>
        <h4>
          Call the National Crisis Hotline: <a href="https://988lifeline.org/" target="_blank"><b>Dial 988</b></a>
        </h4>
      </div>
    </div>
  );
}
