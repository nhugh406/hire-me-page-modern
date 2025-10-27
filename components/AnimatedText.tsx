"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  duration?: number;
};

export const AnimatedText = ({
  text,
  className = "",
  duration = 0.5,
}: AnimatedTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  // Split text into words for word-by-word animation
  const words = text.split(" ");

  return (
    <div
      ref={ref}
      className={className}
      style={{ overflow: "hidden", display: "inline-block" }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 100 }}
              animate={
                hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
              }
              transition={{
                duration,
                delay: wordIndex * 0.1 + charIndex * 0.02,
                ease: "easeOut",
              }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};
