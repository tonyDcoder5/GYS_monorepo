import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/GYS_logo.jpg';


/*
TODO:
  - CHANGE GITHUB ICON COLOR AND ADD CSS RULES FOR EFFECTS
  - adjust css spacing and responsive behavior for smoother effects
*/

export default function NavBar() {

 

  return (
   <div className="container">
          <Navbar bg="light" variant="light" sticky="top" >
        <Container>
          <div className="header-nav">
          <Navbar.Brand href="#home">Golf Yankee Six</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
   </div>
  )
}