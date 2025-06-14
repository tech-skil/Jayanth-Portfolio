import React from "react";
import { useTheme } from "next-themes";

const Cirtification = () => {
  const { theme } = useTheme();
  const certifications = [
    {
      title: "Think in a Redux way",
      achievement: "Achieved Top 6th Position",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    {
      title: "HTML, CSS, & JavaScript Certification",
      achievement: "Certification Course for Beginners",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    {
      title: "Web Development Masterclass",
      achievement: "Complete Full-Stack Development",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    // Add more certifications as needed
    {
      title: "HTML, CSS, & JavaScript Certification",
      achievement: "Certification Course for Beginners",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    {
      title: "Web Development Masterclass",
      achievement: "Complete Full-Stack Development",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    // Add more certifications as needed
    {
      title: "HTML, CSS, & JavaScript Certification",
      achievement: "Certification Course for Beginners",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    {
      title: "Web Development Masterclass",
      achievement: "Complete Full-Stack Development",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    // Add more certifications as needed
    {
      title: "HTML, CSS, & JavaScript Certification",
      achievement: "Certification Course for Beginners",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    {
      title: "Web Development Masterclass",
      achievement: "Complete Full-Stack Development",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    // Add more certifications as needed
    {
      title: "HTML, CSS, & JavaScript Certification",
      achievement: "Certification Course for Beginners",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    {
      title: "Web Development Masterclass",
      achievement: "Complete Full-Stack Development",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    // Add more certifications as needed
    {
      title: "HTML, CSS, & JavaScript Certification",
      achievement: "Certification Course for Beginners",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    {
      title: "Web Development Masterclass",
      achievement: "Complete Full-Stack Development",
      image: "/api/placeholder/400/300",
      credential: "#",
    },
    // Add more certifications as needed
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold overflowhidden mb-16 text-purple-700 dark:text-purple-400 transition-colors duration-300">
        Accomplishments
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 overflow-y-hidden gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg bg-slate-100 dark:bg-gray-800 transition-colors duration-300"
          >
            {/* Certificate Image */}
            <div className="aspect-[4/3] relative">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 dark:opacity-90"
              />

              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-black/80 dark:bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                <h3 className="text-white dark:text-gray-100 text-lg font-semibold text-center mb-2 transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-gray-300 dark:text-gray-400 text-sm text-center mb-4 transition-colors duration-300">
                  {cert.achievement}
                </p>
                <button
                  className="bg-purple-700 dark:bg-purple-600 text-white px-6 py-2 rounded-lg 
                           hover:bg-purple-800 dark:hover:bg-purple-700
                           transition-all duration-300 border-2 
                           border-purple-700 dark:border-purple-500
                           hover:shadow-lg hover:shadow-purple-600/50 
                           dark:hover:shadow-purple-500/50"
                >
                  View Credential
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cirtification;
