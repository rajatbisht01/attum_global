'use client';
import { motion } from "framer-motion";
import React from "react";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  enableBlur = false,
  blurStrength = 6, 
  scrollOnce=true
}) => {
  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return { y: 80 };
      case "down":
        return { y: -80 };
      case "left":
        return { x: -120 };
      case "right":
        return { x: 120 };
      default:
        return { y: 20 };
    }
  };

  return (
    <motion.div
      className={className}
      style={{
        filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
      }}
      initial={{
        opacity: 0,
        ...getInitialTransform(),
        filter: enableBlur ? `blur(${blurStrength}px)` : "blur(0px)",
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once: scrollOnce, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
