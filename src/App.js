import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import "./index.css";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
