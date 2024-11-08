import React, { useRef, useEffect } from 'react';
import Tendril from './SpiralTwist';
import HueOscillator from './ColorVibeGenerator';

function MultiLlineRibbonsCursor(props) {
  const {
    debug = false,
    friction = 0.5,
    trails = 20,
    size = 50,
    dampening = 0.25,
    tension = 0.98,
  } = props;

  const canvasRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const tendrilsRef = useRef([]);
  const runningRef = useRef(false);
  const frameRef = useRef(0);

  const hue = new HueOscillator({
    phase: Math.random() * Math.PI * 2,
    amplitude: 85,
    frequency: 0.0015,
    offset: 285,
  });

  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (fn) {
      window.setTimeout(fn, 1000 / 60);
    };

  const init = (event) => {
    debug && console.log('init');
    document.removeEventListener('mousemove', init);
    document.removeEventListener('touchstart', init);

    document.addEventListener('mousemove', mousemove);
    document.addEventListener('touchmove', mousemove);
    document.addEventListener('touchstart', touchstart);

    mousemove(event);
    reset();
    loop();
  };

  const reset = () => {
    debug && console.log('reset');
    const tendrils = [];

    for (let i = 0; i < trails; i++) {
      tendrils.push(
        new Tendril({
          spring: 0.45 + 0.025 * (i / trails),
          size,
          tension,
          dampening,
          friction,
          targetRef,
          canvasRef,
        }),
      );
    }
    tendrilsRef.current = tendrils;
  };

  const loop = () => {
    debug && console.log('loop');

    if (!runningRef.current || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');

    const tendrils = tendrilsRef.current;
    const frame = frameRef.current;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    ctx.strokeStyle = 'hsla(' + Math.round(hue.update()) + ',90%,50%,0.25)';
    ctx.lineWidth = 1;

    if (frame % 60 == 0) {
      debug && console.log(hue.update(), Math.round(hue.update()), hue.phase, hue.offset, hue.frequency, hue.amplitude);
    }

    for (let i = 0, tendril; i < trails; i++) {
      tendril = tendrils[i];
      tendril.update();
      tendril.draw();
    }

    frameRef.current = frame + 1;
    requestAnimationFrame(loop);
  };

  const resize = () => {
    debug && console.log('resize');

    if (!canvasRef.current) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  };

  const start = () => {
    debug && console.log('start');
    if (!runningRef.current) {
      runningRef.current = true;
      loop();
    }
  };

  const stop = () => {
    debug && console.log('stop');
    runningRef.current = false;
  };

  const mousemove = (event) => {
    debug && console.log('mousemove');
    if (event.touches) {
      targetRef.current.x = event.touches[0].pageX;
      targetRef.current.y = event.touches[0].pageY;
    } else {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
    }
  };

  const touchstart = (event) => {
    debug && console.log('touchstart');
    if (event.touches.length == 1) {
      targetRef.current.x = event.touches[0].pageX;
      targetRef.current.y = event.touches[0].pageY;
    }
  };

  useEffect(() => {
    debug && console.log('useEffect');

    if (!canvasRef.current) {
      return;
    }

    runningRef.current = true;
    frameRef.current = 1;

    document.addEventListener('mousemove', init);
    document.addEventListener('touchstart', init);
    document.body.addEventListener('orientationchange', resize);
    window.addEventListener('resize', resize);
    window.addEventListener('focus', start);
    window.addEventListener('blur', stop);

    resize();

    return () => {
      document.removeEventListener('mousemove', init);
      document.removeEventListener('touchstart', init);
      document.body.removeEventListener('orientationchange', resize);
      window.removeEventListener('resize', resize);
      window.removeEventListener('focus', start);
      window.removeEventListener('blur', stop);
    };
  }, [canvasRef.current]);

  const styles = {
    position: 'fixed',
    zIndex: -100,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    cursor: 'none',
    pointerEvents: 'none',
  };

  return <canvas ref={canvasRef} style={styles}></canvas>;
}

export default MultiLlineRibbonsCursor 