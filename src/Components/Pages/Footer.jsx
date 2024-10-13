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
          className="w-full lg:-mb-40 md:-mb-20 -mb-10 -z-10 h-auto"
          style={{ zIndex: 1 }}
        />
        
        <div className="relative z-20 h-auto py-12 bg-gradient-to-r from-[#9900EF] to-[#90d4ff]">
          <div className="container mx-auto px-4 text-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Let's build from here!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h2 className="font-bold text-xl mb-4">Projects</h2>
                <ul className="space-y-2">
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
                <h2 className="font-bold text-xl mb-4">Connect</h2>
                <ul className="space-y-2">
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
                <h2 className="font-bold text-xl mb-4">Navigate</h2>
                <ul className="space-y-2">
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
          className="relative bg-purple-950 py-6 px-4 text-white text-center"
          style={{ zIndex: 2 }}
        >
          <p className="text-sm">&copy; {currentYear} Jayanth Banglore.</p>
          {/* <div className="flex justify-center space-x-4 mt-4">
            {['facebook', 'instagram', 'github', 'twitter', 'reddit', 'youtube'].map((social) => (
              <a key={social} href={`#${social}`} className="hover:opacity-75">
                <span className="sr-only">{social}</span>
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </a>
            ))}
          </div> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;