import React from "react";
import {Link} from "react-router-dom";

export default function Header() {

    return(
        <div className="header">
            <div className="col-9 header-text">
            <span>SPONSORED Organization Highlight</span>
            </div>
            <div className="col-2 header-btns">
        <button className="btn btn-subscribe">
          <Link to="/about">Subscribe</Link></button>
        <button className="btn btn-support"><Link to="/resources">Support</Link></button>
      </div>
        </div>
        
    )
}