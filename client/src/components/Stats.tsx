"use client";

import { stats } from "@/data/gym";
import { ScrollReveal } from "./ScrollReveal";

export function Stats() {
  return (
    <section className="bg-background border-b border-border">
      <div className="container mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border-light">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              delay={index * 0.1}
              className="text-center md:px-4"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm tracking-widest uppercase text-muted font-medium">
                {stat.label}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
