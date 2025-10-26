"use client";
import { Card } from "@mantine/core";
import { getRandomHoverColor } from "@/constants/data";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverableCardProps {
  children: ReactNode;
  initial?: object;
  whileInView?: object;
  viewport?: object;
  transition?: object;
  delay?: number;
  style?: React.CSSProperties;
}

export const HoverableCard = ({
  children,
  initial,
  whileInView,
  viewport,
  transition,
  delay = 0,
  style,
}: HoverableCardProps) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const randomColor = getRandomHoverColor();
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.borderColor = randomColor;
    e.currentTarget.style.boxShadow = `0 8px 32px ${randomColor.replace(
      "0.5",
      "0.2"
    )}`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <motion.div
      initial={initial || { opacity: 0, y: 20 }}
      whileInView={whileInView || { opacity: 1, y: 0 }}
      viewport={viewport || { once: true }}
      transition={transition || { duration: 0.5, delay }}
    >
      <Card
        withBorder
        radius="md"
        p="lg"
        style={{
          height: "100%",
          transition: "all 0.3s ease",
          ...style,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Card>
    </motion.div>
  );
};
