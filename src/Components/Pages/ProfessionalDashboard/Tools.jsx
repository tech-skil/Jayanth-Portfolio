import React from "react";
import { useTheme } from "next-themes";
import {
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaCloud,
  FaServer,
  FaCode,
  FaPalette,
  FaBox,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaDocker,
  FaGithub,
  FaAws,
  FaJenkins,
  FaWindows,
  FaUbuntu,
  FaLinux,
  FaGit,
  // FaFirebase,
  FaJs,
  FaPython,
  FaMicrosoft,
  FaTools,
  FaGlobe,
} from "react-icons/fa";

// Skill level component with stars
const SkillLevel = ({ level, maxLevel = 4 }) => (
  <div className="flex gap-1">
    {[...Array(maxLevel)].map((_, i) => (
      <span
        key={i}
        className={`w-4 h-4 ${
          i < level
            ? "text-yellow-400 dark:text-yellow-300"
            : "text-gray-300 dark:text-gray-600"
        } transition-colors duration-300`}
      >
        ★
      </span>
    ))}
  </div>
);

// Individual tool/tech card component
const TechCard = ({
  name,
  icon: Icon,
  level,
  description,
  iconBg,
  iconColor,
}) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg transition-all duration-300 hover:scale-105">
    <div className="flex items-center gap-3 mb-2">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-lg ${iconBg} dark:bg-opacity-10`}
      >
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300">
          {name}
        </h3>
        <SkillLevel level={level} />
      </div>
    </div>
    {description && (
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300">
        {description}
      </p>
    )}
  </div>
);

// Category section component
const CategorySection = ({ title, icon: Icon, tools }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 transition-colors duration-300">
        <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
        {title}
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool) => (
        <TechCard key={tool.name} {...tool} />
      ))}
    </div>
  </div>
);

const Tools = () => {
  const { theme } = useTheme();
  const categories = [
    {
      title: "Frontend Development",
      icon: FaCode,
      tools: [
        {
          name: "React",
          icon: FaReact,
          level: 4,
          description: "Primary frontend framework",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-500",
        },
        {
          name: "Vue.js",
          icon: FaVuejs,
          level: 2,
          description: "Progressive JavaScript framework",
          iconBg: "bg-green-50",
          iconColor: "text-green-500",
        },
        {
          name: "HTML5/CSS3",
          icon: FaHtml5,
          level: 4,
          description: "Core web technologies",
          iconBg: "bg-orange-50",
          iconColor: "text-orange-500",
        },
        {
          name: "Tailwind CSS",
          icon: FaCss3,
          level: 3,
          description: "Utility-first CSS framework",
          iconBg: "bg-cyan-50",
          iconColor: "text-cyan-500",
        },
        {
          name: "JavaScript",
          icon: FaJs,
          level: 3,
          description: "Core programming language",
          iconBg: "bg-yellow-50",
          iconColor: "text-yellow-500",
        },
        {
          name: "jQuery",
          icon: FaCode,
          level: 2,
          description: "JavaScript library",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: FaServer,
      tools: [
        {
          name: "Node.js",
          icon: FaNodeJs,
          level: 4,
          description: "JavaScript runtime",
          iconBg: "bg-green-50",
          iconColor: "text-green-600",
        },
        {
          name: "Express",
          icon: FaNodeJs,
          level: 4,
          description: "Web framework for Node.js",
          iconBg: "bg-gray-100",
          iconColor: "text-gray-600",
        },
        {
          name: "Django",
          icon: FaPython,
          level: 3,
          description: "Python web framework",
          iconBg: "bg-green-50",
          iconColor: "text-green-700",
        },
        {
          name: "Java",
          icon: FaJava,
          level: 3,
          description: "Enterprise applications",
          iconBg: "bg-red-50",
          iconColor: "text-red-500",
        },
        {
          name: "C#",
          icon: FaMicrosoft,
          level: 2,
          description: ".NET development",
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
        },
        {
          name: "PHP",
          icon: FaPhp,
          level: 2,
          description: "Server-side scripting",
          iconBg: "bg-indigo-50",
          iconColor: "text-indigo-500",
        },
      ],
    },
    {
      title: "Databases",
      icon: FaDatabase,
      tools: [
        {
          name: "MongoDB",
          icon: FaDatabase,
          level: 4,
          description: "NoSQL database",
          iconBg: "bg-green-50",
          iconColor: "text-green-500",
        },
        {
          name: "MySQL",
          icon: FaDatabase,
          level: 3,
          description: "Relational database",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-500",
        },
        {
          name: "PostgreSQL",
          icon: FaDatabase,
          level: 3,
          description: "Advanced SQL database",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
        },
        {
          name: "Redis",
          icon: FaDatabase,
          level: 2,
          description: "In-memory data store",
          iconBg: "bg-red-50",
          iconColor: "text-red-500",
        },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: FaCloud,
      tools: [
        {
          name: "Git",
          icon: FaGit,
          level: 4,
          description: "Version control",
          iconBg: "bg-orange-50",
          iconColor: "text-orange-500",
        },
        {
          name: "Docker",
          icon: FaDocker,
          level: 3,
          description: "Containerization",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-500",
        },
        // { name: 'Firebase', icon: FaFirebase, level: 3, description: 'Backend as a Service', iconBg: 'bg-yellow-50', iconColor: 'text-yellow-600' },
        {
          name: "AWS",
          icon: FaAws,
          level: 2,
          description: "Cloud services",
          iconBg: "bg-orange-50",
          iconColor: "text-orange-500",
        },
        {
          name: "Jenkins",
          icon: FaJenkins,
          level: 2,
          description: "CI/CD",
          iconBg: "bg-red-50",
          iconColor: "text-red-500",
        },
      ],
    },
    {
      title: "Operating Systems",
      icon: FaWindows,
      tools: [
        {
          name: "Windows",
          icon: FaWindows,
          level: 4,
          description: "Primary development OS",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-500",
        },
        {
          name: "Ubuntu",
          icon: FaUbuntu,
          level: 3,
          description: "Linux distribution",
          iconBg: "bg-orange-50",
          iconColor: "text-orange-500",
        },
        {
          name: "Debian",
          icon: FaLinux,
          level: 2,
          description: "Linux distribution",
          iconBg: "bg-red-50",
          iconColor: "text-red-500",
        },
      ],
    },
    {
      title: "Tools & IDEs",
      icon: FaTools,
      tools: [
        {
          name: "VS Code",
          icon: FaCode,
          level: 4,
          description: "Primary code editor",
          iconBg: "bg-blue-50",
          iconColor: "text-blue-500",
        },
        {
          name: "Postman",
          icon: FaGlobe,
          level: 3,
          description: "API testing",
          iconBg: "bg-orange-50",
          iconColor: "text-orange-500",
        },
        {
          name: "Eclipse",
          icon: FaJava,
          level: 2,
          description: "Java IDE",
          iconBg: "bg-purple-50",
          iconColor: "text-purple-500",
        },
        {
          name: "GitHub",
          icon: FaGithub,
          level: 4,
          description: "Version control platform",
          iconBg: "bg-gray-100",
          iconColor: "text-gray-700",
        },
      ],
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-black text-gray-800 dark:text-white mb-4 transition-colors duration-300">
          Full Stack Developer
        </h1>
        <p className="text-purple-600 dark:text-purple-400 max-w-2xl mx-auto font-medium transition-colors duration-300">
          Passionate about building end-to-end solutions with modern
          technologies. Experienced in both frontend and backend development,
          with a focus on creating scalable and maintainable applications.
        </p>
      </div>

      <div className="space-y-16">
        {categories.map((category) => (
          <CategorySection
            key={category.title}
            title={category.title}
            icon={category.icon}
            tools={category.tools}
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
