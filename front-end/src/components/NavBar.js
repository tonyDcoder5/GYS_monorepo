import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/GYS_logo.jpg";
import { listResources } from ".././utils/api";

export default function NavBar() {
  const [resources, setResources] = useState(null);
  const [resourcesError, setResourcesError] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const abortController = new AbortController();
        const response = await listResources(abortController.signal);
        setResources(response);
      } catch (error) {
        setResourcesError(error);
      }
    };
    fetchResources();
  }, []);

  return (
    <div className="header-nav row">
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <div>
          <img src={logo} alt="GYS logo" />
          {/* <Navbar.Brand href="home">Golf Yankee Six</Navbar.Brand> */}
        </div>
        <div className="nav-bar">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-links">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="resources">Resources</Nav.Link>
              <Nav.Link href="support">Blog</Nav.Link>
              {/* REROUTE TO CONTACT Route */}
              <button className="btn contact-btn">
                <Link to="about">Contact Us</Link>
              </button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
