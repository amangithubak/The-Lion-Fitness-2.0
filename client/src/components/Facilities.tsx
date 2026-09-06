"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { facilities } from "@/data/gym";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";

export function Facilities() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Explore"
            title="Built for serious training."
            description="Our training zones are designed with premium equipment and intentional layouts to help you get the most out of every workout."
            className="mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.slice(0, 6).map((facility, index) => (
            <ScrollReveal key={facility.title} delay={index * 0.1}>
              <div className="group relative overflow-hidden bg-card aspect-[4/3] flex flex-col justify-end p-6 border border-border cursor-pointer">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/60 to-transparent" />
                
                <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="text-gold font-display font-bold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wide mb-2 flex items-center justify-between">
                    {facility.title}
                    <ArrowRight className="w-5 h-5 text-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                  </h3>
                  <p className="text-foreground/70 text-sm font-light line-clamp-2">
                    {facility.description}
                  </p>
                </div>
                
                {/* Gold accent line on hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4} className="mt-16 flex justify-center">
          <Link href="/facilities" className="group flex items-center gap-2 text-gold font-display uppercase tracking-widest text-sm hover:text-foreground transition-colors">
            View All Facilities
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
