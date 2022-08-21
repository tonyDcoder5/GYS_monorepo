import React from "react";
import { Link } from "react-router-dom";

export default function Header({prompts}) {
  
  const sectionName = "header-block";
  console.log(prompts[{prompt_id: "1"}]);
  

  return (
    <div className="header">
      <h6>SPONSORED Organization Highlight</h6>
      <div className="row header-block m-3">
        <div className="col-4">Picture</div>
        <div className="col-7">Text
        </div>
      </div>
    </div>
  );
}
