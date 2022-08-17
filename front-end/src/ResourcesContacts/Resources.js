import React from "react";
import { Link } from "react-router-dom";
import ResourceBlock from "./ResourceBlock";
import Events from "./Events";

export default function Resources() {
  return (
    <div className="resources">
    <h4>Downloadables Section</h4>
    <div className="row downloadables-block text-white">
      <div className="col">
        <img
          className="download-img"
          src={require("../assets/img/GYS_logo.jpg")}
          alt="downloadable-preview"
          width={"25%"}
          onClick={() => {
            window.open(
              "https://docs.google.com/document/d/1eoWdME3KAClw2CptXYP7AZFrUJCTjbiV-tPnoUO4-Gc/edit?usp=sharing"
            );
          }}
        />
        <h3>Downloadable 1</h3>
        <p>Click image for Google Docs preview</p>
      </div>
      <div className="col">
        <img
          className="download-img"
          src={require("../assets/img/GYS_logo.jpg")}
          alt="downloadable-preview"
          width={"25%"}
          onClick={() => {
            window.open(
              "https://docs.google.com/document/d/1eoWdME3KAClw2CptXYP7AZFrUJCTjbiV-tPnoUO4-Gc/edit?usp=sharing"
            );
          }}
        />
        <h3>Downloadable 2</h3>
        <p>Click image for Google Docs preview</p>
      </div>
    </div>
    <ResourceBlock />
    <Events />
  </div>
  );
}
