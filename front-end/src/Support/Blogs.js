import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Blogs() {

    const blogs = [
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
        {
            id: 2,
            title: "sample 2",
            subtitle: "test subtitle 2",
            text: "sample body text 2",
            url: "#",
            date_posted: "2022-08-20"

        },
        {
            id: 3,
            title: "sample 3",
            subtitle: "test subtitle 3",
            text: "sample body text 3",
            url: "#",
            date_posted: "2022-08-20"

        },
    ]

  return (
    <div className="blog">
      <h4>BLOGS SECTION</h4>
      <div className="blog-block">
        <h6>Block - Top Blog Section</h6>
        <div className="top-blogs">
          <div>              
            <Row xs={1} sm={2} md={2} className="icon-group g-4">
              {blogs.map((blog, idx) => (
                <Col key={idx}>
                    <h3>{blog.title}</h3>
                    <p>{blog.subtitle}</p>
                    <button><a href={`blog/${blog.id}`}>Read More</a></button>
                    <p>{blog.date_posted}</p>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <h6>Most recent blogs</h6>
        <div className="recent-blogs">
          <div>              
            Recent Blogs
          </div>
        </div>
      </div>
    </div>
  );
}
