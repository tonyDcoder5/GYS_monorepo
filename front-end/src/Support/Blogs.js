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
    ]

  return (
    <div className="blogs">
      <div className="blog-block">
        <h4>Top Blogs</h4>
        <div className="top-blogs">
            <Row xs={1} sm={2} md={2} className="blog-group">
              {blogs.map((blog, idx) => (
                <Col className="blog" key={idx}>
                    <h3>{blog.title}</h3>
                    <p>{blog.subtitle}</p>
                    <button><a href={`blog/${blog.id}`}>Read More</a></button>
                    <p>{blog.date_posted}</p>
                </Col>
              ))}
            </Row>
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
