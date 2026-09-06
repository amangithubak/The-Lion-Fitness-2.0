"use client";

import Link from "next/link";
import { Button } from "./Button";
import { ScrollReveal } from "./ScrollReveal";

export function CTA() {
  return (
    <section className="relative py-32 md:py-40 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop)` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 text-center">
        <ScrollReveal centered>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display uppercase leading-[0.9] tracking-wide mb-6">
            Ready to unleash <br />
            <span className="text-gold">your inner lion?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10 font-light">
            Your next level starts with one decision. Join the strongest community in Bhubaneswar today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership">
              <Button size="lg" className="w-full sm:w-auto" withArrow>
                Join The Lion
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Book A Visit
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
