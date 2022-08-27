import React from "react";
import { Link } from "react-router-dom";
import SupportGYS from "./AboutSupport";
import Values from "./Values";

export default function AboutUs() {
  return (
    <div className="about">
      <Values />
      <SupportGYS />
    </div>
  );
}
