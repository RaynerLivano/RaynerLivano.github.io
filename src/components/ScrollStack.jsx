import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollStackItem = ({ children, index, totalItems }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Remove fade effects, only use scale and y transform
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1]); // No scale change
  const y = useTransform(scrollYProgress, [0, 1], [0, 0]); // No vertical movement
  const borderRadius = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 12, 12, 0]);

  return (
    <motion.div
      ref={ref}
      className="h-screen w-full sticky top-0 overflow-hidden"
      style={{
        scale,
        y,
        borderRadius
      }}
    >
      <div className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};

const ScrollStack = ({ children }) => {
  const containerRef = useRef(null);

  return (
    <div 
      ref={containerRef}
      className="relative w-full"
    >
      {React.Children.map(children, (child, index) => (
        React.cloneElement(child, {
          index,
          totalItems: React.Children.count(children)
        })
      ))}
    </div>
  );
};

export default ScrollStack;