import React, { useEffect, useState } from 'react';

const MouseFollower = ({ locomotiveScroll }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!locomotiveScroll) return;

      // Get the current scroll position from Locomotive
      const scrollY = locomotiveScroll.scroll.instance.scroll.y || 0;
      const scrollX = locomotiveScroll.scroll.instance.scroll.x || 0;

      // Adjust position based on scroll offset
      setPosition({ x: e.clientX + scrollX, y: e.clientY + scrollY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [locomotiveScroll]);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-10 h-10 rounded-full bg-cyan-400 opacity-30 blur-md transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-linear"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default MouseFollower;
