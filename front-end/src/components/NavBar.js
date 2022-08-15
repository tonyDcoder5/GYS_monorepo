import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/GYS_logo.jpg";
import {listResources} from ".././utils/api"

export default function NavBar() {
  const [resources,setResources] = useState(null);
  const [resourcesError,setResourcesError] = useState(null)
  useEffect( ()=>{
    const fetchResources = async ()=>{
      try{
        const abortController = new AbortController();
        const response = await listResources(abortController.signal);
        setResources(response)
        
      } catch (error){
        setResourcesError(error)
      }
    }
    fetchResources()
  },[])
  
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
