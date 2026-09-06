"use client";

import { testimonials } from "@/data/gym";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background border-y border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal centered>
          <SectionHeading
            centered
            eyebrow="Community"
            title="Built by the community."
            description="Don't just take our word for it. See what our members have to say about their experience at The Lion."
            className="mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="bg-card border border-border p-8 h-full flex flex-col relative group hover:border-gold/30 transition-colors">
                <div className="text-gold mb-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-foreground/80 text-lg font-light leading-relaxed mb-8 flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gold font-display font-bold border border-gold/20">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="font-display uppercase tracking-widest text-sm font-semibold">
                    {testimonial.author}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
