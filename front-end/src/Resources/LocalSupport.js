import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarBanner from "../components/StarBanner";

export default function LocalSupport({ contacts = [] }) {
  // console.log(contacts);

  const contactsPage = [
    {
      id: 0,
      orgName: "TestOrg1",
      orgDesc: "Example description",
      orgPhone: "123-456-7890",
      orgUrl: "#",
      contact: "Org Contact",
      contact_email: "sameple@sample.com",
      icon: require("../assets/img/GYS_logo.jpg"),
      width: "55%",
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
      width: "55%",
    },
    {
      id: 2,
      orgName: "Test Long Org Name",
      orgDesc: "Example description",
      orgPhone: "123-456-7890",
      orgUrl: "#",
      contact: "Org Contact",
      contact_email: "sameple@sample.com",
      icon: require("../assets/img/GYS_logo.jpg"),
      width: "55%",
    },
    {
      id: 3,
      orgName: "National Crisis Lifeline",
      orgDesc:
        "988 has been designated as the new three-digit dialing code that will route callers to the National Suicide Prevention Lifeline.",
      orgPhone: "988",
      orgUrl: "https://988lifeline.org/",
      contact: "Org Contact",
      contact_email: "sameple@sample.com",
      icon: require("../assets/img/GYS_logo.jpg"),
      width: "55%",
    },
  ];

  const initialCard = {
    id: 0,
    orgName: "Click an Icon",
    orgDesc:
      "To see more details on our local partnered organizations, or click below to find out how to become one!",
    orgUrl: "#",
    contact: "Org Contact",
    contact_email: "sameple@sample.com",
    icon: require("../assets/img/GYS_logo.jpg"),
  };
  const [hiCard, setHiCard] = useState(initialCard);

  const clickHandle = (contact) => {
    console.log(contact);
    setHiCard(contact);
  };

  return (
    <div className="local-support-block">
      <section className="local-hotlines">
        <h3>Local Support Hotlines</h3>
        <StarBanner />
        <div className="contact-select">
          <div className="contact-group">
            {contactsPage.map((contact, idx) => (
              <div
                onClick={() => clickHandle(contact)}
                key={idx}
                className="contact-line"
              >
                <section>
                  <h4>{contact.orgName}</h4>
                  <img
                    key={contact.id}
                    src={contact.icon}
                    width={contact.width}
                  />
                  <h5>{contact.contact}</h5>
                </section>
              </div>
            ))}
          </div>
          <div className="contact-card">
            <Card>
              <Card.Body>
                <Card.Title>{hiCard.orgName}</Card.Title>
                <Card.Text>{hiCard.orgDesc}</Card.Text>
                <Button className="local-orgsite">
                  <a href={hiCard.orgUrl}>Website</a>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      <section className="local-counseling">
        <h3>Local Counseling Support</h3>
        <StarBanner />
        <span>         <div className="contact-card">
            <Card>
              <Card.Body>
                <Card.Title>{hiCard.orgName}</Card.Title>
                <Card.Text>{hiCard.orgDesc}</Card.Text>
                <Button className="local-orgsite">
                  <a href={hiCard.orgUrl}>Website</a>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="contact-select">
          <div className="contact-group">
            {contactsPage.map((contact, idx) => (
              <div
                onClick={() => clickHandle(contact)}
                key={idx}
                className="contact-line"
              >
                <section>
                  <h4>{contact.orgName}</h4>
                  <img
                    key={contact.id}
                    src={contact.icon}
                    width={contact.width}
                  />
                  <h5>{contact.contact}</h5>
                </section>
              </div>
            ))}
          </div>
        </div> </span>
 
      </section>
    </div>
  );
}
