"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  width?: "fit-content" | "100%";
  animation?: "fadeUp" | "fadeIn" | "scaleIn";
  delay?: number;
  duration?: number;
  centered?: boolean;
}

export const ScrollReveal = ({
  children,
  className,
  width = "100%",
  animation = "fadeUp",
  delay = 0,
  duration = 0.5,
  centered = false,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const variants: Record<string, Variants> = {
    fadeUp: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <div ref={ref} style={{ width }} className={cn("overflow-hidden", centered && "flex flex-col items-center", className)}>
      <motion.div
        variants={variants[animation]}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay, ease: [0.25, 0.25, 0, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
};
