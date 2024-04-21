import "./assets/index.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RepoPage from "./Pages/RepoPage";
import { Routes, Route } from "react-router-dom";
import RepoDetails from "./components/RepoDetails"
import ErrorPage from "./Pages/ErrorrPage";

function App() {
  
  return (
    <>
      <div className="main-container">
        <Navbar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/repo-page" element={<RepoPage />} />
          <Route path="/repo-page/:id" element={<RepoDetails/>} />
          <Route path='*' element={<ErrorPage/>} />

        </Routes>
      </div>
    </>
  );
}

export default App;
