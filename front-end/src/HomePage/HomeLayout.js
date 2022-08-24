import React from "react";
import Header from "../components/Header";
import Mission from "./Mission";
import Roadmap from "./Roadmap";
import Events from "../Support/Events"

export default function HomeLayout({prompts = []}) {

    const missionPrompts = prompts.filter((prompt)=> prompt.section_name.includes("header"));

    const roadmapPrompts = prompts.filter((prompt)=> prompt.section_name.includes("header"));

    return(
        <div className="home">
            <div className="home-layout">
            <Mission prompts={missionPrompts} />
            <Roadmap />
            <Events />
            </div>
        </div>

    )
}