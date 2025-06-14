import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";

const educationData = [
  {
    year: "2021-2025",
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Computer Science and Engineering",
    description: "Final Year of Engineering Studies",
    images: [
      "src/assets/images/ShocaseProjects/p2-1.jpg",
      "src/assets/images/ShocaseProjects/p2-1.jpg",
      "src/assets/images/ShocaseProjects/p2-1.jpg",
    ],
  },
  {
    year: "2019-2021",
    degree: "Pre-University Course (Science)",
    institution: "Government Junior College Devanahalli, Bangalore",
    description: "Science Stream - Physics, Chemistry, Mathematics, Biology",
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
  },
  {
    year: "2016-2019",
    degree: "High School (8th-10th)",
    institution:
      "Vivekananda High School, Sulibele, Hosakote Taluk, Bangalore Rural District",
    description: "Secondary Education",
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
  },
  {
    year: "2010-2016",
    degree: "Primary Education (2nd-7th)",
    institution:
      "Vivekananda Higher Primary School, Sulibele, Hosakote Taluk, Bangalore Rural District",
    description: "Primary Education",
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
  },
  {
    year: "2007-2010",
    degree: "Lower Primary (LKG-1st)",
    institution: "Gnana Jyothi Vidya Mandir, Nallur, Devanahalli Taluk",
    description: "Foundation Education",
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
    ],
  },
];

const EducationCard = ({ education, index, onVisible }) => {
  const [showImages, setShowImages] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  useEffect(() => {
    if (isInView) {
      onVisible(index);
    }
  }, [isInView, index, onVisible]);

  return (
    <div ref={ref} className="relative flex items-center space-x-8">
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isInView ? "100%" : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute left-0 w-1 bg-purple-500 dark:bg-purple-400"
        style={{ top: 0, bottom: 0 }}
      />

      <div className="w-8 h-8 bg-purple-700 dark:bg-purple-600 rounded-full z-20 flex items-center justify-center absolute -left-5 transition-colors duration-300">
        <span className="text-white text-sm font-bold">
          {educationData.length - index}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full text-start relative transition-colors duration-300"
      >
        <h2 className="text-xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">
          {education.degree}
        </h2>
        <h3 className="text-lg text-gray-700 dark:text-gray-200 transition-colors duration-300">
          {education.institution}
        </h3>
        <p className="text-purple-500 dark:text-purple-400 font-medium transition-colors duration-300">
          {education.year}
        </p>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          {education.description}
        </p>

        <button
          onClick={() => setShowImages(true)}
          className="absolute bottom-4 right-4 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors duration-300"
        >
          <ImageIcon size={24} />
        </button>

        <AnimatePresence>
          {showImages && (
            <ImagePopup
              images={education.images}
              onClose={() => setShowImages(false)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const ImagePopup = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-w-5xl w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white p-2 rounded-full shadow-lg transition-colors duration-300"
        >
          <X size={24} />
        </button>

        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Education environment ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200/90 dark:bg-gray-700/90 hover:bg-gray-300/90 dark:hover:bg-gray-600/90 text-gray-800 dark:text-gray-200 p-3 rounded-full transition-colors duration-300 shadow-lg"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200/90 dark:bg-gray-700/90 hover:bg-gray-300/90 dark:hover:bg-gray-600/90 text-gray-800 dark:text-gray-200 p-3 rounded-full transition-colors duration-300 shadow-lg"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-200/90 dark:bg-gray-700/90 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm shadow-lg transition-colors duration-300">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Education = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const { theme } = useTheme();

  const handleVisible = (index) => {
    setVisibleSections((prev) =>
      prev.includes(index) ? prev : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-900 text-gray-800 dark:text-white p-8 flex justify-center items-center transition-colors duration-300">
      <div className="relative max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-12 text-center text-purple-600 dark:text-purple-400 transition-colors duration-300">
          Educational Journey
        </h1>

        <motion.div
          initial={{ height: 0 }}
          animate={{
            height: `${(visibleSections.length / educationData.length) * 100}%`,
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute -left-1 w-2 bg-purple-600 dark:bg-purple-400 top-0 bottom-0 transition-colors duration-300"
        />

        <div className="space-y-16 relative">
          {educationData.map((education, index) => (
            <EducationCard
              key={index}
              education={education}
              index={index}
              onVisible={handleVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
