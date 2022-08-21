import React from "react";
import { Link } from "react-router-dom";

export default function Support() {
  const prompts = [
    {
      id: 0,
      icon: require("../assets/img/GYS_logo.jpg"),
      title: "Sample Title",
      text: "sample text",
      url: "#",
    },
    {
      id: 0,
      icon: require("../assets/img/GYS_logo.jpg"),
      title: "Sample Title",
      text: "sample text",
      url: "#",
    },
    {
      id: 0,
      icon: require("../assets/img/GYS_logo.jpg"),
      title: "Sample Title",
      text: "sample text",
      url: "#",
    },
    {
      id: 0,
      icon: require("../assets/img/GYS_logo.jpg"),
      title: "Sample Title",
      text: "sample text",
      url: "#",
    },
  ];

  return (
    <div className="support">
      <h4>Support Section</h4>
      {prompts.map((prompt, idx) => {
        return (
          <div className="row support-block">
            <h4>{prompt.title}</h4>
            <div className="col">
              <img src={prompt.icon} alt={prompt.title} width={"75%"} />
            </div>
            <div className="col">              
              <h6>Block {idx + 1}</h6>
              <p>{prompt.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
