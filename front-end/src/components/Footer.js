import React from "react";
import { SocialIcon } from "react-social-icons";
import logo from "../assets/img/GYS_logo.jpg";
import { Link } from "react-router-dom";
import StarBanner from "./StarBanner";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
        <div className="footer-logo">
          <a href="/home">
            <img src={logo} alt="GYS logo" />
          </a>
        </div>
        <div className="footer-links">
          <Link to="/events">Events</Link>

          <Link to="/contact">Contact</Link>
          <a>Admin</a>
        </div>
      </div>
      <div className="footer-text">
       <a href="/home"> <h3>
          <b>Golf Yankee Six</b>
        </h3>
        <h4>We Got Your Back</h4></a>
      </div>
      <StarBanner />
      <div className="footer-socials">
        {/* TODO: CREATE CUSTOM FACEBOOK URL */}
        <span>
          <SocialIcon url="https://facebook.com/" />
        </span>
        <span>
          <SocialIcon
            url="https://www.instagram.com/golfyankeesix/"
            target="_blank"
          />
        </span>
        <span>
          <SocialIcon
            url="https://github.com/tonyDcoder5/GYS_monorepo"
            target="_blank"
          />
        </span>
      </div>
      <div className="footer-copy">
        <p>Designed by Straw Hat Media Agency</p>
        <p>With collaborations from: TonyDCoder, NR-Papaya</p>
        <p>Built using ReactJS, Bootstrap, & CSS</p>
      </div>
    </div>
  );
}
