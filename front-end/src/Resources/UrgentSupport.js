import React, { useState } from "react";
import { Row, Col, Card, OverlayTrigger, Popover } from "react-bootstrap";
// import Calendar from 'react-calendar';
import { Link } from "react-router-dom";
import StarBanner from "../components/StarBanner";

export default function UrgentSupport({contacts =[]}) {
  
  // console.log(contacts);
  
  const contactsPage = [
    {
      id: 0,
      orgName: "TestOrg1",
      orgDesc: "Example description",
      orgPhone: "123-456-7890",
      orgUrl: "#",
    },
    {
      id: 1,
      orgName: "TestOrg1",
      orgDesc: "Example description",
      orgPhone: "123-456-7890",
      orgUrl: "#",
    },
    {
      id: 2,
      orgName: "TestOrg1",
      orgDesc: "Example description",
      orgPhone: "123-456-7890",
      orgUrl: "#",
    },
    {
      id: 3,
      orgName: "Suicide & Crisis Lifeline",
      orgDesc:
        "988 has been designated as the new three-digit dialing code that will route callers to the National Suicide Prevention Lifeline.",
      orgPhone: "988",
      orgUrl: "https://988lifeline.org/",
    },
  ];

  return (
    <div className="resource-block urgent-resources">
      <h3>Urgent/Emergency Support Section</h3>
      <StarBanner />

      {/* highlight just 988 lifeline and other websites to find out more about what they can offer  */ }
      <Row xs={1} sm={2} className="g-4">
        {contactsPage.map((contact, idx) => (
          <Col key={contact.id}>
            <Card className="support-card-urgent">
              <div className="urgent-contact">
                <h4>{contact.orgName}</h4>
                <p>{contact.orgDesc}</p>
                <h6>Main Phone: {contact.orgPhone}</h6>
                <span className="support-btns-urgent">
                 
                  <button className="btn btn-orgsite">
                    <a href={contact.orgUrl} target="_blank">
                      Website
                    </a>
                  </button>
                </span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
