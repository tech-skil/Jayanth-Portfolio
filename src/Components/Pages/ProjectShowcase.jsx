import React, { useState, useCallback, useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { FaChevronLeft, FaChevronRight, FaEye, FaGlobe, FaTimes } from 'react-icons/fa';
import p11 from "../../assets/images/ShocaseProjects/p1-1.jpg";
import p12 from "../../assets/images/ShocaseProjects/p1-2.jpg";
import p13 from "../../assets/images/ShocaseProjects/p1-3.jpg";
import p21 from "../../assets/images/ShocaseProjects/p2-1.jpg";
import p22 from "../../assets/images/ShocaseProjects/p2-2.jpg";
import p23 from "../../assets/images/ShocaseProjects/p2-3.jpg";
import p31 from "../../assets/images/ShocaseProjects/p3-1.jpg";
import p32 from "../../assets/images/ShocaseProjects/p3-2.jpg";
import p33 from "../../assets/images/ShocaseProjects/p3-3.jpg";
import p41 from "../../assets/images/ShocaseProjects/p4-1.jpg";
import p42 from "../../assets/images/ShocaseProjects/p4-2.jpg";
import p43 from "../../assets/images/ShocaseProjects/p4-3.jpg";
import p51 from "../../assets/images/ShocaseProjects/p5-1.jpg";
import p52 from "../../assets/images/ShocaseProjects/p5-2.jpg";
import p53 from "../../assets/images/ShocaseProjects/p5-3.jpg";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef(null);
  const cardRef = useRef(null);

  const nextImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = useCallback((e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  }, [project.images.length]);

  const toggleExpand = useCallback(() => {
    setIsExpanded((prev) => !prev);
    setCurrentImageIndex(0); // Reset to first image when expanding
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded]);

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isExpanded]);

  return (
    <div ref={cardRef} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105  w-80 sm:w-[426px] lg:w-[30rem] flex-shrink-0 mx-2 sm:mx-4">
      <div
        className="relative h-45 sm:h-[240px] h-[110px] cursor-pointer"
        onClick={toggleExpand}
      >
        <img
          src={project.images[0]}
          alt={project.name}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-purple-700 mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
        <div className="flex justify-between items-center">
          <button 
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors duration-300 flex items-center justify-center"
            onClick={toggleExpand}
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

      {isExpanded && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div ref={modalRef} className="relative max-w-4xl w-full h-full flex items-center justify-center">
            <img
              src={project.images[currentImageIndex]}
              alt={`${project.name} - Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
            >
              <FaTimes size={24} />
            </button>
            {project.images.length > 1 && (
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
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectShowcase = () => {
  const projects = [
    {
      name: "Project 1",
      description: "A brief description of Project 1.",
      images: [p11, p12, p13],
    },
    {
      name: "Project 2",
      description: "A brief description of Project 2.",
      images: [p21, p22, p23],
    },
    {
      name: "Project 3",
      description: "A brief description of Project 3.",
      images:[p31, p32, p33],
    },
    {
      name: "Project 4",
      description: "A brief description of Project 4.",
      images: [p41, p42, p43],
    },
    {
      name: "Project 5",
      description: "A brief description of Project 5.",
      images: [p51, p52, p53],
    },
  ];

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 mb-6 sm:mb-8 text-center">My Projects</h2>
      <div className="overflow-hidden">
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          direction="right"
        >
          <div className="flex">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ProjectShowcase;