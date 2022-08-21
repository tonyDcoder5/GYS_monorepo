import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LocalSupport() {
  const contacts = [
    {
      id: 0,
      orgName: "TestOrg1",
      orgDesc: "Example description",
      orgPhone: "123-456-7890",
      orgUrl: "#",
      contact: "Org Contact",
      contact_email: "sameple@sample.com",
      icon: require("../assets/img/GYS_logo.jpg"),
      width: "50%",
    },
    {
      id: 1,
      orgName: "TestOrg2",
      orgDesc: "Example description",
      orgPhone: "123-456-7890",
      orgUrl: "#",
      contact: "Org Contact",
      contact_email: "sameple@sample.com",
      icon: require("../assets/img/GYS_logo.jpg"),
      width: "50%",
    },
    {
      id: 2,
      orgName: "TestOrg3",
      orgDesc: "Example description",
      orgPhone: "123-456-7890",
      orgUrl: "#",
      contact: "Org Contact",
      contact_email: "sameple@sample.com",
      icon: require("../assets/img/GYS_logo.jpg"),
      width: "50%",
    },
    {
      id: 3,
      orgName: "Suicide & Crisis Lifeline",
      orgDesc:
        "988 has been designated as the new three-digit dialing code that will route callers to the National Suicide Prevention Lifeline.",
      orgPhone: "988",
      orgUrl: "https://988lifeline.org/",
      contact: "Org Contact",
      contact_email: "sameple@sample.com",
      icon: require("../assets/img/GYS_logo.jpg"),
      width: "50%",
    },
  ];

  const initialCard = {
    id: 0,
    orgName: "Click an Icon",
    orgDesc: "To see more details on our local partnered organizations, or click below to find out how to become one!",
    orgUrl: "#",
    contact: "Org Contact",
    contact_email: "sameple@sample.com",
    icon: require("../assets/img/GYS_logo.jpg"),
  }
  const [hiCard, setHiCard] = useState({ initialCard });

  const clickHandle = (contact) => {
    console.log(contact);
    setHiCard(contact);
  }

  return (
    <>
      <div className="local-support-block">
        
          <div className="col">
            <h3>Local Support Section</h3>              
            <Row xs={1} md={2} className="icon-group g-4 mt-2">
              {contacts.map((contact, idx) => (
                <Col key={idx}>
                  <img onClick={()=> clickHandle(contact)} key={contact.id} src={contact.icon} width={contact.width} />
                </Col>
              ))}
            </Row>
          </div>
          <div className="col">
            <Card style={{ width: "100%", height: "100%", color: "#fff" }} className="bg-dark">
              <Card.Body>
                <Card.Title>{hiCard.orgName}</Card.Title>
                <Card.Text>
                  {hiCard.orgDesc}
                </Card.Text>
                <Button variant="primary"><a href={hiCard.orgUrl}>Website</a></Button>
              </Card.Body>
            </Card>
          </div>
        </div>
    </>
  );
}