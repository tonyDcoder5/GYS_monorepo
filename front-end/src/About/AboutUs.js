import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import StarBanner from "../components/StarBanner";
import { listContacts } from "../utils/api";
const logo = require("../assets/img/GYS_logo.jpg");

export default function AboutUs({prompts = [] }) {

  console.log(prompts);

  const i = {
    section_title: "Loading section content..."
  }
  
  // ADD API CALL for andria and Jacqui's contact/bio for about page 
  const [contacts,setContacts] = useState([]);
  const [contactsError,setContactsError] = useState(null)
 
  useEffect( ()=>{
    const fetchResources = async ()=>{
      try{
        const abortController = new AbortController();
        const response = await listContacts(abortController.signal);
        
        const founders = response.filter((data)=> data.level === "founder");
        console.log(founders);
        setContacts(founders);        
      } catch (error){
        setContactsError(error)
      }
    }
    fetchResources()
  },[])

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


  // store prompts for header & values sections
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
    <div className="about-us">
      <div className="row why-block">
        <h2>{prompts[0]?.section_title || i.section_title}</h2>
        <StarBanner />
        <div className="why-row">
          <img src={require("../assets/img/GYS_logo.jpg")} width='15%' alt="media/logo" />
          <section className="why-text">
            <h4>{prompts[0]?.section_subtitle}</h4>
            <p>{prompts[0]?.section_text}</p>
          </section>
        </div>
      </div>
      <div className="who-block">
        <h2>Who are we?</h2>
        <div>
        {team ? (
          team.map((i) => {
            return (
              <div className="who-col">
                <img src={i.image} width={"25%"} alt="media/logo" />
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
          <div className="who-col">
            <h3>Loading ...</h3>
          </div>
        )}
        </div>
      </div>
      <div className="values-block">
        <h3>Our Values at GYS:</h3>
        <Row className="g-4">
          {values ? (
            values.map((value) => {
              return (
                <Col key={value.id}>
                  <h3>{value.title}</h3>
                  <StarBanner />
                  <p>{value.subtitle}</p>
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
