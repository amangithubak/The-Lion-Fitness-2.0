"use client";

import Image from "next/image";
import { trainers } from "@/data/gym";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

export function Trainers() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal centered>
          <SectionHeading
            centered
            eyebrow="The Team"
            title="Meet the coaches."
            description="Our trainers are industry professionals dedicated to helping you achieve your goals."
            className="mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <ScrollReveal key={trainer.name} delay={index * 0.1}>
              <div className="group relative bg-card overflow-hidden border border-border">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 transform transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="text-gold font-display text-xs tracking-[0.2em] uppercase font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {trainer.specialty}
                  </div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-widest mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-muted text-sm uppercase tracking-widest">
                    {trainer.role}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
