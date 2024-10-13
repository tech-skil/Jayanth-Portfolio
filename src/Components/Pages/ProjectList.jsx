import React, { useState } from 'react';
import { FaEye, FaGlobe, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { projects } from './projectData'; // Make sure this path is correct

const ProjectCard = ({ project, onExpand }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] mb-8 relative">
      <div className="relative h-48 sm:h-64 cursor-pointer" onClick={() => onExpand(project)}>
        <img
          src={project.images[0]}
          alt={project.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold text-purple-700 mb-2">{project.name}</h3>
        <p className="text-gray-700 mb-4 text-sm">{project.description}</p>
        <div className="flex justify-between items-center">
          <button 
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors duration-300 flex items-center justify-center"
            onClick={() => onExpand(project)}
          >
            <FaEye className="mr-2" size={16} />
            View
          </button>
          <button className="border border-purple-700 text-purple-700 px-4 py-2 rounded hover:bg-purple-100 transition-colors duration-300 flex items-center justify-center">
            <FaGlobe className="mr-2" size={16} />
            Live
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectList = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleExpand = (project) => {
    setExpandedProject(expandedProject === project ? null : project);
    setCurrentImageIndex(0);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % expandedProject.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + expandedProject.images.length) % expandedProject.images.length);
  };

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-6 sm:mb-8 text-center">All Projects</h2>
      <div className="flex flex-wrap justify-center sm:justify-between">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onExpand={toggleExpand} />
        ))}
      </div>

      {expandedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => toggleExpand(null)}>
          <div className="relative max-w-4xl w-full max-h-[90%] overflow-hidden flex flex-col items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={expandedProject.images[currentImageIndex]}
              alt={`${expandedProject.name} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => toggleExpand(null)}
            >
              <FaTimes size={24} />
            </button>
            {expandedProject.images.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  onClick={prevImage}
                >
                  <FaChevronLeft size={24} />
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  onClick={nextImage}
                >
                  <FaChevronRight size={24} />
                </button>
              </>
            )}
            <div className="bg-white rounded-lg p-4 mt-4 w-full text-center">
              <h3 className="text-xl font-semibold text-orange-600">{expandedProject.name}</h3>
              <p className="text-gray-700">{expandedProject.description}</p>
              <div className="mt-4">
                <button className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors duration-300 mr-2">
                  View Project
                </button>
                <button className="border border-purple-700 text-purple-700 px-4 py-2 rounded hover:bg-purple-100 transition-colors duration-300">
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

export default ProjectList;
