"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { gymInfo } from "@/data/gym";

export function AboutSection() {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <ScrollReveal animation="scaleIn">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none">
                <div className="absolute inset-0 bg-gold/10 -translate-x-4 translate-y-4 border border-gold/20 z-0" />
                <div className="absolute inset-0 z-10 overflow-hidden bg-card">
                  <Image
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                    alt="Gym interior"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 to-transparent" />
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="w-full lg:w-1/2">
            <ScrollReveal>
              <SectionHeading
                eyebrow="The Lion Fitness 2.0"
                title={
                  <>
                    More than a gym.<br />
                    <span className="text-gold">It&apos;s your battleground.</span>
                  </>
                }
                description={gymInfo.description}
                className="mb-8"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                    <span className="text-gold font-display font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-display uppercase tracking-widest text-sm mb-1">Premium Equipment</h4>
                    <p className="text-muted text-sm leading-relaxed">Modern equipment designed for effective training and real progress.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0">
                    <span className="text-gold font-display font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-display uppercase tracking-widest text-sm mb-1">Expert Guidance</h4>
                    <p className="text-muted text-sm leading-relaxed">Support from experienced fitness professionals who push you forward.</p>
                  </div>
                </div>
              </div>

              <Link href="/about">
                <Button variant="outline" withArrow>
                  Discover Our Story
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
