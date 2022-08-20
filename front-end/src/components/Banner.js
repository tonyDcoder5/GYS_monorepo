import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="banner help-banner">
      <div className="banner-text">
        <a href="resources">Tips & Resources</a>
      </div>
      <div className="banner-links">
        In crisis? <a href="urgent-resources">Seek help.</a>
      </div>
      <div className="banner-btns">
        <span>National Crisis Hotline: <a href="https://988lifeline.org/" target="_blank">Dial 988</a></span>
      </div>
    </div>
  );
}
