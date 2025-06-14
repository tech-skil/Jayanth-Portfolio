import React, { useState } from "react";
import { Menu, X, Award, Sun, Moon, BookOpen } from "lucide-react";
import { useTheme } from "next-themes";
import ProjectList from "./ProjectList";
import Resume from "./ProfessionalDashboard/Resume";
import Cirtification from "./ProfessionalDashboard/Cirtification";
import RepositoriesGrid from "./ProfessionalDashboard/RepositoriesGrid";
import Tools from "./ProfessionalDashboard/Tools";
import Accomplishments from "./ProfessionalDashboard/Accomplishments";
import Navbar from "./Navbar";

import {
  FaProjectDiagram,
  FaFileAlt,
  FaTools,
  FaFolderOpen,
  FaCertificate,
  FaTrophy,
  FaBookReader,
  FaGithub,
} from "react-icons/fa";

const AchievementShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("My Creative Showcase");
  const { theme, setTheme } = useTheme();

  const IconWrapper = ({ children, bgColor }) => (
    <div
      className={`w-10 h-10 rounded-lg flex items-center justify-center ${bgColor} transition-transform duration-300 transform hover:scale-110`}
    >
      {children}
    </div>
  );

  const menuItems = [
    {
      name: "Projects",
      icon: (
        <IconWrapper bgColor="bg-blue-100">
          <FaProjectDiagram className="w-6 h-6 text-blue-600" />
        </IconWrapper>
      ),
      activeColor: "text-blue-600",
      hoverBg: "hover:bg-blue-50",
      content: <ProjectList />,
    },
    {
      name: "Resume",
      icon: (
        <IconWrapper bgColor="bg-green-100">
          <FaFileAlt className="w-6 h-6 text-green-600" />
        </IconWrapper>
      ),
      activeColor: "text-green-600",
      hoverBg: "hover:bg-green-50",
      content: <Resume />,
    },
    {
      name: "Skills & Tools",
      icon: (
        <IconWrapper bgColor="bg-purple-100">
          <FaTools className="w-6 h-6 text-purple-600" />
        </IconWrapper>
      ),
      activeColor: "text-purple-600",
      hoverBg: "hover:bg-purple-50",
      content: <Tools />,
    },
    {
      name: "Repository",
      icon: (
        <IconWrapper bgColor="bg-gray-100">
          <FaGithub className="w-6 h-6 text-gray-700" />
        </IconWrapper>
      ),
      activeColor: "text-gray-700",
      hoverBg: "hover:bg-gray-50",
      content: <RepositoriesGrid />,
    },
    {
      name: "Certification",
      icon: (
        <IconWrapper bgColor="bg-yellow-100">
          <FaCertificate className="w-6 h-6 text-yellow-600" />
        </IconWrapper>
      ),
      activeColor: "text-yellow-600",
      hoverBg: "hover:bg-yellow-50",
      content: <Cirtification />,
    },
    {
      name: "Competitions",
      icon: (
        <IconWrapper bgColor="bg-red-100">
          <FaTrophy className="w-6 h-6 text-red-600" />
        </IconWrapper>
      ),
      activeColor: "text-red-600",
      hoverBg: "hover:bg-red-50",
      content: "hello world",
    },
    {
      name: "Accomplishments",
      icon: (
        <IconWrapper bgColor="bg-indigo-100">
          <FaBookReader className="w-6 h-6 text-indigo-600" />
        </IconWrapper>
      ),
      activeColor: "text-indigo-600",
      hoverBg: "hover:bg-indigo-50",
      content: <Accomplishments />,
    },
  ];

  const certifications = [
    { id: 1, title: "Think in a Redux way", image: "/api/placeholder/300/200" },
    {
      id: 2,
      title: "HTML & JavaScript Certification",
      image: "/api/placeholder/300/200",
    },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const renderContent = () => {
    const item = menuItems.find((item) => item.name === activeSection);
    if (item) {
      return <p>{item.content}</p>;
    }
    return (
      <>
        <ProjectList />
      </>
    );
  };

  return (
    <div className="lg:mx-auto lg:container min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />

      <div className="flex-1 flex">
        {/* Sidebar for desktop */}
        <aside className="hidden md:flex flex-col w-64 p-4 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 sticky top-0 h-screen">
          <div className="flex items-center mb-8">
            <Award className="w-8 h-8 mr-2 text-purple-700 dark:text-purple-400" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              Certifications
            </h1>
          </div>
          <nav className="flex-1">
            <ul>
              {menuItems.map((item) => (
                <li key={item.name} className="mb-2">
                  <button
                    onClick={() => setActiveSection(item.name)}
                    className={`flex items-center w-full p-2 rounded ${
                      activeSection === item.name
                        ? "bg-purple-700 text-white"
                        : "hover:bg-purple-100 dark:hover:bg-purple-800 text-gray-900 dark:text-white"
                    } transition-colors duration-300`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          {/* <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mt-auto flex items-center p-2 rounded hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors duration-300"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 mr-2" />
            ) : (
              <Moon className="w-5 h-5 mr-2" />
            )}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button> */}
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 bg-white dark:bg-gray-900 min-h-full transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-6 text-purple-700 dark:text-purple-400">
            {activeSection}
          </h2>
          {renderContent()}
        </main>

        {/* Mobile floating menu */}
        <div className="md:hidden fixed bottom-4 right-4 z-50">
          <button
            onClick={toggleSidebar}
            className="bg-purple-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition-colors duration-200"
          >
            <BookOpen className="w-6 h-6" />
          </button>
          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={toggleSidebar}
            >
              <div
                className="absolute bottom-16 right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 transform transition-transform duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-3 gap-3">
                  {menuItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => {
                        setActiveSection(item.name);
                        setIsOpen(false);
                      }}
                      className="flex flex-col items-center justify-center p-3 rounded-xl text-purple-700 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors duration-200"
                    >
                      {item.icon}
                      <span className="text-xs mt-1 text-center">
                        {item.name}
                      </span>
                    </button>
                  ))}
                  <button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="flex flex-col items-center justify-center p-3 rounded-xl text-purple-700 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors duration-200"
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="w-6 h-6" />
                        <span className="text-xs mt-1">Light</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-6 h-6" />
                        <span className="text-xs mt-1">Dark</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementShowcase;
