import React from "react";
import Header from "../components/Header";
import Mission from "./Mission";
import Roadmap from "./Roadmap";

export default function HomeLayout() {

    return(
        <div className="home">
            <div className="home-layout">
            <Mission />
            <Roadmap />
            </div>
        </div>

    )
}