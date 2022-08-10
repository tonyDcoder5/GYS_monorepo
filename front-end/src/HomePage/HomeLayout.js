import React from "react";
import Header from "./Header";
import Mission from "./Mission";
import Roadmap from "./Roadmap";

export default function HomeLayout() {

    return(
        <div className="home">
            <Header />
            <div className="container home-layout">
            
            <Mission />
            <Roadmap />
            </div>
        </div>

    )
}