import React, { useState } from "react";
import { useTheme } from "next-themes";
import Marquee from "react-fast-marquee";
import {
  FaDatabase,
  FaFileCode,
  FaPython,
  FaJava,
  FaHashtag,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

const techStack = [
  { name: "MongoDB", icon: FaDatabase, color: "#4DB33D" },
  { name: "SQL", icon: FaFileCode, color: "#F29111" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "C#", icon: FaHashtag, color: "#68217A" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#181717",
    darkColor: "#ffffff", // Add dark mode color
  },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
];

const TechStackComponent = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const { theme } = useTheme();

  return (
    <>
      <div className="w-full p-8 sm:p-8 md:p-14 m-0 lg:p-24 xl:p-24 overflow-hidden container mx-auto">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-purple-700 dark:text-purple-400 mb-2 sm:mb-4 transition-colors duration-300">
          Tech Stack
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg xl:text-xl transition-colors duration-300">
          An overview of the technologies and platforms I excel in
        </p>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          className="py-4"
        >
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center transition-all duration-300 mx-4 sm:mx-6 lg:mx-8 xl:mx-10 ${
                hoveredTech === tech.name ? "scale-110 glow-effect" : ""
              }`}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <tech.icon
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
                style={{
                  color:
                    theme === "dark" && tech.darkColor
                      ? tech.darkColor
                      : tech.color,
                  transition: "color 0.3s",
                }}
              />
              <span className="mt-2 text-gray-700 dark:text-gray-200 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
    </>
  );
};

export default TechStackComponent;
