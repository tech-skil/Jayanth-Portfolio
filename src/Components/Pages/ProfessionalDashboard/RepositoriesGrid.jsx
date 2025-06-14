import React, { useState, useEffect } from "react";
import { Star, GitFork, FileCode } from "lucide-react";
import { useTheme } from "next-themes";

const getLanguageColor = (language) => {
  const colors = {
    JavaScript: "bg-yellow-300 dark:bg-yellow-400/70",
    TypeScript: "bg-blue-400 dark:bg-blue-500/70",
    Python: "bg-blue-500 dark:bg-blue-600/70",
    HTML: "bg-orange-500 dark:bg-orange-600/70",
    CSS: "bg-purple-500 dark:bg-purple-600/70",
    Java: "bg-red-500 dark:bg-red-600/70",
  };
  return colors[language] || "bg-gray-400 dark:bg-gray-500/70";
};

const RepositoriesGrid = () => {
  const [repos, setRepos] = useState([
    {
      name: "tech-skill-portfolio",
      description:
        "A portfolio website showcasing technical skills and projects",
      language: "JavaScript",
      stars: 2,
      forks: 1,
    },
    {
      name: "react-components-library",
      description: "Collection of reusable React components with modern design",
      language: "TypeScript",
      stars: 3,
      forks: 0,
    },
    {
      name: "data-visualization-dashboard",
      description: "Interactive dashboard for data visualization using D3.js",
      language: "JavaScript",
      stars: 1,
      forks: 1,
    },
  ]);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/tech-skil/repos"
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-950 dark:text-gray-100 p-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
          Repositories
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
          A collection of my github repositories
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.name}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 
                hover:border-purple-600 dark:hover:border-purple-400 
                transition-all duration-300 
                bg-white dark:bg-gray-800 
                shadow-sm hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <FileCode className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2 transition-colors duration-300" />
                  <h3
                    className="text-lg font-semibold text-purple-600 dark:text-purple-400 
                    hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                  >
                    {repo.name}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm transition-colors duration-300">
                {repo.description}
              </p>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <span
                    className={`w-3 h-3 rounded-full ${getLanguageColor(
                      repo.language
                    )} mr-2 transition-colors duration-300`}
                  ></span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    {repo.language}
                  </span>
                </div>

                <div className="flex items-center text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  <Star className="w-4 h-4 mr-1" />
                  <span className="text-sm">{repo.stars}</span>
                </div>

                <div className="flex items-center text-gray-500 dark:text-gray-400 transition-colors duration-300">
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
