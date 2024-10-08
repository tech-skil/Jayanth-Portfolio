import React from 'react';
import waveSvg from '../../assets/images/wave1.svg';

const Footer = () => {
  return (
    <div className="footer container mx-auto sm:drop-shadow-lg flex justify-center h-full w-full">

    <footer className="mb-0 lg:max-w-[110rem] 2xl:max-w-[170rem] xl:max-w-[100rem]  w-full">
      <img
        src={waveSvg}
        alt="wave"
        className="top-[-10rem]  w-full h-auto  " 
        style={{ zIndex: 1 }} 
      />
      
      <div className=" h-24 sm:h-32 md:h-40 lg:h-28 bg-gradient-to-r from-[#9900EF] to-[#90d4ff]">
<div>
  Footer content
</div>
      </div>
      <div
        className="relative bg-purple-950 p-4 text-white text-center"
        style={{ zIndex: 2 }} 
      >
        <p>Your footer content goes here</p>
      </div>
    </footer>
    </div>

  );
};

export default Footer;
