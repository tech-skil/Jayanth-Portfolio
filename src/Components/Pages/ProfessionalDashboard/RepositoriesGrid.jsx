import React, { useState, useEffect } from 'react';
import { Star, GitFork, FileCode } from 'lucide-react';

const getLanguageColor = (language) => {
  const colors = {
    JavaScript: 'bg-yellow-300',
    TypeScript: 'bg-blue-400',
    Python: 'bg-blue-500',
    HTML: 'bg-orange-500',
    CSS: 'bg-purple-500',
    Java: 'bg-red-500'
  };
  return colors[language] || 'bg-gray-400';
};

const RepositoriesGrid = () => {
  const [repos, setRepos] = useState([
    {
      name: 'tech-skill-portfolio',
      description: 'A portfolio website showcasing technical skills and projects',
      language: 'JavaScript',
      stars: 2,
      forks: 1,
    },
    {
      name: 'react-components-library',
      description: 'Collection of reusable React components with modern design',
      language: 'TypeScript',
      stars: 3,
      forks: 0,
    },
    {
      name: 'data-visualization-dashboard',
      description: 'Interactive dashboard for data visualization using D3.js',
      language: 'JavaScript',
      stars: 1,
      forks: 1,
    }
  ]);

  useEffect(() => {
    // Note: Commented out actual API call to prevent rate limiting during testing
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/tech-skil/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-950 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">repositories</h1>
        <p className="text-gray-50 mb-8">A collection of my github repositories</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <div 
              key={repo.name}
              className="border border-stone-700 rounded-lg p-6 hover:border-purple-600 transition-all duration-300 bg-stone-800/15cls backdrop-blur"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <FileCode className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="text-lg font-semibold text-purple-600 hover:text-purple-300 transition-colors">
                    {repo.name}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-800 mb-4 text-sm">{repo.description}</p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <span className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)} mr-2`}></span>
                  <span className="text-sm text-gray-400">{repo.language}</span>
                </div>
                
                <div className="flex items-center text-gray-400">
                  <Star className="w-4 h-4 mr-1" />
                  <span className="text-sm">{repo.stars}</span>
                </div>
                
                <div className="flex items-center text-gray-400">
                  <GitFork className="w-4 h-4 mr-1" />
                  <span className="text-sm">{repo.forks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepositoriesGrid;