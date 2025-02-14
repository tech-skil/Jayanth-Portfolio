import React from "react";
import { useRef, useEffect } from "react";
import ProfileImage from "../../assets/images/Profile-b.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import BackgroundAnimation from "../Animation/BackgroundAnimation";

const Introduction = () => {
  const dissectionRef = useRef(null);
  useEffect(() => {
    const dissection = dissectionRef.current;
    if (dissection) {
      dissection.classList.remove("translate-y-full");
    }
  }, []);
  const backgroundImage = ProfileImage;

  return (
    <div>
      <div
        className=" container mx-auto flex flex-col-reverse sm:flex-row sm:flex  sm:justify-evenly sm:drop-shadow-lg   transition duration-300 transform translate-y-full"
        ref={dissectionRef}
      >
        <BackgroundAnimation />
        <div className=" text-stone-950  space-y-4 sm:space-y-1 md:space-5-1 lg:space-y-4  lg:mt-0 lg:p-24  p-8  sm:mt-5 md:mt-10  w-full  md:w-max md:pl-14  pr-8 font-sans  ">
          <p className="  text-3xl  font-bold text-wrap:wrap; / sm:text-lg lg:text-xl xl:text-2xl">
            Hello It's me{" "}
          </p>

          <h1 className=" text-5xl font-black text-wrap: wrap; / sm:text-2xl lg:text-3xl xl:text-4xl">
            Jayanth B R
          </h1>

          <h2 className="text-3xl font-bold  / sm:text-lg lg:text-4xl xl:text-5xl">
            {" "}
            <span className="italic text-purple-700 font-bold">
              Persuing{" "}
            </span>{" "}
            CS Engineering{" "}
          </h2>
          <h3 className=" mt-3 text-2xl font-bold text-wrap: wrap; / sm:text-lg lg:text-xl xl:text-2xl">
            And Front-end to{" "}
            <span className="italic text-purple-700 font-bold">
              Full-stack: Leveling up my dev skills!
            </span>
          </h3>
          <p className=" flex-wrap max-lg: max-w-xl pt-2 mt-2  sm:text-sm  lg:text-base xl:text-lg">
            Passionate about becoming a full-stack developer. Currently enrolled
            in CS studies and actively upskilling (front-end to back-end). Let's
            build something together!
          </p>
          <div className="    space-x-5">
            <button className="  bg-purple-700 px-6 text-white  rounded-lg py-2 hover:bg-purple-800 hover:shadow-lg hover:shadow-purple-600/50 transition duration-300 hover:text-white border-2 hover:border-purple-700  my-10 mx-4 sm:my-4 xl:my-10  md:my-5 lg:my-6">
              {" "}
              <Link to="/home/contactform">Hire Me</Link>
            </button>
            <Link
              to="/home/AchievementShowcase"
              className="border-purple-700 border-2 px-6 text-purple-700 rounded-lg py-1 m-2 lg:my-6 my-10 mx-4 hover:bg-purple-100 hover:shadow-lg hover:shadow-purple-600/60 transition duration-300 sm:my-4 xl:my-10 md:my-5"
            >
              Projects
            </Link>
          </div>
          <div className="space-x-6">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-purple-600  border-purple-700 border-2 p-1 rounded-full hover:text-purple-600 cursor-pointer   hover:shadow-lg hover:shadow-purple-600/50 "
            />

            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-purple-600 border-purple-700 border-2 p-1 rounded-full hover:text-purple-600 cursor-pointer mr-4   hover:shadow-lg hover:shadow-purple-600/50 "
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-purple-600 border-purple-700 border-2 p-1 rounded-full hover:text-purple-600 cursor-pointer mr-4  hover:shadow-lg hover:shadow-purple-600/50 "
            />
            {/* <FontAwesomeIcon
              icon={faHome}
              className="text-purple-600 hover:text-purple-800 mr-4"
            /> */}
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-purple-600 border-purple-700 border-2 p-1 rounded-full hover:text-purple-600 cursor-pointer  mr-4  hover:shadow-lg hover:shadow-purple-600/50 "
            />
          </div>
        </div>

        <div className=" sm:w-2/5   lg:py-28  w-full lg:w-max  pr-8  mt-0  ">
          {/* <div className="rounded-t-70-bl-30-tr-90-br-10 "/> */}

          <div
            className="border-2 mx-auto cursor-pointer  my-5 border-cyan-500 p-1 sm:mt-20 lg:mt-0 sm:p-2 w-fit h-fit"
            style={{
              borderRadius: "68% 32% 62% 38% / 35% 25% 75% 65% ",
            }}
          >
            <div
              className=" h-60 w-60 lg:h-80 lg:w-80 xl:h-96 xl:w-96 sm:w-56 sm:h-56  md:w-64 md:h-64  "
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // borderRadius: '34% 66% 80% 20% / 56% 63% 37% 44% ',borderLeftColor: 'pink',
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
      <hr />
    </div>
  );
};

export default Introduction;
