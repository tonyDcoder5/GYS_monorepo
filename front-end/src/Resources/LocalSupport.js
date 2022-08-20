import React, {useState} from "react";
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

    return(
        <>
        <h3>Local Support Section</h3>
        <div className="resource-block">
        <h6>Block 2- Contact Section</h6>
        <div className="row">
          <div className="col">
            <div className="row">
              <p>Section Title</p>
            </div>
            <Row xs={1} md={2} className="g-4">
                {contacts.map((contact, idx)=> (
                    <Col>
                    <button>Test {idx}</button>
                    </Col>
                ))}
            </Row>
          </div>
          <div className="col">
            <Card style={{ width: "auto", height: "auto"}}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      </>
    )
}