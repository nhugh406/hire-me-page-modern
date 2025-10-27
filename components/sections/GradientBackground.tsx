"use client";

import { motion } from "framer-motion";

export const GradientBackground = () => {
  return (
    <div
      style={{
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {/* Animated gradient orbs */}
      <motion.div
        style={{
          position: "absolute",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          top: "-400px",
          left: "-400px",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 150, -150, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          bottom: "-300px",
          right: "-300px",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -120, 120, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, 80, -80, 0],
          y: [0, 60, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          top: "30%",
          right: "15%",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, -60, 60, 0],
          y: [0, -80, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 15,
        }}
      />
    </div>
  );
};
