import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";
import ProjectList from "./Components/Pages/ProjectList";
import Navbar from './Components/Pages/Navbar';
import Footer from './Components/Pages/Footer';
import Education from './Components/Pages/ProfessionalDashboard/Education';
import Skills from './Components/Pages/Skills';
import AchievementShowcase from './Components/Pages/AchievementShowcase';
import ContactForm from './Components/Pages/ContactForm';

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
            path="/home/contactform"
            element={
              <>
                <Navbar />
                <ContactForm/>
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
          <Route path="/home/achievementshowcase" element={<AchievementShowcase/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
