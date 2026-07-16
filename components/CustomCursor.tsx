'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for smooth delay
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const cursorSpringX = useSpring(cursorX, springConfig);
  const cursorSpringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor if fine pointer is detected (e.g. desktop)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) {
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Check if hovering an interactive element
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.classList.contains('cursor-pointer');

      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    // Apply class to HTML for styling overriding
    document.documentElement.classList.add('custom-cursor-active');

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Springing Halo */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference border border-rose-dusty select-none rounded-full"
        style={{
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.75 : isHovered ? 1.4 : 1,
          borderColor: isHovered ? '#A8C3A0' : '#D98C9D',
          borderWidth: isHovered ? '2px' : '1px',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.15 }}
      />

      {/* Inner Pinpoint Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-50 bg-rose-dusty select-none rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicked ? 0.5 : isHovered ? 0 : 1,
          backgroundColor: isHovered ? '#A8C3A0' : '#D98C9D',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.1 }}
      />
    </>
  );
}
