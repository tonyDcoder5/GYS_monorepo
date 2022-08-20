import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
// import Calendar from 'react-calendar';
import { Link } from "react-router-dom";

export default function UrgentSupport() {
  const contacts = [
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
      <Row xs={1} md={2} className="g-4">
        {contacts.map((contact, idx) => (
          <Col key={contact.id}>
            <Card className="bg-dark support-card-urgent">
              <Card.Body>
                <Card.Title>{contact.orgName}</Card.Title>
                <Card.Text>{contact.orgDesc}</Card.Text>
                <div className="support-btns-urgent">
                  <button className="btn btn-success">
                    {contact.orgPhone}
                  </button>
                  <button className="btn btn-secondary">
                    <a href={contact.orgUrl} target="_blank">
                      Website
                    </a>
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
