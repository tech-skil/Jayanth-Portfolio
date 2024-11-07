import React, { useState, useEffect } from 'react'; // Added useState and useEffect
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Home from "./Components/Home";
import ProjectList from "./Components/Pages/ProjectList";
import Navbar from './Components/Pages/Navbar';
import Footer from './Components/Pages/Footer';
import Education from './Components/Pages/ProfessionalDashboard/Education';
import Skills from './Components/Pages/Skills';
import AchievementShowcase from './Components/Pages/AchievementShowcase';
// import AchievementCarousel from './Components/Pages/AchievementCarousel';
import ContactForm from './Components/Pages/ContactForm';
import Loader from './assets/images/loader.gif';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Function to check if all images and videos have loaded
    const areAllMediaLoaded = () => {
      const images = document.images;
      for (let i = 0; i < images.length; i++) {
        if (!images[i].complete) {
          return false;
        }
      }
  
      const videos = document.getElementsByTagName('video');
      for (let i = 0; i < videos.length; i++) {
        if (videos[i].readyState < 4) { // readyState 4 means the video is fully loaded
          return false;
        }
      }
  
      return true;
    };
  
    // Set the loading state based on whether all images and videos have loaded
    const interval = setInterval(() => {
      if (areAllMediaLoaded()) {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 100);
  
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center h-screen'>
        <img src={Loader} alt="Loading..." /> 
        </div>
      ) : (
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
                  <ContactForm />
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
            <Route path="/home/achievementshowcase" element={<AchievementShowcase />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
