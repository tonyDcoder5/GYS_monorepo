import React from "react";
import {useNavigate} from "react-router-dom";
const logo = require("../assets/img/GYS_logo.jpg")

export default function BlogPage() {

  const history = useNavigate();

  return (
    <div className="blog">     
    <button className="btn btn-secondary" onClick={()=>{
      history('/blog')
    }}>Back</button>
      
      <div className="blog-header">
        <h3>Block - Blog Header & Media</h3>
            <img src={logo} width="25%" alt="GYS logo/Home Button" />
      </div>
      <div className="blog-content">
        <h3>SubHeading</h3>
        <p>Text body</p>
      </div>
      <div className="blog-block">
        <h5>Comments/Resources Section?</h5>
      </div>
    </div>
  );
}
