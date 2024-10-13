import React, { useMemo, useEffect, useState } from 'react';

const BackgroundAnimation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const colorSchemes = [
    'linear-gradient(45deg, rgba(110, 0, 255, 0.2), rgba(234, 0, 255, 0.2))',
    'rgba(0, 174, 255, 0.2)',
    'rgba(234, 0, 255, 0.2)',
    'rgba(110, 0, 255, 0.2)',
    'rgba(169, 21, 233, 0.2)',
  ];

  const generateCircle = (existingCircles) => {
    const isMobile = windowWidth <= 108;
    const minSize = isMobile ? 8 : 16;
    const maxSize = isMobile ? 72 : 154;
    const size = Math.floor(Math.random() * (maxSize - minSize + 1) + minSize);
    
    const newCircle = {
      left: `${Math.random() * 90 + 10}%`,
      width: `${size}px`,
      height: `${size}px`,
      background: colorSchemes[Math.floor(Math.random() * colorSchemes.length)],
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 10 + 15}s`,
      opacity: Math.random() * 0.15 + 0.15,
    };

    const doesOverlap = existingCircles.some((circle) => {
      const circleLeft = parseFloat(newCircle.left) / 100 * windowWidth;
      const circleWidth = size;
      const circleRight = circleLeft + circleWidth;

      const existingLeft = parseFloat(circle.left) / 100 * windowWidth;
      const existingWidth = parseFloat(circle.width);
      const existingRight = existingLeft + existingWidth;

      return (
        circleLeft < existingRight &&
        circleRight > existingLeft
      );
    });

    return doesOverlap ? null : newCircle;
  };

  const circles = useMemo(() => {
    const generatedCircles = [];
    let attempts = 0;
    const maxAttempts = 100; 

    while (generatedCircles.length < 10 && attempts < maxAttempts) {
      const newCircle = generateCircle(generatedCircles);
      if (newCircle) {
        generatedCircles.push(newCircle);
      }
      attempts++;
    }

    return generatedCircles;
  }, [windowWidth]);

  const containerStyle = {
    position: 'absolute',
    inset: 0,
    zIndex: -10,
    overflow: 'hidden',
  };

  const ulStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  };

  const getCircleStyle = (circle) => ({
    position: 'absolute',
    display: 'block',
    listStyle: 'none',
    bottom: '-150px',
    left: circle.left,
    width: circle.width,
    height: circle.height,
    background: circle.background,
    animation: `animate ${circle.animationDuration} linear infinite`,
    animationDelay: circle.animationDelay,
    opacity: circle.opacity,
    borderRadius: '50%',
  });

  return (
    <>
      <style>
        {`
          @keyframes animate {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
              border-radius: 0;
            }
            100% {
              transform: translateY(-1000px) rotate(720deg);
              opacity: 0.4;
              border-radius: 40%;
            }
          }
        `}
      </style>
      <div style={containerStyle}>
        <ul style={ulStyle}>
          {circles.map((circle, index) => (
            <li key={index} style={getCircleStyle(circle)}></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BackgroundAnimation;
