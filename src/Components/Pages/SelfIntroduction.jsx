import React from "react";
import img from "../../assets/images/Self_intro2.jpg";
import selfIntro from "../../assets/images/selfIntroBG.jpg";

const SelfIntroduction = () => {
  const profileData = {
    name: "Garv Nanwani",
    education:
      "Second Year Undergraduate Student at Jamia Millia Islamia, New Delhi",
    interests: "My field of interests are programming and psychology.",
    experience:
      "I have been coding for around 2 years now. I love to design websites and build full stack applications using MERN stack preferably.",
    writing:
      "I am also a guest writer at daily.dev where I write technical articles related to development and programming in general.",
  };

  return (
    <>
      <div className="hidden sm:block md:max-h-screen sm:max-h-screen  lg:min-h-0 w-full bg-transparent p-8 pb-16">
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Layout (lg) */}
          <div className="relative">
            {/* Left side - Image with white background */}
            <div className=" hidden sm:block sm:relative   md:w-[70%] md:bg-transparent md:rounded-lg md:p-8">
              <div
                className="h-full md:w-full sm:w-2/3 bg-purple-50 lg:-ml-10 rounded-xs shadow-lg p-6 sm:pb-0 md:pb-12 md:-ml-6"
                style={{
                  backgroundImage: `url(${selfIntro})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.85,
                  // filter: 'blur(2px)',
                  zIndex: -1,
                }}
              >
                <div className="relative max-w-md mx-auto">
                  <div className="relative aspect-square left-10">
                    {/* Outer border */}
                    <div className="absolute lg:-left-24 xl:-left-48 sm:-left-8 md:-left-16 top-8 md:w-[68%] xl:w-[75%] sm:w-[50%] sm:h-[75%]  md:h-full border-[8px] border-cyan-500 rounded-lg" />
                    {/* Image container */}
                    <div className="relative lg:-left-16 xl:-left-40 md:-left-8 sm:w-[50%] sm:h-[75%] md:w-[68%] xl:w-[75%] md:h-full overflow-hidden rounded-lg border-2 border-cyan-500 transition-all duration-300 ease-in-out filter grayscale hover:shadow-none hover:filter hover:grayscale-0">
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
            <div className="sm:absolute sm:top-1/2 sm:drop-shadow-2xl  md:mt-0 sm:-translate-y-1/2 sm:right-0 sm:w-1/2 sm:z-10 ">
              <div className="bg-white rounded-lg opacity-90 shadow-xl p-6">
                <div className="mb-6">
                  <h2 className="lg:text-xs  font-bold text-gray-800 border-b border-purple-700 w-16">
                    About
                  </h2>
                </div>
                <div className="space-y-4 sm:text-[0.5]  text-[0.65rem]">
                  <p className="text-gray-700 lg:text-sm ">
                    Hey, My name is {profileData.name} and I am currently a{" "}
                    {profileData.education}.
                  </p>
                  <p className="text-gray-700 lg:text-sm ">
                    {profileData.interests}
                  </p>
                  <p className="text-gray-700 lg:text-sm ">
                    {profileData.experience}
                  </p>
                  <p className="text-gray-700 lg:text-sm ">
                    {profileData.writing}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default SelfIntroduction;
