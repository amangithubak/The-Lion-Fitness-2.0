"use client";

import { whyChooseUs } from "@/data/gym";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal centered>
          <SectionHeading
            centered
            eyebrow="Why The Lion?"
            title="The Advantage."
            description="We don't just provide equipment. We provide an environment built for success."
            className="mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <div className="bg-card border border-border p-8 hover:border-gold/30 transition-colors h-full">
                <div className="text-gold font-display text-4xl font-bold opacity-30 mb-6">
                  {feature.number}
                </div>
                <h3 className="text-xl font-display font-bold uppercase tracking-widest mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
