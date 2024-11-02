import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Enhanced smooth scroll animation
  const scrollToTop = () => {
    const duration = 2500; // 2.5 seconds for slower animation
    const start = window.pageYOffset;
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Custom easing function for ultra-smooth motion
      const easeOutExpo = t => {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      };

      window.scrollTo({
        top: start * (1 - easeOutExpo(progress)),
        behavior: 'auto' // We're handling the smooth scroll manually
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 transition-all duration-500 transform hover:-translate-y-2 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="w-14 h-14 bg-purple-600 rounded-2xl shadow-lg flex items-center justify-center hover:bg-purple-700 transition-colors duration-300">
          {/* <FontAwesomeIcon icon={faHandPointer} beat size="2x" /> */}
          <FontAwesomeIcon icon={faHandPointer} beat size="2x" className='text-white' />
          </div>
          {/* Optional floating animation */}
          <div className="absolute inset-0 rounded-2xl bg-purple-400 opacity-20 animate-pulse -z-10"></div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;