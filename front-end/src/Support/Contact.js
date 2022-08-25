import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Row, Col, Button } from "react-bootstrap";

export default function Contact() {
  const initialForm = {
    user_name: "",
    user_email: "",
    message: "",
  };
  const form = useRef();
  const [sentNotice, setSentNotice] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4b4urgv",
        "template_vt2t2da",
        form.current,
        "G-ApjuZDYtqcWDa-9"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setSentNotice({message: 'Message Sent Successfully!'})
        },
        (error) => {
          console.log(error.text);
          setSentNotice({message: error.text});
        }
      );
  };

  return (
    <div className="contact" id="contact">
      {sentNotice && 
      <div>
        <h2>{sentNotice.message}</h2>
        </div>}
      <div className="contact-bx">
      <Form ref={form} onSubmit={sendEmail}>
        <Row>
        <h2>Contact Form</h2>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="user_name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              name="user_name"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              placeholder="Enter email"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control type="text" name="message" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
    </div>
    </div>
  );
}