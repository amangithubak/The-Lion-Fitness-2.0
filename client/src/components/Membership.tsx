"use client";

import Link from "next/link";
import { membershipPlans } from "@/data/gym";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { Button } from "./Button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function Membership() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <ScrollReveal centered>
          <SectionHeading
            centered
            eyebrow="Membership"
            title="Choose your commitment."
            description="Select the plan that fits your goals. No hidden fees, just pure results."
            className="mb-16"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {membershipPlans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.1}>
              <div 
                className={cn(
                  "relative bg-card border flex flex-col h-full",
                  plan.popular ? "border-gold scale-100 md:scale-105 z-10 shadow-2xl shadow-gold/5" : "border-border"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-background text-xs font-bold px-4 py-1 uppercase tracking-widest font-display">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8 border-b border-border text-center">
                  <h3 className="text-2xl font-display font-bold uppercase tracking-widest mb-4">
                    {plan.name}
                  </h3>
                  <div className="text-3xl font-bold font-display text-foreground mb-2">
                    {plan.price}
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <ul className="flex flex-col gap-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted">
                        <Check className="w-5 h-5 text-gold shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/contact" className="w-full mt-auto">
                    <Button 
                      variant={plan.popular ? "primary" : "outline"} 
                      className="w-full"
                    >
                      Get Details
                    </Button>
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
