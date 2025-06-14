import React, { useState, useEffect, useCallback } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaEye,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { projects } from "./projectData";
import Laptop_Showcase from "../../assets/images/ShocaseProjects/Laptop_ShowcaseB.png";

const ProjectShowcase = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const nextProject = useCallback(() => {
    if (!isTransitioning && projects.length > 1) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const prevProject = useCallback(() => {
    if (!isTransitioning && projects.length > 1) {
      setIsTransitioning(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (projects.length > 1) {
      const timer = setInterval(nextProject, 5000);
      return () => clearInterval(timer);
    }
  }, [nextProject]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getProjectsToShow = () => {
    if (projects.length === 0) return [];
    if (projects.length === 1) return [{ ...projects[0], position: "center" }];
    const prev = (currentIndex - 1 + projects.length) % projects.length;
    const next = (currentIndex + 1) % projects.length;
    return [
      { ...projects[prev], position: "left" },
      { ...projects[currentIndex], position: "center" },
      { ...projects[next], position: "right" },
    ];
  };

  const toggleExpand = (project) => {
    setExpandedProject(expandedProject === project ? null : project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (expandedProject) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % expandedProject.images.length
      );
    }
  };

  const prevImage = () => {
    if (expandedProject) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + expandedProject.images.length) %
          expandedProject.images.length
      );
    }
  };

  if (projects.length === 0) {
    return (
      <div className="container mx-auto py-8 sm:py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-6 sm:mb-8">
          My Projects
        </h2>
        <p>No projects available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 dark:text-purple-400 mb-6 sm:mb-8 text-center transition-colors duration-300">
        My Projects
      </h2>
      <div className="relative overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
        <div className="absolute inset-0 bg-transparent rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
          <div className="absolute inset-2 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300"></div>
        </div>

        <div className="relative z-10 flex justify-center items-center h-full p-4">
          {getProjectsToShow().map((project, index) => (
            <div
              key={`${project.name}-${project.position}`}
              className={`project-card ${
                project.position
              } relative bg-transparent rounded-2xl shadow-md overflow-hidden transition-all duration-500 w-64 sm:w-72 md:w-80 lg:w-96 flex-shrink-0 mx-2 sm:mx-4 cursor-pointer 
                ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }
                hover:scale-105 hover:shadow-xl transform transition-all duration-300 ease-in-out 
                [background:conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.indigo.500)_86%,theme(colors.indigo.300)_90%,theme(colors.indigo.500)_94%,theme(colors.slate.600/.48))_border-box] border border-transparent animate-border`}
              style={{
                padding: "2px",
                backgroundClip: "padding-box",
                transitionDelay: `${index * 150}ms`,
              }}
              onClick={() => toggleExpand(project)}
            >
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl w-full h-full transition-colors duration-300">
                <div className="relative flex items-center justify-center h-40 sm:h-48 md:h-56 lg:h-72 overflow-hidden">
                  <img
                    src={Laptop_Showcase}
                    alt="Laptop Showcase"
                    className="absolute inset-0 w-full h-full object-contain z-10"
                  />
                  <div className="absolute inset-0 flex items-center justify-center -top-[12%] z-20">
                    <div className="lg:w-[87.9%] w-[77.9%] h-[62.3%] md:w-[82.3%] md:h-[60%] lg:h-[61.1%] rounded-sm overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.name}
                        className="w-full h-full object-cover transition-all duration-300 transform hover:scale-110"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-purple-700 dark:text-purple-400 mb-2 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs sm:text-sm transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="bg-purple-700 dark:bg-purple-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm hover:bg-purple-800 dark:hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center transform hover:scale-105">
                      <FaEye className="mr-1 sm:mr-2" size={12} />
                      View
                    </button>
                    <button className="border border-purple-700 dark:border-purple-500 text-purple-700 dark:text-purple-400 px-3 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors duration-300 flex items-center justify-center transform hover:scale-105">
                      <FaGlobe className="mr-1 sm:mr-2" size={12} />
                      Live
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 1 && (
          <>
            <button
              className="absolute left-6 sm:left-8 top-1/2 transform -translate-y-1/2 bg-purple-700 dark:bg-purple-600 text-white p-1 sm:p-2 rounded-full hover:bg-purple-800 dark:hover:bg-purple-700 transition-colors duration-300 hover:scale-110 z-20"
              onClick={prevProject}
            >
              <FaChevronLeft size={16} className="sm:w-6 sm:h-6" />
            </button>
            <button
              className="absolute right-6 sm:right-8 top-1/2 transform -translate-y-1/2 bg-purple-700 dark:bg-purple-600 text-white p-1 sm:p-2 rounded-full hover:bg-purple-800 dark:hover:bg-purple-700 transition-colors duration-300 hover:scale-110 z-20"
              onClick={nextProject}
            >
              <FaChevronRight size={16} className="sm:w-6 sm:h-6" />
            </button>
          </>
        )}
      </div>

      <div className="mt-8 text-center sm:text-right">
        <Link
          to="/home/AchievementShowcase"
          className="inline-block font-medium text-purple-700 dark:text-purple-400 border-b-4 border-purple-800 dark:border-purple-500 py-2 rounded-xs text-sm sm:text-base hover:text-purple-800 dark:hover:text-purple-300 hover:font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          See More Projects &rarr;
        </Link>
      </div>

      {expandedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col animate-scale-up transition-colors duration-300">
            <button
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300 z-10 transform hover:scale-110"
              onClick={() => toggleExpand(null)}
            >
              <FaTimes size={24} />
            </button>
            <div className="relative flex-grow overflow-hidden">
              <img
                src={expandedProject.images[currentImageIndex]}
                alt={`${expandedProject.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain transition-opacity duration-300"
              />
              {expandedProject.images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-gray-800 dark:text-gray-300 p-2 rounded-full transition-all duration-300 hover:scale-110"
                    onClick={prevImage}
                  >
                    <FaChevronLeft size={24} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-gray-800 dark:text-gray-300 p-2 rounded-full transition-all duration-300 hover:scale-110"
                    onClick={nextImage}
                  >
                    <FaChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            <div className="p-6 bg-white dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-4 transition-colors duration-300">
                {expandedProject.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                {expandedProject.description}
              </p>
              <div className="flex justify-between items-center">
                <button className="bg-purple-700 dark:bg-purple-600 text-white px-6 py-2 rounded text-sm hover:bg-purple-800 dark:hover:bg-purple-700 transition-all duration-300 flex items-center justify-center hover:scale-105">
                  <FaEye className="mr-2" size={16} />
                  View Project
                </button>
                <button className="border border-purple-700 dark:border-purple-500 text-purple-700 dark:text-purple-400 px-6 py-2 rounded text-sm hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-all duration-300 flex items-center justify-center hover:scale-105">
                  <FaGlobe className="mr-2" size={16} />
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
