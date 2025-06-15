import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Navbar from "./Pages/Navbar";
import Introduction from "./Pages/Introduction";
import Footer from "./Pages/Footer";
import TechStackComponent from "./Pages/TechStackComponent";
import ProjectShowcase from "./Pages/ProjectShowcase";
import Self_Introduction from "./Pages/SelfIntroduction";
import AchievementCarousel from "./Pages/AchievementCarousel";
import CustomLineedCursor from "./cuesorAnimation/MultiLlineRibbonsCursor";
import ScrollToTop from "./Pages/ScrollToTop";
import Loader from "./Pages/Loding";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const areAllImagesLoaded = () => {
      const images = document.images;
      for (let i = 0; i < images.length; i++) {
        if (!images[i].complete) {
          return false;
        }
      }
      return true;
    };

    const interval = setInterval(() => {
      if (areAllImagesLoaded()) {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen bg-white dark:bg-[#0c1624] transition-colors duration-300`}
    >
      <CustomLineedCursor
        zIndex={10000}
        debug={false}
        friction={0.5}
        trails={20}
        size={isMobile ? 8 : 50}
        dampening={0.25}
        tension={0.98}
        backgroundColor={theme === "dark" ? "rgb(17,24,39)" : "rgb(8,5,16)"}
        className="!z-[9999]"
      />
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen bg-white dark:bg-[#0c1624]">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen transition-colors duration-300 ">
          <Navbar />
          <main className="flex-grow">
            <Introduction />
            <Self_Introduction />
            <TechStackComponent />
            <ProjectShowcase />
            <AchievementCarousel />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      )}
    </div>
  );
};

export default Home;
