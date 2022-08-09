import React from "react";
import Header from "./Header";
import Mission from "./Mission";
import Roadmap from "./Roadmap";

export default function HomeLayout() {

    return(
        <div>
            <h2>HOME PAGE LAYOUT</h2>
            <div className="container home-layout">
            <Header />
            <Mission />
            <Roadmap />
            </div>
        </div>

    )
}