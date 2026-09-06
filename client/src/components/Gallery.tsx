"use client";

import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/data/gym";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./Button";

export function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal centered>
          <SectionHeading
            centered
            eyebrow="The Environment"
            title="Inside The Lion."
            description="Take a look inside our premium training facility designed for results."
            className="mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
          {galleryImages.slice(0, 5).map((image, i) => (
            <ScrollReveal 
              key={i} 
              delay={i * 0.1}
              className={`relative overflow-hidden group bg-card ${
                i === 0 ? "col-span-2 row-span-2" : 
                i === 3 ? "col-span-2 row-span-1" : 
                "col-span-1 row-span-1"
              }`}
            >
              <Image
                src={image}
                alt={`Gym Gallery ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-16 flex justify-center">
          <Link href="/gallery">
            <Button variant="outline" withArrow>
              View Full Gallery
            </Button>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
