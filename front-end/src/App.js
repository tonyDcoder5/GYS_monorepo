import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomeLayout from "./HomePage/HomeLayout";
import AboutUs from "./AboutSupport/AboutUs";
import Resources from "./ResourcesContacts/Resources";

import "./App.css";
import Header from "./HomePage/Header";
import Banner from "./components/Banner";

export default function App() {
  return (
    <Router>
      <div className="body">
        <Banner />
        <NavBar />
        <div>
          <div>
          <Header />
          </div>
          <Routes>
            <Route exact path="/" element={ <Navigate to="/home" />} />
            <Route path="/home" element={<HomeLayout />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
