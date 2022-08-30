import React from "react";
import { Link } from "react-router-dom";
import SupportGYS from "./AboutSupport";
import AboutUs from "./AboutUs";

export default function AboutLayout({prompts=[]}) {

  const aboutUsPrompts = prompts.filter((prompt)=> prompt.section_name.includes("why", "who", "values"));

  const supportPrompts = prompts.filter((prompt)=> prompt.section_name.includes("support"));

  // console.log(aboutUsPrompts, supportPrompts);

  return (
    <div className="about">
      <AboutUs prompts={aboutUsPrompts} />
      <SupportGYS prompts={supportPrompts} />
    </div>
  );
}
