import React from "react"; 
import { Routes, Route, BrowserRouter } from "react-router-dom";  
import Home from "./pages/Home";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import About from "./pages/About";
import Support from "./pages/Support";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />  
        <Route exact path="/about" element={<About />} />  
        <Route exact path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}
