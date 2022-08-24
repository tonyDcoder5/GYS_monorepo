import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomeLayout from "./HomePage/HomeLayout";
import AboutUs from "./About/AboutUs";
import Resources from "./Resources/Resources";
import Support from "./Support/Support";
import NotFound from "./components/NotFound";
import Contact from "./Support/Contact";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { listPrompts } from "./utils/api";
import UrgentSupport from "./Resources/UrgentSupport";
import Events from "./Support/Events";

export default function App() {
  const [prompts,setPrompts] = useState([]);
  const [promptsError,setPromptsError] = useState(null)
 
  useEffect( ()=>{
    const fetchResources = async ()=>{
      try{
        const abortController = new AbortController();
        const response = await listPrompts(abortController.signal);
        setPrompts(response)
        
      } catch (error){
        setPromptsError(error)
      }
    }
    fetchResources()
  },[])
  
  return (
    <Router>
      <div className="body">
        <Banner />
        <NavBar />
          <div>
          {/* <Header /> */}
          <Routes>
            <Route exact path="/" element={ <Navigate to="/home" />} />
            <Route path="/home" element={<HomeLayout prompts={prompts} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/urgent-resources" element={<UrgentSupport/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
