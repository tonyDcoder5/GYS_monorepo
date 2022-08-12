import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/GYS_logo.jpg";

export default function NavBar() {
  return (
    <div className="row header-nav">
      <div className=" col-9 mt-2">
        <Navbar sticky="top">
          <img src={logo} alt="GYS logo" />
          <Navbar.Brand href="home">Golf Yankee Six</Navbar.Brand>
          <Nav className="nav-links">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="resources">Resources</Nav.Link>
          </Nav>
        </Navbar>
      </div>
      <div className="col-3 nav-buttons">
        <button className="btn support-btn">
          <Link to="about">Support</Link></button>
        <button className="btn events-btn"><Link to="resources">Events</Link></button>
      </div>
    </div>
  );
}
