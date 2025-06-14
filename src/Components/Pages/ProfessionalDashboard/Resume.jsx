import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Globe,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "next-themes";

const CustomButton = ({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-purple-600 dark:bg-purple-700 hover:bg-purple-700 dark:hover:bg-purple-800 text-white focus:ring-purple-500",
    outline:
      "border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-200 focus:ring-purple-500",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const CustomCard = ({ children, className = "" }) => (
  <div
    className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300 ${className}`}
  >
    {children}
  </div>
);

const CustomProgress = ({ value }) => (
  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
    <div
      className="bg-purple-600 dark:bg-purple-500 h-2 rounded-full transition-all duration-300"
      style={{ width: `${value}%` }}
    />
  </div>
);

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { theme } = useTheme();

  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "MongoDB", level: 70 },
  ];

  const languages = [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native" },
    { name: "Kannada", level: "Native" },
  ];

  const education = [
    {
      degree: "B.E. IN COMPUTER SCIENCE AND ENGINEERING",
      period: "2021 - Present",
      institution: "Visvesvaraya Technological University, Belgaum",
      score: "CGPA - 8.5",
    },
    {
      degree: "PRE-UNIVERSITY",
      period: "2019 - 2021",
      institution: "Government PU College, Bengaluru",
      score: "Percentage - 85.52%",
    },
  ];

  const handleDownload = async () => {
    setIsDownloading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsDownloading(false);
  };

  const Section = ({ title, children }) => (
    <section className="space-y-6" aria-labelledby={title.toLowerCase()}>
      <div className="flex items-center gap-3 mb-2">
        <h2
          id={title.toLowerCase()}
          className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300"
        >
          {title}
        </h2>
        <div className="h-[1px] flex-grow bg-purple-500/30"></div>
      </div>
      {children}
    </section>
  );

  const ContactItem = ({ icon: Icon, text, href, label }) => (
    <a
      href={href}
      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
      aria-label={label}
    >
      <Icon size={16} className="text-purple-500 dark:text-purple-400" />
      <span>{text}</span>
    </a>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-12 px-4 md:px-8 font-sans transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-400 dark:to-purple-600 bg-clip-text text-transparent">
            Jauanth B R
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto transition-colors duration-300">
            Full Stack Developer | Computer Science Engineering Student
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8">
            <ContactItem
              icon={Mail}
              text="jayanthjay295@gmail.com"
              href="mailto:jayanthjay295@gmail.com"
              label="Email address"
            />
            <ContactItem
              icon={Phone}
              text="+91 9008375074"
              href="tel:+919008375074"
              label="Phone number"
            />
            <ContactItem
              icon={MapPin}
              text="Bengaluru Rural, IN"
              href="#"
              label="Location"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CustomButton
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full sm:w-auto"
            >
              <Download className="mr-2 h-4 w-4" />
              {isDownloading ? "Downloading..." : "Download Resume"}
            </CustomButton>
            <CustomButton variant="outline" className="w-full sm:w-auto">
              <Globe className="h-4 w-4 mr-2" />
              Github
            </CustomButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                Summary
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2 transition-colors duration-300"></div>
                  <div>
                    <h3 className="text-purple-600 dark:text-purple-400 font-semibold mb-2 transition-colors duration-300">
                      Jayanth B R
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                      A fresher with an exposure to web design and service
                      development, currently working on various projects,
                      maintaining web applications, developing automated
                      services, handling data analytics.
                    </p>
                    <div className="mt-4 space-y-1 text-sm">
                      <p className="text-gray-800 dark:text-gray-200">
                        Bengaluru Rural, IN
                      </p>
                      <p className="text-purple-600 dark:text-purple-400">
                        +91 9008375074
                      </p>
                      <p className="text-purple-600 dark:text-purple-400">
                        Jauanth B R@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2 transition-colors duration-300"></div>
                    <div>
                      <h3 className="text-purple-600 dark:text-purple-400 font-semibold">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic my-1">
                        {edu.period}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {edu.score}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                Skills
              </h2>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="mb-4 last:mb-0">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <CustomProgress value={skill.level} />
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                Languages
              </h2>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="mb-4 last:mb-0">
                    <div className="flex justify-between">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-sm text-purple-600 dark:text-purple-400">
                        {lang.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                Work Experience
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "WEB DEVELOPMENT INTERN",
                    company: "IBM-EduNetwork Partners",
                    period: "06/2023 - 07/2023",
                    location: "Bengaluru, India",
                    achievements: [
                      "Led front-end development of an Amazon clone project using HTML, CSS, and JavaScript",
                      "Developed interactive user interfaces and integrated with Java router backend",
                      "Contributed creative solutions in team meetings for project enhancement",
                    ],
                  },
                  {
                    title: "FULL STACK DEVELOPER - PERSONAL PROJECT",
                    company: "Remote Work",
                    period: "05/2023 - Present",
                    achievements: [
                      "Developed and deployed Smart Tourism application using MERN stack",
                      "Integrated Gemini API for AI-powered chatbot functionality",
                      "Implemented responsive design patterns and modern UI/UX principles",
                    ],
                  },
                  {
                    title: "REACT DEVELOPER - INTERN",
                    company: "Tech Innovations Lab",
                    period: "01/2023 - 03/2023",
                    location: "Bengaluru, India",
                    achievements: [
                      "Built dynamic news application with infinite scroll mechanism",
                      "Implemented category-specific browsing and search functionality",
                      "Integrated dark mode and responsive design using Tailwind CSS",
                    ],
                  },
                ].map((exp, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2 transition-colors duration-300"></div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <h3 className="text-purple-600 dark:text-purple-400 font-semibold">
                          {exp.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 sm:mt-0">
                          {exp.period}
                        </p>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        {exp.company}
                        {exp.location && `, ${exp.location}`}
                        {exp.company !== "Remote Work" && (
                          <span className="text-purple-600 dark:text-purple-400 cursor-pointer hover:text-purple-700 dark:hover:text-purple-500">
                            {" "}
                            - click to visit
                          </span>
                        )}
                      </p>
                      <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>• {achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
                Achievements
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "TATA INNOVATION HACKATHON 2024",
                    period: "01/2024 - 02/2024",
                    description:
                      "Developed solution for smart tourism with AI-powered chatbot integration for enhanced user experience and destination guidance.",
                  },
                  {
                    title: "GEMINI API DEVELOPER COMPETITION",
                    period: "03/2024 - 04/2024",
                    description:
                      "Developed innovative solutions using Gemini API for advanced metrics and performance insights in web applications.",
                  },
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mt-2 transition-colors duration-300"></div>
                    <div>
                      <h3 className="text-purple-600 dark:text-purple-400 font-semibold">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic my-1">
                        {achievement.period}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
