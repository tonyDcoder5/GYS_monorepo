import React from "react";
import {Link} from "react-router-dom";

export default function Header() {

    return(
        <div className="header row">
            <div className="col-7 banner-text">
            <span>Thank you message & special invite for veterans</span>
            </div>
            <div className="col-4 banner-btns">
        <button className="btn btn-subscribe">
          <Link to="/about">Subscribe</Link></button>
        <button className="btn btn-support"><Link to="/resources">Support</Link></button>
      </div>
        </div>
        
    )
}