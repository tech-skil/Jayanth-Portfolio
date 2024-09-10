import React, { useState, useEffect } from "react";
import bgVideo from "../assets/Video/Welcom page.mp4";
import bgImage from "../assets/images/bg.jpg";
import '../index.css';
import { Link } from "react-router-dom";

const Welcome = () => {
  const [videoError, setVideoError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const handleVideoError = () => {
    setVideoError(true);
  };

  useEffect(() => {
    setReloadKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <div className="text-6xl ">
      <div className="relative h-screen flex justify-center items-center">
        {videoError ? (
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={bgImage}
            alt="Background"
          />
        ) : (
          <video
            key={reloadKey}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            onError={handleVideoError}
          >
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className="absolute w-full h-full flex items-center justify-center p-4">
          <div className="relative w-full space-y-8 flex-col max-w-lg aspect-square rounded-full flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-lg border-2 border-white/20 animate-colorChange  shadow-[0_0_10px_rgba(255,255,255,1)]  border-pink-100 ">
            <h1 className="text-center kalam-bold font-black w-1/2 text-purple-100 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              Welcome to my portfolio
            </h1>

            <button class="relative inline-flex pacifico-regular items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0 sm:text-2xl md:text-3xl lg:text-4xl">
              <Link to="home">View</Link>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
