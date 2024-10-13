import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaEye, FaGlobe, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projects } from './projectData';  // Ensure this import points to the correct location

const ProjectShowcase = () => {
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
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
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
    if (projects.length === 1) return [{ ...projects[0], position: 'center' }];
    const prev = (currentIndex - 1 + projects.length) % projects.length;
    const next = (currentIndex + 1) % projects.length;
    return [
      { ...projects[prev], position: 'left' },
      { ...projects[currentIndex], position: 'center' },
      { ...projects[next], position: 'right' },
    ];
  };

  const toggleExpand = (project) => {
    setExpandedProject(expandedProject === project ? null : project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (expandedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % expandedProject.images.length);
    }
  };

  const prevImage = () => {
    if (expandedProject) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + expandedProject.images.length) % expandedProject.images.length);
    }
  };

  if (projects.length === 0) {
    return (
      <div className="container mx-auto py-8 sm:py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-6 sm:mb-8">My Projects</h2>
        <p>No projects available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-6 sm:mb-8 text-center">My Projects</h2>
      <div className="relative overflow-hidden h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]">
        <div className="flex justify-center items-center h-full">
          {getProjectsToShow().map((project, index) => (
            <div 
              key={`${project.name}-${project.position}`}
              className={`project-card ${project.position} bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 w-72 sm:w-80 md:w-96 lg:w-[30rem] flex-shrink-0 mx-2 sm:mx-4 cursor-pointer
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                hover:scale-105 hover:shadow-xl
                transform transition-all duration-300 ease-in-out`}
              style={{transitionDelay: `${index * 150}ms`}}
              onClick={() => toggleExpand(project)}
            >
              <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover transition-all duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-bold text-purple-700 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4 text-xs sm:text-sm">{project.description}</p>
                <div className="flex justify-between items-center">
                  <button 
                    className="bg-purple-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm hover:bg-purple-800 transition-colors duration-300 flex items-center justify-center transform hover:scale-105"
                  >
                    <FaEye className="mr-1 sm:mr-2" size={12} />
                    View
                  </button>
                  <button className="border border-purple-700 text-purple-700 px-3 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm hover:bg-purple-100 transition-colors duration-300 flex items-center justify-center transform hover:scale-105">
                    <FaGlobe className="mr-1 sm:mr-2" size={12} />
                    Live
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {projects.length > 1 && (
          <>
            <button
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-1 sm:p-2 rounded-full hover:bg-purple-800 transition-colors duration-300 hover:scale-110"
              onClick={prevProject}
            >
              <FaChevronLeft size={16} className="sm:w-6 sm:h-6" />
            </button>
            <button
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-purple-700 text-white p-1 sm:p-2 rounded-full hover:bg-purple-800 transition-colors duration-300 hover:scale-110"
              onClick={nextProject}
            >
              <FaChevronRight size={16} className="sm:w-6 sm:h-6" />
            </button>
          </>
        )}
      </div>
      <div className="mt-8 text-center sm:text-right">
        <Link 
          to="/home/projects" 
          className="inline-block bg-purple-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base hover:bg-purple-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          See More Projects
        </Link>
      </div>

      {expandedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
          <div className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col animate-scale-up">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition-colors duration-300 z-10 transform hover:scale-110"
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
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 rounded-full transition-all duration-300 hover:scale-110"
                    onClick={prevImage}
                  >
                    <FaChevronLeft size={24} />
                  </button>
                  <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-gray-800 p-2 rounded-full transition-all duration-300 hover:scale-110"
                    onClick={nextImage}
                  >
                    <FaChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            <div className="p-6 bg-white">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">{expandedProject.name}</h2>
              <p className="text-gray-600 mb-6">{expandedProject.description}</p>
              <div className="flex justify-between items-center">
                <button className="bg-purple-700 text-white px-6 py-2 rounded text-sm hover:bg-purple-800 transition-all duration-300 flex items-center justify-center hover:scale-105">
                  <FaEye className="mr-2" size={16} />
                  View Project
                </button>
                <button className="border border-purple-700 text-purple-700 px-6 py-2 rounded text-sm hover:bg-purple-100 transition-all duration-300 flex items-center justify-center hover:scale-105">
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