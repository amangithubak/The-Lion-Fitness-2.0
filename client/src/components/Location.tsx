"use client";

import { gymInfo } from "@/data/gym";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Location() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Visit Us"
                title="Find your way to the lion."
                description="We're located in the heart of Bhubaneswar, providing a premium training space."
                className="mb-12"
              />
              
              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0 text-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-display uppercase tracking-widest text-sm mb-1 font-semibold">Location</h4>
                    <p className="text-muted text-sm leading-relaxed">{gymInfo.location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0 text-gold">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-display uppercase tracking-widest text-sm mb-1 font-semibold">Hours</h4>
                    <p className="text-muted text-sm leading-relaxed">{gymInfo.openingHours}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0 text-gold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-display uppercase tracking-widest text-sm mb-1 font-semibold">Phone</h4>
                    <p className="text-muted text-sm leading-relaxed">{gymInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center shrink-0 text-gold">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-display uppercase tracking-widest text-sm mb-1 font-semibold">Email</h4>
                    <p className="text-muted text-sm leading-relaxed">{gymInfo.email}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto min-h-[400px]">
            <ScrollReveal className="h-full">
              <div className="w-full h-full bg-card border border-border p-2 flex items-center justify-center">
                {/* Map placeholder */}
                <div className="w-full h-full bg-background flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-10 filter blur-sm grayscale" />
                  <MapPin className="w-12 h-12 text-gold mb-4 relative z-10" />
                  <p className="text-muted font-display tracking-widest uppercase mb-4 relative z-10">Map Integration Here</p>
                  <a href={gymInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="relative z-10 text-gold border border-gold px-6 py-2 uppercase text-xs tracking-widest hover:bg-gold hover:text-background transition-colors">
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
