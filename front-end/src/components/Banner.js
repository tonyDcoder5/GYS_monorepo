import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner help-banner">
      <div className="banner-text">
        <a href="resources">Tips & Resources</a>
      </div>
      <div className="banner-links">
        In crisis? <a href="resources">Get help.</a>
      </div>
      <div className="banner-btns">
        <span>Suicide Hotline: <a href="https://988lifeline.org/">Dial 988</a></span>
      </div>
    </div>
  );
}
