import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-amber-400 to-cyan-400 origin-left z-50 pointer-events-none shadow-[0_0_12px_rgba(0,229,255,0.6)]"
      style={{ scaleX }}
    />
  );
};
