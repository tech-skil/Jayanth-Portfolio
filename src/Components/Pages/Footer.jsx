import React from 'react';
import waveSvg from '../../assets/images/wave1.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer relative container mx-auto sm:drop-shadow-lg flex justify-center h-full w-full">
      <footer className="mb-0 lg:max-w-[110rem] 2xl:max-w-[170rem] xl:max-w-[100rem] w-full">
        <img
          src={waveSvg}
          alt="wave"
          className="top-[-10rem] w-full h-auto"
          style={{ zIndex: 1 }}
        />
        
        <div className="h-24 sm:h-32 md:h-40 lg:h-28 bg-gradient-to-r from-[#9900EF] to-[#90d4ff]">
          <div className="container mx-auto px-4 py-8 flex justify-center items-center text-white absolute bottom-36">
            <h1 className="text-4xl font-bold mb-8">Let's build from here!</h1>
            <div className="grid grid-cols-3 gap-4 justify-center items-center">
              <div>
                <h2 className="font-bold mb-2">Projects</h2>
                <ul className="text-sm">
                  <li>Tsukiwa</li>
                  <li>Realpop</li>
                  <li>Student Portal App</li>
                  <li>Apes Together Str...</li>
                  <li>Interactive Chatb...</li>
                  <li>Sassy CSS</li>
                  <li>Kamote School Ad...</li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2">Connect</h2>
                <ul className="text-sm">
                  <li>AniList</li>
                  <li>Facebook</li>
                  <li>Instagram</li>
                  <li>GitHub</li>
                  <li>Twitter X</li>
                  <li>Reddit</li>
                  <li>YouTube</li>
                </ul>
              </div>
              <div>
                <h2 className="font-bold mb-2">Navigate</h2>
                <ul className="text-sm">
                  <li>Home</li>
                  <li>About</li>
                  <li>Projects</li>
                  <li>Timeline</li>
                  <li>More</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative bg-purple-950 p-4 text-white text-center"
          style={{ zIndex: 2 }}
        >
          <p>&copy; {currentYear} Moonbami. Philippines.</p>
          <div className="flex justify-center space-x-4 mt-2">
            {['facebook', 'instagram', 'github', 'twitter', 'reddit', 'youtube'].map((social) => (
              <a key={social} href={`#${social}`} className="hover:opacity-75">
                <span className="sr-only">{social}</span>
                {/* Replace with actual social media icons */}
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </a>
            ))}
          </div>
          <p className="mt-2">v2.6.0</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;