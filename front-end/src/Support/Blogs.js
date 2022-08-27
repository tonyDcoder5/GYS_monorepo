import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Blogs() {

    const top_blogs = [
        {
            id: 0,
            title: "sample 0",
            subtitle: "test subtitle 0",
            text: "sample body text 0",
            url: "#",
            date_posted: "2022-08-20"

        },
        {
            id: 1,
            title: "sample 1",
            subtitle: "test subtitle 1",
            text: "sample body text 1",
            url: "#",
            date_posted: "2022-08-20"

        },
    ]

    const recent_blogs = [
      {
          id: 0,
          title: "Recent sample 0",
          subtitle: "test Recent subtitle 0",
          text: "sample Recent body text 0",
          url: "#",
          date_posted: "2022-08-20"

      },
      {
          id: 1,
          title: "Recent sample 1",
          subtitle: "test Recent subtitle 1",
          text: "sample Recent body text 1",
          url: "#",
          date_posted: "2022-08-20"

      },
      {
        id: 2,
        title: "Recent sample 0",
        subtitle: "test Recent subtitle 0",
        text: "sample Recent body text 0",
        url: "#",
        date_posted: "2022-08-20"

    },
    {
        id: 3,
        title: "Recent sample 1",
        subtitle: "test Recent subtitle 1",
        text: "sample Recent body text 1",
        url: "#",
        date_posted: "2022-08-20"

    },
    {
      id: 4,
      title: "Recent sample 0",
      subtitle: "test Recent subtitle 0",
      text: "sample Recent body text 0",
      url: "#",
      date_posted: "2022-08-20"

  },
  {
      id: 5,
      title: "Recent sample 1",
      subtitle: "test Recent subtitle 1",
      text: "sample Recent body text 1",
      url: "#",
      date_posted: "2022-08-20"

  },
  ]

  return (
    <div className="blogs">
      <div className="blogs-bx">
        <h4>Top Blogs</h4>
        <div className="top-blogs">
            <Row>
              {top_blogs.map((blog, idx) => (
                <Col className="top-blog" key={idx}>
                    <h3><a href={`blog/${blog.id}`}>{blog.title}</a></h3>
                    <h6>{blog.subtitle}</h6>
                    <button><a href={`blog/${blog.id}`}>Read More</a></button>
                    <p>{blog.date_posted}</p>
                </Col>
              ))}
            </Row>
        </div>
        <h4>Most recent blogs</h4>
        <div className="recent-blogs">
          {recent_blogs.map((blog, idx) => (
                <div className="recent-blog" key={idx}>
                    <h3><a href={`blog/${blog.id}`}>{blog.title}</a></h3>
                    <p>{blog.subtitle}</p>
                    <p>{blog.date_posted}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
