import React from "react";
import { useRef, useEffect } from "react";
import ProfileImage from "../../assets/images/Profile-b.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import CustomLineedCursor from "../cuesorAnimation/MultiLlineRibbonsCursor";

import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import BackgroundAnimation from "../Animation/BackgroundAnimation";

const Introduction = () => {
  const { theme } = useTheme();
  const dissectionRef = useRef(null);
  useEffect(() => {
    const dissection = dissectionRef.current;
    if (dissection) {
      dissection.classList.remove("translate-y-full");
    }
  }, []);
  const backgroundImage = ProfileImage;

  return (
    <div className="relative">
      {" "}
      <div className="relative bg-slate-100 z-10 dark:bg-gray-900 transition-colors duration-300">
        <div
          className="container mx-auto flex flex-col-reverse sm:flex-row sm:flex sm:justify-evenly sm:drop-shadow-lg transition duration-300 transform translate-y-full relative z-20" // Add relative and z-20
          ref={dissectionRef}
        >
          <CustomLineedCursor
            zIndex={9999}
            debug={false}
            friction={0.5}
            trails={20}
            size={50}
            dampening={0.25}
            tension={0.98}
            backgroundColor="rgb(8,5,16)"
            className="!z-[9999]"
          />

          <BackgroundAnimation />
          <div className="text-stone-950 dark:text-white space-y-4 sm:space-y-1 md:space-5-1 lg:space-y-4 lg:mt-0 lg:p-24 p-8 sm:mt-5 md:mt-10 w-full md:w-max md:pl-14 pr-8 font-sans">
            <p className="text-3xl font-bold text-wrap:wrap; / sm:text-lg lg:text-xl xl:text-2xl">
              Hello It's me{" "}
            </p>

            <h1 className="text-5xl font-black text-wrap: wrap; / sm:text-2xl lg:text-3xl xl:text-4xl dark:text-white">
              Jayanth B R
            </h1>
            <h2 className="text-3xl font-bold / sm:text-lg lg:text-4xl xl:text-5xl">
              <span className="italic text-purple-700 dark:text-purple-400 font-bold">
                Completed{" "}
              </span>
              CSE Engineering
            </h2>
            <h3 className="mt-3 text-2xl font-bold text-wrap: wrap; / sm:text-lg lg:text-xl xl:text-2xl">
              Now exploring{" "}
              <span className="italic text-purple-700 dark:text-purple-400 font-bold">
                AI & Full-stack: Creating Tech-driven solutions!
              </span>
            </h3>

            <p className="flex-wrap max-lg: max-w-xl pt-2 mt-2 sm:text-sm lg:text-base xl:text-lg dark:text-gray-300">
              Passionate about AI and full-stack development. Completed CS
              degree and currently interning in AI/Data team at Quinnox . Let’s
              create smart solutions using tech together!
            </p>
            <div className="space-x-5">
              <button className="bg-purple-700 dark:bg-purple-600 px-6 text-white rounded-lg py-2 hover:bg-purple-800 dark:hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/50 transition duration-300 hover:text-white border-2 hover:border-purple-700 dark:hover:border-purple-500 my-10 mx-4 sm:my-4 xl:my-10 md:my-5 lg:my-6">
                <Link to="/home/contactform">Hire Me</Link>
              </button>
              <Link
                to="/home/AchievementShowcase"
                className="border-purple-700 dark:border-purple-500 border-2 px-6 text-purple-700 dark:text-purple-400 rounded-lg py-1 m-2 lg:my-6 my-10 mx-4 hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:shadow-lg hover:shadow-purple-600/60 transition duration-300 sm:my-4 xl:my-10 md:my-5"
              >
                Projects
              </Link>
            </div>
            <div className="space-x-6">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-purple-600 dark:text-purple-400 border-purple-700 dark:border-purple-500 border-2 p-1 rounded-full hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer hover:shadow-lg hover:shadow-purple-600/50"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-purple-600 dark:text-purple-400 border-purple-700 dark:border-purple-500 border-2 p-1 rounded-full hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer mr-4 hover:shadow-lg hover:shadow-purple-600/50"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-purple-600 dark:text-purple-400 border-purple-700 dark:border-purple-500 border-2 p-1 rounded-full hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer mr-4 hover:shadow-lg hover:shadow-purple-600/50"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-purple-600 dark:text-purple-400 border-purple-700 dark:border-purple-500 border-2 p-1 rounded-full hover:text-purple-600 dark:hover:text-purple-300 cursor-pointer mr-4 hover:shadow-lg hover:shadow-purple-600/50"
              />
            </div>
          </div>

          <div className="sm:w-2/5 lg:py-28 w-full lg:w-max pr-8 mt-0">
            <div
              className="border-2 mx-auto cursor-pointer my-5 border-cyan-500 dark:border-cyan-400 p-1 sm:mt-20 lg:mt-0 sm:p-2 w-fit h-fit"
              style={{
                borderRadius: "68% 32% 62% 38% / 35% 25% 75% 65%",
              }}
            >
              <div
                className="h-60 w-60 lg:h-80 lg:w-80 xl:h-96 xl:w-96 sm:w-56 sm:h-56 md:w-64 md:h-64"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "68% 32% 62% 38% / 35% 25% 75% 65%",
                  borderLeftColor: "pink",
                  borderTopColor: "pink",
                  borderBottomColor: "blue",
                  borderRightColor: "blue",
                }}
              ></div>
            </div>
          </div>
        </div>
        <hr className="border-gray-200 dark:border-gray-700" />
      </div>
    </div>
  );
};

export default Introduction;
