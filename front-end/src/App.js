import React, {useState,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomeLayout from "./HomePage/HomeLayout";
import AboutUs from "./About/AboutUs";
import Resources from "./Resources/Layout";
import Support from "./Support/Support";
import NotFound from "./components/NotFound";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { listPrompts } from "./utils/api";
import UrgentSupport from "./Resources/UrgentSupport";

export default function App() {
  const [prompts,setPrompts] = useState(null);
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
          <div>
          <Header />
          <Routes>
            <Route exact path="/" element={ <Navigate to="/home" />} />
            <Route path="/home" element={<HomeLayout />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/support" element={<Support />} />
            <Route path="/urgent-resources" element={<UrgentSupport/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
