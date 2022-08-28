import React, { useState } from "react";
import { Row, Col, Accordion } from "react-bootstrap";

export default function Blogs() {
  const [topDetails, setTopDetails] = useState(false);

  const top_faqs = [
    {
      id: 0,
      title: "sample 0",
      subtitle: "test subtitle 0",
      text: "sample body text 0",
      url: "#",
      date_posted: "2022-08-20",
    },
    {
      id: 1,
      title: "sample 1",
      subtitle: "test subtitle 1",
      text: "sample body text 1",
      url: "#",
      date_posted: "2022-08-20",
    },
  ];

  const recent_faqs = [
    {
      id: 0,
      title: "Recent sample 0",
      subtitle: "test Recent subtitle 0",
      text: "sample Recent body text 0",
      url: "#",
      date_posted: "2022-08-20",
    },
    {
      id: 1,
      title: "Recent sample 1",
      subtitle: "test Recent subtitle 1",
      text: "sample Recent body text 1",
      url: "#",
      date_posted: "2022-08-20",
    },
    {
      id: 2,
      title: "Recent sample 0",
      subtitle: "test Recent subtitle 0",
      text: "sample Recent body text 0",
      url: "#",
      date_posted: "2022-08-20",
    },
    {
      id: 3,
      title: "Recent sample 1",
      subtitle: "test Recent subtitle 1",
      text: "sample Recent body text 1",
      url: "#",
      date_posted: "2022-08-20",
    },
    {
      id: 4,
      title: "Recent sample 0",
      subtitle: "test Recent subtitle 0",
      text: "sample Recent body text 0",
      url: "#",
      date_posted: "2022-08-20",
    },
    {
      id: 5,
      title: "Recent sample 1",
      subtitle: "test Recent subtitle 1",
      text: "sample Recent body text 1",
      url: "#",
      date_posted: "2022-08-20",
    },
  ];

  return (
    <div className="faqs">
      <div className="faqs-bx">
        <h4>Top FAQs</h4>
        <div className="top-faqs">
          <Row>
            {top_faqs.map((faq, idx) => (
              <Col className="top-faq" key={idx}>
                <h3>{faq.title}</h3>
                <h6>{faq.subtitle}</h6>
                <button onClick={() => setTopDetails(!topDetails)}>
                  Read More
                </button>
                {topDetails ? <p>{faq.text}</p> : null}
                <p>{faq.date_posted}</p>
              </Col>
            ))}
          </Row>
        </div>
        <h4>Most recent faqs</h4>
        <div className="recent-faqs">
          {recent_faqs.map((faq, idx) => (
            <Accordion className="recent-faq" flush>
              <Accordion.Item eventKey={idx}>
                <Accordion.Header>
                  <h3>{faq.title}</h3>
                </Accordion.Header>
                <Accordion.Body>
                  <p>{faq.subtitle}</p>
                  <p>{faq.date_posted}</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))}
          <a href={`faqs/list`}>
            <button className="btn-all">All</button>
          </a>
        </div>
      </div>
    </div>
  );
}