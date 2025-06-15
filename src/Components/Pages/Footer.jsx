import React from "react";
import waveSvg from "../../assets/images/wave1.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer  relative container mx-auto sm:drop-shadow-lg flex justify-center h-full w-full dark:bg-transparent ">
      <footer className="mb-0 lg:max-w-[110rem] 2xl:max-w-[170rem] xl:max-w-[100rem] w-full ">
        <img
          src={waveSvg}
          alt="wave"
          className="w-full lg:-mb-28 md:-mb-20 -mb-10 -z-10 h-auto dark:bg-transparent"
          style={{ zIndex: 1 }}
        />

        <div className="relative z-20 h-auto py-12 bg-gradient-to-r  from-[#9900EF] to-[#90d4ff]">
          <div className="container mx-auto px-4 text-white  flex flex-col sm:flex-row sm:justify-evenly">
            <div className="flex items-center">
              <h1 className="text-3xl sm:text-2 xl font-bold mb-8 text-center  ">
                Let's build from here!
              </h1>
            </div>
            <div className="grid sm:space-x-8 grid-cols-1  sm:ml-4 sm:grid-cols-3 lg:grid-cols-3 gap">
              <div>
                <h2 className="font-bold text-xl mb-4">Projects</h2>
                <ul className="space-y-2 ">
                  <li className="sm:hover:underline  cursor-pointer">
                    Tsukiwa
                  </li>
                  <li className="sm:hover:underline  cursor-pointer">
                    Realpop
                  </li>
                  <li className="sm:hover:underline  cursor-pointer">
                    Student Portal App
                  </li>
                  <li className="sm:hover:underline  cursor-pointer">
                    Apes Together Str...
                  </li>
                  <li className="sm:hover:underline  cursor-pointer">
                    Interactive Chatb...
                  </li>
                  <li className="sm:hover:underline  cursor-pointer">
                    Sassy CSS
                  </li>
                  <li className="sm:hover:underline  cursor-pointer">
                    Kamote School Ad...
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold text-xl mb-4">Connect</h2>
                <ul className="space-y-2">
                  <li className="sm:hover:underline  cursor-pointer">
                    AniList
                  </li>
                  <li className="sm:hover:underline  cursor-pointer">
                    Facebook
                  </li>
                  <li className="sm:hover:underline  cursor-pointer">
                    Instagram
                  </li>
                  <li className="sm:hover:underline  cursor-pointer">GitHub</li>
                  <li className="sm:hover:underline  cursor-pointer">
                    Twitter X
                  </li>
                  <li className="sm:hover:underline  cursor-pointer">Reddit</li>
                  <li className="sm:hover:underline  cursor-pointer">
                    YouTube
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold text-xl mb-4">Navigate</h2>
                <ul className="space-y-2">
                  <li className="sm:hover:underline  cursor-pointer">Home</li>
                  <li className="sm:hover:underline  cursor-pointer">About</li>
                  <li className="sm:hover:underline  cursor-pointer">
                    Projects
                  </li>
                  <li className="sm:hover:underline  cursor-pointer">
                    Timeline
                  </li>
                  <li className="sm:hover:underline  cursor-pointer">More</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative bg-purple-950 py-6 px-4 text-white text-center"
          style={{ zIndex: 2 }}
        >
          <p className="text-sm">&copy; {currentYear} Jayanth Banglore.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
