import React from "react";
import { useNavigate } from "react-router-dom";

export default function FAQPage() {
  const history = useNavigate();

  const faqs = [
    {
      id: 0,
      title: "test title",
      subtitle: "test subtitle",
      link: "#",
      date: "2020-08-27",
    },
    {
      id: 1,
      title: "test title 1",
      subtitle: "test subtitle 1",
      link: "#",
      date: "2020-08-27",
    },
    {
      id: 2,
      title: "test title 2",
      subtitle: "test subtitle 2",
      link: "#",
      date: "2020-08-27",
    },
    {
      id: 3,
      title: "test title 3",
      subtitle: "test subtitle 3",
      link: "#",
      date: "2020-08-27",
    },
  ];

  const comments = [
    {
      id: 0,
      text: "example text",
      date: "example date",
    },
    {
      id: 1,
      text: "example text",
      date: "example date",
    },
    {
      id: 2,
      text: "example text",
      date: "example date",
    },
  ];

  return (
    <div className="faq">
      <button
        className="btn btn-secondary"
        onClick={() => {
          history("/faqs");
        }}
      >
        Back
      </button>

      <div className="faq-header">
        <section>
          <h3>Block - FAQ Header OR Media</h3>
          {/* <img src={logo} width="25%" alt="GYS logo/Home Button" /> */}
        </section>
      </div>
      <div className="faq-content">
        <section>
          {faqs.map((faq, idx) => {
            return (
              <div className="faq-row">
                <h3>{faq.title}</h3>
                <span>
                  <p>{faq.subtitle}</p>
                  <p>{faq.date}</p>
                </span>
              </div>
            );
          })}
        </section>
      </div>
      <div className="faq-block">
        <section>
          <h5>Comments/Resources Section?</h5>
          <ul>
            {comments.map((comment, idx) => {
              return (
                <li>
                  <p>{comment.text}</p>
                  <h6>{comment.date}</h6>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
