"use client";

import Image from "next/image";
import Link from "next/link";
import { programs } from "@/data/gym";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./Button";

export function Programs() {
  return (
    <section className="py-24 md:py-32 bg-background border-y border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Programs"
              title={
                <>
                  Train for <br />
                  <span className="text-gold">what you want.</span>
                </>
              }
            />
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <Link href="/programs">
              <Button variant="outline" withArrow>
                View All Programs
              </Button>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.slice(0, 4).map((program, index) => (
            <ScrollReveal key={program.title} delay={index * 0.1}>
              <div className="group flex flex-col sm:flex-row bg-card border border-border hover:border-gold/50 transition-colors overflow-hidden">
                <div className="relative w-full sm:w-2/5 aspect-square sm:aspect-auto">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                
                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                  <div className="text-gold font-display font-bold text-sm mb-3">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wide mb-4">
                    {program.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>
                  
                  <Link href={`/programs`} className="mt-auto text-xs uppercase tracking-widest font-semibold text-foreground group-hover:text-gold transition-colors inline-flex items-center gap-2">
                    Learn More
                    <span className="w-6 h-[1px] bg-gold block transform origin-left transition-transform duration-300 group-hover:scale-x-150" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
