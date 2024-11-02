import React from 'react';
import Navbar from './Pages/Navbar';
import Introduction from './Pages/Introduction';
import Footer from './Pages/Footer';
import TechStackComponent from './Pages/TechStackComponent';
import ProjectShowcase from './Pages/ProjectShowcase';
import Self_Introduction from './Pages/SelfIntroduction';
import AchievementCarousel from './Pages/AchievementCarousel';
import CustomLineedCursor from './cuesorAnimation/MultiLlineRibbonsCursor';
import ScrollToTop from './Pages/ScrollToTop'; 
import stay_on_focused from "../assets/images/Stay_On_Focus.jpg";

const Home = () => {
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
      <Navbar/>
      <Introduction/>
      <Self_Introduction/>
      <TechStackComponent/>
      <ProjectShowcase/>
      <div className="relative container mx-auto w-full min-h-[50rem] overflow-hidden md:-top-[2rem] -top-[1rem] sm:-top-[1.5rem]">
        <div className="absolute w-full h-full top-0 left-0">
          <img
            src={stay_on_focused}
            alt="stay on focused"
            className="w-full h-full object-cover opacity-60 sm:object-contain md:object-cover"
          />
        </div>
      </div>
      <AchievementCarousel/>
      <Footer/>
      <ScrollToTop /> {/* Add this line */}
    </div>
  );
};

export default Home;