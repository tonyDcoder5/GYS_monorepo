import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomeLayout from "./HomePage/HomeLayout";
import AboutUs from "./AboutSupport/AboutUs";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div>
          <HomeLayout />
          {/* <Routes>
          <Route path="/">
            <HomeLayout />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
        </Routes> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}
