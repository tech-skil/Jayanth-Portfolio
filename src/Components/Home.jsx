import React, { useState, useEffect } from 'react';
import Navbar from './Pages/Navbar';
import Introduction from './Pages/Introduction';
import Footer from './Pages/Footer';
import TechStackComponent from './Pages/TechStackComponent';
import ProjectShowcase from './Pages/ProjectShowcase';
import Self_Introduction from './Pages/SelfIntroduction';
import AchievementCarousel from './Pages/AchievementCarousel';
import CustomLineedCursor from './cuesorAnimation/MultiLlineRibbonsCursor';
import ScrollToTop from './Pages/ScrollToTop';
import Loader from './Pages/Loding'; // Add the Loader component

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to check if all images have loaded
    const areAllImagesLoaded = () => {
      const images = document.images;
      for (let i = 0; i < images.length; i++) {
        if (!images[i].complete) {
          return false;
        }
      }
      return true;
    };

    // Set the loading state based on whether all images have loaded
    const interval = setInterval(() => {
      if (areAllImagesLoaded()) {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <CustomLineedCursor
        zIndex={10000}
        debug={false}
        friction={0.5}
        trails={20}
        size={50}
        dampening={0.25}
        tension={0.98}
        backgroundColor="rgb(8,5,16)"
      />
      {isLoading ? (
        <Loader /> // Display the Loader component if isLoading is true
      ) : (
        // Render the rest of the components when isLoading is false
        <>
          <Navbar />
          <Introduction />
          <Self_Introduction />
          <TechStackComponent />
          <ProjectShowcase />
          <AchievementCarousel />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
};

export default Home;