import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react';

const AccomplishmentsSection = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b border-purple-300 last:border-b-0">
      <div
        className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-purple-100 transition-colors ${
          isExpanded ? 'bg-purple-100' : ''
        }`}
        onClick={toggleExpansion}
      >
        <h3 className="text-lg font-medium text-purple-700">{title}</h3>
        {isExpanded ? (
          <ChevronUpIcon className="w-6 h-6 text-purple-700" />
        ) : (
          <ChevronDownIcon className="w-6 h-6 text-purple-700" />
        )}
      </div>
      {isExpanded && (
        <div className="px-4 py-3 text-gray-700 transition-all duration-300 ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
};

const Accomplishments = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
      <AccomplishmentsSection title="Work">
        <ul className="space-y-2">
          <li>Collaborated with a team of developers to build a responsive web application</li>
          <li>Implemented new features and bug fixes for an existing software product</li>
          <li>Participated in daily standups and sprint planning meetings</li>
        </ul>
      </AccomplishmentsSection>

      <AccomplishmentsSection title="Projects">
        <ul className="space-y-2">
          <li>Developed a mobile app using React Native and Firebase</li>
          <li>Built a data visualization dashboard with React, D3.js, and Recharts</li>
          <li>Contributed to an open-source JavaScript library on GitHub</li>
        </ul>
      </AccomplishmentsSection>

      <AccomplishmentsSection title="Ongoing Projects">
        <ul className="space-y-2">
          <li>Working on a personal website using Next.js and Tailwind CSS</li>
          <li>Participating in a team project to create a web-based game</li>
          <li>Exploring machine learning with Python and the TensorFlow library</li>
        </ul>
      </AccomplishmentsSection>

      <AccomplishmentsSection title="Volunteership">
        <ul className="space-y-2">
          <li>Volunteered at a local food bank, helping to sort and package donations</li>
          <li>Participated in a tree-planting event to improve the environment</li>
          <li>Assisted with organizing a fundraising event for a non-profit organization</li>
        </ul>
      </AccomplishmentsSection>

      <AccomplishmentsSection title="Internships">
        <ul className="space-y-2">
          <li>Completed a summer internship at a tech startup, working on front-end development</li>
          <li>Interned at a government agency, gaining experience in data analysis and policy research</li>
          <li>Participated in a virtual internship program, learning about product management</li>
        </ul>
      </AccomplishmentsSection>

      <AccomplishmentsSection title="Achievements">
        <ul className="space-y-2">
          <li>Received the "Employee of the Month" award at my previous job</li>
          <li>Won a hackathon competition with a team, building a innovative solution</li>
          <li>Graduated with honors from my university program</li>
        </ul>
      </AccomplishmentsSection>

      <AccomplishmentsSection title="Research Work">
        <ul className="space-y-2">
          <li>Conducted research on the impact of social media on mental health</li>
          <li>Contributed to a scientific paper published in a peer-reviewed journal</li>
          <li>Presented research findings at a national conference</li>
        </ul>
      </AccomplishmentsSection>
    </div>
  );
};

export default Accomplishments;