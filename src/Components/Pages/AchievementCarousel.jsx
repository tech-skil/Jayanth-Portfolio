import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import ach1 from "../../assets/images/bg.jpg";
import stay_on_focused from "../../assets/images/Stay_On_Focus.jpg";

const AchievementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  // Sample achievement data - replace with your actual data
  const achievements = [
    {
      id: 1,
      image: { ach1 },
      title: "Web Development Certification",
      description:
        "Completed advanced web development course with focus on React and modern JavaScript frameworks. ",
      certLink: "#",
    },
    {
      id: 2,
      image: { ach1 },
      title: "AWS Cloud Practitioner",
      description:
        "Achieved AWS Cloud Practitioner certification with hands-on experience in cloud architecture. ",
      certLink: "#",
    },
    {
      id: 3,
      image: { ach1 },
      title: "UI/UX Design Course",
      description:
        "Mastered user interface design principles and prototyping tools. Created comprehensive design systems and conducted user research for multiple projects. ",
      certLink: "#",
    },
    {
      id: 4,
      image: { ach1 },
      title: "Python Data Science",
      description:
        "Completed comprehensive data science course using Python and ML libraries. Implemented machine learning models and data visualization projects.",
      certLink: "#",
    },
  ];

  const cardsToShow = 2;
  const maxIndex = achievements.length - cardsToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="relative container mx-auto w-full min-h-[30rem] sm:min-h-[30rem] md:min-h-[40rem] lg:min-h-[50rem] md:h-32 overflow-hidden md:-top-[2rem] -top-[13rem] sm:-mt-[0rem] sm:-top-[6rem] mt-36">
        <div className="absolute w-full h-[80vh] md:h-full top-24 md:top-0 left-0">
          <img
            src={stay_on_focused}
            alt="stay on focused"
            className="w-full md:h-full object-fill sm:object-contain opacity-60 dark:opacity-40 md:object-contain lg:object-cover transition-opacity duration-300"
          />
        </div>
      </div>

      <div className="container flex md:block justify-center items-center mx-auto -mt-[29rem] md:-mt-[29rem] sm:-mt-[24rem]">
        <div className="w-full max-w-[90%] mx-auto hidden md:block -mb-[5rem] px-4 md:px-8 py-8 text-sm">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 
                ${
                  currentIndex === 0
                    ? "text-gray-300 dark:text-gray-600"
                    : "text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                } transition-colors duration-300`}
            >
              <ChevronLeft size={40} />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex === maxIndex}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
                ${
                  currentIndex === maxIndex
                    ? "text-gray-300 dark:text-gray-600"
                    : "text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                } transition-colors duration-300`}
            >
              <ChevronRight size={40} />
            </button>

            {/* Cards Container */}
            <div className="overflow-hidden hidden md:block mx-8 max-h-48">
              <div
                className="flex gap-6 transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / cardsToShow)
                  }%)`,
                }}
              >
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="w-1/2 flex-shrink-0">
                    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-purple-100 dark:border-purple-800 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row">
                        {/* Image Section */}
                        <div className="md:w-2/5">
                          <div className="h-full">
                            <img
                              src={achievement.image}
                              alt={achievement.title}
                              className="w-full h-full object-cover dark:opacity-90 transition-opacity duration-300"
                            />
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="md:w-3/5 p-6">
                          <h3 className="text-sm font-bold text-gray-800 dark:text-white mb-3 transition-colors duration-300">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 text-xs mb-6 line-clamp-4 transition-colors duration-300">
                            {achievement.description}
                          </p>
                          <div className="mt-auto ">
                            <a
                              href={achievement.certLink}
                              className="inline-block bg-purple-700 dark:bg-purple-600 text-white px-6 py-2 rounded-lg 
                                hover:bg-purple-800 dark:hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/50 
                                dark:hover:shadow-purple-500/50 transition-all duration-300 text-sm"
                            >
                              View Certificate
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCarousel;
