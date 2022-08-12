import React from "react";
import logo from "../assets/img/GYS_logo.jpg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      {/* 
        Row
        NavBar
        Link Link Link LOGO Link Link Link
        Row
        Break Line
        Row
        Social Media Icons/Links 
        Link Link Link Link
        Company/Copyright tags
        */}
      <div className="footer-nav">
        <span><Link to="/about">About</Link></span>
        <span><Link to="/about">Support</Link></span>        
        <span><Link to="/resources">Resources</Link></span>
        <section>
          <a href="/home">
          <img src={logo} alt="GYS logo" />
          <h5>Golf Yankee Six</h5>
          </a>
        </section>
        <span><Link to="/resources">Events</Link></span>
        <span><Link to="/resources">Contacts</Link></span>
        {/* admin page link */}
        <span>USERS</span>
      </div>
      <div className="row mt-3">
        <hr />
      </div>
      <div className="footer-socials">
        <span>FB</span>
        <span>IG</span>
        <span>TT?</span>
        <span>YT?</span>
      </div>
      <div className="footer-copy">
        <p>Built by Straw Hat Media Agency</p>
        <p>With collaborations from: TonyDCoder, NR-Papaya</p>
        <p>Built using ReactJS, Bootstrap, & Tailwind CSS</p>
      </div>
    </div>
  );
}
