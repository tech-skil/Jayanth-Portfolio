import React, { useState } from 'react';
import { Menu, X, Award, Sun, Moon } from 'lucide-react';
import ProjectList from './ProjectList';
import Resume from './ProfessionalDashboard/Resume';
import Cirtification from './ProfessionalDashboard/Cirtification';
import RepositoriesGrid from './ProfessionalDashboard/RepositoriesGrid';
import Navbar from './Navbar';

const AchievementShowcase = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Accomplishments');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    { name: 'Projects', icon: '💼', content: <ProjectList/> },
    { name: 'Resume', icon: '📄', content: <Resume/> },
    { name: 'Tools', icon: '🔧', content: 'Tools content goes here' },
    { name: 'Repository', icon: '📁', content: <RepositoriesGrid/> },
    { name: 'Certification', icon: '📁', content: <Cirtification/> },
    { name: 'Competitions', icon: '🏆', content: 'Competitions content goes here' },
    { name: 'Research Papers', icon: '📄', content: 'Research Papers content goes here' },

  ];

  const certifications = [
    { id: 1, title: 'Think in a Redux way', image: '/api/placeholder/300/200' },
    { id: 2, title: 'HTML & JavaScript Certification', image: '/api/placeholder/300/200' },
    // Add more certifications as needed
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const renderContent = () => {
    const item = menuItems.find(item => item.name === activeSection);
    if (item) {
      return <p>{item.content}</p>;
    }
    return (
      <>
      <ProjectList/>  
      </>
    );
  };

  return (
    <div className='lg:mx-auto bg-white lg:container'>
      <Navbar 
      />
    
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white  text-gray-900'}`}>
      {/* Sidebar for desktop */}
      <aside className={`hidden md:flex flex-col w-64 p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="flex items-center mb-8">
          <Award className="w-8 h-8 mr-2 text-purple-700" />
          <h1 className="text-xl font-bold">Certifications</h1>
        </div>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mb-2">
                <button
                  onClick={() => setActiveSection(item.name)}
                  className={`flex items-center w-full p-2 rounded ${
                    activeSection === item.name 
                      ? 'bg-purple-700 text-white' 
                      : `hover:bg-purple-100 ${isDarkMode ? 'text-white hover:text-gray-900' : 'text-gray-900'}`
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="mt-auto flex items-center p-2 rounded hover:bg-purple-100"
        >
          {isDarkMode ? <Sun className="w-5 h-5 mr-2" /> : <Moon className="w-5 h-5 mr-2" />}
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-visible">
        <h2 className="text-3xl font-bold mb-6 text-purple-700">{activeSection}</h2>
        {renderContent()}
      </main>

      {/* Mobile floating menu */}
      <div className="md:hidden fixed bottom-4 right-4">
        <button 
          onClick={toggleSidebar}
          className="bg-purple-700   text-white p-3 rounded-full shadow-lg"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        {isOpen && (
          <div className={`absolute bottom-16 right-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-2`}>
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  setActiveSection(item.name);
                  setIsOpen(false);
                }}
                className={`block p-2 mb-1 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-purple-700 hover:bg-purple-100'} rounded`}
              >
                {item.icon}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`block p-2 ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-purple-700 hover:bg-purple-100'} rounded`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        )}
      </div>
    </div>
    </div>

  );
};

export default AchievementShowcase;