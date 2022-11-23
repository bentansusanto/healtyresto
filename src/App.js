import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Footer from "./Footer/Footer";
import Homepage from "./Homepage/Homepage";
import "./index.css";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
