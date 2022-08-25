import React, { useState } from "react";
// import Calendar from 'react-calendar';
import { Link } from "react-router-dom";

export default function Downloadables() {
  const downloads = [
    {
      id: 0,
      title: "test download",
      icon: require("../assets/img/GYS_logo.jpg"),
      url: "https://docs.google.com/document/d/1eoWdME3KAClw2CptXYP7AZFrUJCTjbiV-tPnoUO4-Gc/edit?usp=sharing",
      desc: "Short description of download, with instructions on how",
      width: "25%",
    },
    {
      id: 1,
      title: "We Got Your Back Postcard",
      icon: require("../assets/img/gys-postcard.png"),
      url: "https://drive.google.com/file/d/10IL-8VEkQ5vT6LZnx424Vi_2sZp7f0BZ/view?usp=sharing",
      desc: "Share with your friends and family!",
      width: "50%",
    },
  ];

  const display = downloads.map((download, idx) => {
    return (
      <div className="col download" key={idx}>
        <img
          className="download-img m-3"
          src={download.icon}
          alt={download.title}
          width={download.width}
          onClick={() => {
            window.open(download.url);
          }}
        />
        <h3>{download.title}</h3>
        <p>{download.desc}</p>
      </div>
    );
  });

  return (
    <div>
      <div className="row downloadables-block text-white">
        <h4>Downloadables</h4>
        {display}
      </div>
    </div>
  );
}
