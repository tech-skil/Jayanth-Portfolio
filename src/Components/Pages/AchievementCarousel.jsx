import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ach1 from "../../assets/images/bg.jpg";
import stay_on_focused from "../../assets/images/Stay_On_Focus.jpg";

// import { div } from 'framer-motion/client';


const AchievementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample achievement data - replace with your actual data
  const achievements = [
    {
      id: 1,
      image: {ach1},
      title: "Web Development Certification",
      description: "Completed advanced web development course with focus on React and modern JavaScript frameworks. ",
      certLink: "#"
    },
    {
      id: 2,
      image: {ach1},
      title: "AWS Cloud Practitioner",
      description: "Achieved AWS Cloud Practitioner certification with hands-on experience in cloud architecture. ",
      certLink: "#"
    },
    {
      id: 3,
      image: {ach1},
      title: "UI/UX Design Course",
      description: "Mastered user interface design principles and prototyping tools. Created comprehensive design systems and conducted user research for multiple projects. ",
      certLink: "#"
    },
    {
      id: 4,
      image: {ach1},
      title: "Python Data Science",
      description: "Completed comprehensive data science course using Python and ML libraries. Implemented machine learning models and data visualization projects.",
      certLink: "#"
    }
  ];

  const cardsToShow = 2;
  const maxIndex = achievements.length - cardsToShow;

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
<div>
<div className="relative container mx-auto w-full  min-h-[30rem] sm:min-h-[30rem] md:min-h-[40rem] lg:min-h-[50rem] md:h-32 overflow-hidden md:-top-[2rem] -top-[11rem] sm:-mt-[0rem] sm:-top-[6rem] mt-44 ">
    <div className="absolute w-full h-[80vh] md:h-full top-0 left-0">
      <img
        src={stay_on_focused}
        alt="stay on focused"
        className="w-full h-full object-fill sm:object-contain opacity-60 md:object-contain lg:object-cover"
      />
    </div>
  </div>

<div className='container flex hidden md:block justify-center mx-auto -mt-[29rem] md:-mt-[29rem] sm:-mt-[24rem]'>
<div className="w-full max-w-[90%] -mb-[5rem] px-4 md:px-8 py-8 text-sm"> 
      <div className="relative ">
        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 
            ${currentIndex === 0 ? 'text-gray-300' : 'text-purple-700 hover:text-purple-800'}`}
        >
          <ChevronLeft size={40} />
        </button>
        
        <button 
          onClick={nextSlide}
          disabled={currentIndex === maxIndex}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
            ${currentIndex === maxIndex ? 'text-gray-300' : 'text-purple-700 hover:text-purple-800'}`}
        >
          <ChevronRight size={40} />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden hidden md:block mx-8 max-h-48 ">
          <div 
            className="flex  gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
          >
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className="w-1/2 flex-shrink-0"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-purple-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-2/5">
                      <div className="h-full">
                        <img
                          src={achievement.image}
                          alt={achievement.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="md:w-3/5 p-6">
                      <h3 className="text-sm font-bold text-gray-800 mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 text-xs mb-6 line-clamp-4">
                        {achievement.description}
                      </p>
                      <div className="mt-auto">
                        <a
                          href={achievement.certLink}
                          className="inline-block bg-purple-700 text-white px-6 py-2 rounded-lg 
                            hover:bg-purple-800 hover:shadow-lg hover:shadow-purple-600/50 
                            transition duration-300 text-sm"
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