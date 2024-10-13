import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";
import ProjectList from "./Components/Pages/ProjectList";
import Navbar from './Components/Pages/Navbar';
import Footer from './Components/Pages/Footer';
import Education from './Components/Pages/Education';
import Skills from './Components/Pages/Skills';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="home" element={<Home />} />
          <Route
            path="/home/projects"
            element={
              <>
                <Navbar />
                <ProjectList />
                <Footer />
              </>
            }
          />
          <Route
            path="/home/education"
            element={
              <>
                <Navbar />
                <Education />
                <Footer />
              </>
            }
          />
          <Route
            path="/home/skills"
            element={
              <>
                <Navbar />
                <Skills />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
