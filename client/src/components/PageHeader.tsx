"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export function PageHeader({ title, description, image = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/banner.png` }: PageHeaderProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-background/80 bg-gradient-to-t from-near-black to-transparent" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display uppercase tracking-wide mb-6"
        >
          {title}
        </motion.h1>
        
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto font-light"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
