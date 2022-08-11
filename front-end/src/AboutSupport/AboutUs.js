import React from "react";
import { Link } from "react-router-dom";
import Support from "./Support";


export default function AboutUs() {

    return(
      <div className="container about">
        <h2>About Page</h2>
            <h4>About Us Section</h4>
            <div className="roadmap-block">
            <h6>Block 1- About us Section</h6>
            </div>
            <div className="roadmap-block">
            <h6>Block 2- About us Section</h6>
            </div>
            <div className="roadmap-block">
            <h6>Block 3- About us Section</h6>
        </div>
        <Support />
      </div>
    )
}

