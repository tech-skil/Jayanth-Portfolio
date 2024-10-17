import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const canvasRef = useRef(null);
  const timelineRef = useRef(null);

  const educationData = [
    { year: '2007-2012', school: 'Nano Jyoti Vidya Mandir School, Nalluru', details: 'LKG, UKG, 1st and 2nd standard' },
    { year: '2012-2017', school: 'Sri Vivekananda Higher Primary School', details: '2nd to 7th standard' },
    { year: '2017-2020', school: 'Sri Vivekananda High School, Sulebelle', details: '8th to 10th standard' },
    { year: '2020-2022', school: 'Devonnelli Government PU College', details: 'Pre-University' },
    { year: '2022-2025', school: 'Sri Venkateswara College of Engineering, Vidya Nagar', details: 'Bachelor\'s in Computer Science and Engineering' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const timelineGeometry = new THREE.BufferGeometry();
    const timelineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    const points = [];
    const spacing = 3; // Adjust spacing for timeline nodes

    for (let i = 0; i < educationData.length; i++) {
      points.push(new THREE.Vector3(0, -i * spacing, 0));
    }
    timelineGeometry.setFromPoints(points);

    const timelineLine = new THREE.Line(timelineGeometry, timelineMaterial);
    scene.add(timelineLine);

    const nodeGeometry = new THREE.SphereGeometry(0.15, 32, 32);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const nodes = educationData.map((_, index) => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(0, -index * spacing, 0);
      scene.add(node);
      return node;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // GSAP animations for scroll interactions
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: true, // Pins the section during scroll
        markers: false,
      },
    });

    // Camera movement along the Y-axis with scroll
    timeline.to(camera.position, {
      y: -(educationData.length - 1) * spacing,
      ease: 'none',
    });

    // Node scaling and color changes during scroll
    nodes.forEach((node, index) => {
      timeline.to(node.scale, {
        x: 2,
        y: 2,
        z: 2,
        duration: 0.5,
        ease: 'power2.inOut',
      }, `node${index}`);

      timeline.to(node.material.color, {
        r: 1,
        g: 0,
        b: 1, // Change to pink
        duration: 0.5,
        ease: 'power2.inOut',
      }, `node${index}`);

      // Revert node size and color
      if (index < nodes.length - 1) {
        timeline.to(node.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 0.5,
          ease: 'power2.inOut',
        }, `node${index + 1}-=0.5`);

        timeline.to(node.material.color, {
          r: 1,
          g: 1,
          b: 1, // Revert to white
          duration: 0.5,
          ease: 'power2.inOut',
        }, `node${index + 1}-=0.5`);
      }
    });

    // Cleanup function to dispose of scene and renderer on unmount
    return () => {
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      <div ref={timelineRef} className="relative z-10">
        <h1 className="text-4xl font-bold text-center py-8">My Education Journey</h1>
        {educationData.map((edu, index) => (
          <div key={index} className="min-h-screen flex items-center justify-center">
            <div className="max-w-md p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">{edu.year}</h2>
              <h3 className="text-xl mb-2">{edu.school}</h3>
              <p className="text-gray-300">{edu.details}</p>
            </div>
          </div>
        ))}
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-2xl font-semibold text-center p-6 bg-white bg-opacity-10 rounded-full">
            The learning process continues until the day you die.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
