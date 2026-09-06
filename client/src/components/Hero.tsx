"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import Link from "next/link";
import { heroImages } from "@/data/gym";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle scale animation */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImages[0]})` }}
        />
        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-background/70 bg-gradient-to-t from-near-black via-near-black/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold font-display tracking-[0.3em] text-sm md:text-base font-medium mb-6 block uppercase">
              The Lion Fitness 2.0
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-display uppercase leading-[0.9] tracking-wide mb-8"
          >
            Train Like <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              A Lion.
            </span>
            <br />
            Become Unstoppable.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/80 max-w-xl mb-10 font-light"
          >
            Build strength. Build confidence. Build the strongest version of yourself. Your next level starts with one decision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/membership">
              <Button size="lg" className="w-full sm:w-auto" withArrow>
                Join Now
              </Button>
            </Link>
            <Link href="/facilities">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Explore The Gym
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-widest text-foreground/50 font-display">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
