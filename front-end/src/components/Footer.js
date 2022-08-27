import React from "react";
import { SocialIcon } from 'react-social-icons';
import logo from "../assets/img/GYS_logo.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <span><Link to="/about">About</Link></span>
        <span><Link to="/support">Blog</Link></span>        
        <span><Link to="/resources">Resources</Link></span>
        <section>
          <a href="/home">
          <img src={logo} alt="GYS logo" />
          <h3><b>Golf Yankee Six</b></h3>
          <h6>Veterans Mental Health Advocacy</h6>
          <h4>We Got Your Back</h4>
          </a>
        </section>
        <span><Link to="/events">Events</Link></span>
        <span><Link to="/contact">Contact</Link></span>
        {/* admin page link */}
        <span>Admin</span>
      </div>
      <div className="row mt-3">
        <hr />
      </div>
      <div className="footer-socials">
        {/* TODO: CREATE CUSTOM FACEBOOK URL */}
        <span><SocialIcon url="https://facebook.com/" /></span>
        <span><SocialIcon url="https://www.instagram.com/golfyankeesix/" target="_blank" /></span>
        <span><SocialIcon url="https://github.com/tonyDcoder5/GYS_monorepo" target="_blank" /></span>
      </div>
      <div className="footer-copy">
        <p>Designed by Straw Hat Media Agency</p>
        <p>With collaborations from: TonyDCoder, NR-Papaya</p>
        <p>Built using ReactJS, Bootstrap, & CSS</p>
      </div>
    </div>
  );
}
