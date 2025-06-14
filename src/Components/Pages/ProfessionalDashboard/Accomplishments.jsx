import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import { useTheme } from "next-themes";

const AccomplishmentsSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b border-purple-300 dark:border-purple-700 last:border-b-0">
      <div
        className={`flex items-center justify-between px-4 py-3 cursor-pointer 
          hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors 
          ${isExpanded ? "bg-purple-100 dark:bg-purple-900/50" : ""}`}
        onClick={toggleExpansion}
      >
        <h3 className="text-lg font-medium text-purple-700 dark:text-purple-400 transition-colors duration-300">
          {title}
        </h3>
        {isExpanded ? (
          <ChevronUpIcon className="w-6 h-6 text-purple-700 dark:text-purple-400 transition-colors duration-300" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-purple-700 dark:text-purple-400 transition-colors duration-300" />
        )}
      </div>
      {isExpanded && (
        <div className="px-4 py-3 text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
};

const Accomplishments = () => {
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 lg:p-8 transition-colors duration-300">
      <AccomplishmentsSection title="Work">
        <ul className="space-y-2">
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Collaborated with a team of developers to build a responsive web
            application
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Implemented new features and bug fixes for an existing software
            product
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Participated in daily standups and sprint planning meetings
          </li>
        </ul>
      </AccomplishmentsSection>

      <AccomplishmentsSection title="Projects">
        <ul className="space-y-2">
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Developed a mobile app using React Native and Firebase
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Built a data visualization dashboard with React, D3.js, and Recharts
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Contributed to an open-source JavaScript library on GitHub
          </li>
        </ul>
      </AccomplishmentsSection>

      <AccomplishmentsSection title="Ongoing Projects">
        <ul className="space-y-2">
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Working on a personal website using Next.js and Tailwind CSS
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Participating in a team project to create a web-based game
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Exploring machine learning with Python and the TensorFlow library
          </li>
        </ul>
      </AccomplishmentsSection>

      <AccomplishmentsSection title="Volunteership">
        <ul className="space-y-2">
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Volunteered at a local food bank, helping to sort and package
            donations
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Participated in a tree-planting event to improve the environment
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Assisted with organizing a fundraising event for a non-profit
            organization
          </li>
        </ul>
      </AccomplishmentsSection>

      <AccomplishmentsSection title="Internships">
        <ul className="space-y-2">
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Completed a summer internship at a tech startup, working on
            front-end development
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Interned at a government agency, gaining experience in data analysis
            and policy research
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Participated in a virtual internship program, learning about product
            management
          </li>
        </ul>
      </AccomplishmentsSection>

      <AccomplishmentsSection title="Achievements">
        <ul className="space-y-2">
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Received the "Employee of the Month" award at my previous job
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Won a hackathon competition with a team, building a innovative
            solution
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Graduated with honors from my university program
          </li>
        </ul>
      </AccomplishmentsSection>

      <AccomplishmentsSection title="Research Work">
        <ul className="space-y-2">
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Conducted research on the impact of social media on mental health
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Contributed to a scientific paper published in a peer-reviewed
            journal
          </li>
          <li className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            Presented research findings at a national conference
          </li>
        </ul>
      </AccomplishmentsSection>
    </div>
  );
};

export default Accomplishments;
