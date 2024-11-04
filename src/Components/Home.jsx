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

      <AchievementCarousel/>
      <Footer/>
      <ScrollToTop /> {/* Add this line */}
    </div>
  );
};

export default Home;