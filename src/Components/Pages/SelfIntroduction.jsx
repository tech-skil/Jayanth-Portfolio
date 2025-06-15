import React from "react";
import { useTheme } from "next-themes";
import img from "../../assets/images/Self_intro2.jpg";
import selfIntro from "../../assets/images/selfIntroBG.jpg";
import CustomLineedCursor from "../cuesorAnimation/MultiLlineRibbonsCursor";

const SelfIntroduction = () => {
  const { theme } = useTheme();
  const profileData = {
    name: "Jayanth",
    education:
      "Completed CSE degree from Sri Venkateshwara College of Engineering, Bangalore.",
    interests:
      "My field of interests are deep learning, AI/ML, and generative AI.",
    experience:
      "Currently working as a Business Associate Intern in the AI and Data team at Quinnox for the past 4 months. I also have solid knowledge in MERN stack and love building full stack applications.",
    writing:
      "Apart from development, I enjoy exploring the latest in AI and creating smart solutions using data.",
  };

  return (
    <>
      <div className="hidden sm:block md:max-h-screen sm:max-h-screen lg:min-h-0 w-full bg-transparent dark:bg-[#0c1624] p-8 pb-16 transition-colors duration-300">
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Layout (lg) */}
          <div className="relative">
            {/* Left side - Image with white background */}
            <div className="hidden sm:block sm:relative md:w-[70%] md:bg-transparent md:rounded-lg md:p-8">
              <div
                className="h-full md:w-full sm:w-2/3 bg-purple-50 lg:-ml-10 rounded-xs shadow-lg p-6 sm:pb-0 md:pb-12 md:-ml-6"
                style={{
                  backgroundImage: `url(${selfIntro})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.85,
                  zIndex: -1,
                }}
              >
                <div className="relative max-w-md mx-auto">
                <CustomLineedCursor
                  zIndex={10000}
                  debug={false}
                  friction={0.5}
                  trails={20}
                  size={50}
                  dampening={0.25}
                  tension={0.98}
                  backgroundColor={theme === "dark" ? "rgb(17,24,39)" : "rgb(8,5,16)"}
                  className="!z-[9999]"
                />
                  <div className="relative aspect-square left-10">
                    {/* Outer border */}
                    <div className="absolute lg:-left-24 xl:-left-48 sm:-left-8 md:-left-16 top-8 md:w-[68%] xl:w-[75%] sm:w-[50%] sm:h-[75%] md:h-full border-[8px] border-cyan-500 rounded-lg" />
                    {/* Image container */}
                    <div className="relative cursor-pointer lg:-left-16 xl:-left-40 md:-left-8 sm:w-[50%] sm:h-[75%] md:w-[68%] xl:w-[75%] md:h-full overflow-hidden rounded-lg border-2 border-cyan-500 transition-all duration-300 ease-in-out filter grayscale hover:shadow-none hover:filter hover:grayscale-0">
                      <img
                        src={img}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - About (overlapping) */}
            <div className="sm:absolute sm:top-1/2 sm:drop-shadow-2xl md:mt-0 sm:-translate-y-1/2 sm:right-0 sm:w-1/2 sm:z-10">
              <div className="bg-white dark:bg-gray-800 rounded-lg opacity-90 shadow-xl p-6 transition-colors duration-300">
                <div className="mb-6">
                  <h2 className="lg:text-xs font-bold text-gray-800 dark:text-white border-b border-purple-700 dark:border-purple-400 w-16 transition-colors duration-300">
                    About
                  </h2>
                </div>
                <div className="space-y-4 sm:text-[0.5] text-[0.65rem]">
                  <p className="text-gray-700 dark:text-gray-200 lg:text-sm transition-colors duration-300">
                    Hey, My name is {profileData.name} and I am currently a{" "}
                    {profileData.education}
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 lg:text-sm transition-colors duration-300">
                    {profileData.interests}
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 lg:text-sm transition-colors duration-300">
                    {profileData.experience}
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 lg:text-sm transition-colors duration-300">
                    {profileData.writing}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 dark:border-gray-700" />
    </>
  );
};

export default SelfIntroduction;
