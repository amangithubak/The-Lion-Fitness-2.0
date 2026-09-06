"use client";

import { useState } from "react";
import { faq } from "@/data/gym";
import { SectionHeading } from "./SectionHeading";
import { ScrollReveal } from "./ScrollReveal";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="w-full lg:w-1/3">
          <ScrollReveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Got questions?"
              description="Find answers to the most common questions about training at The Lion Fitness 2.0."
            />
          </ScrollReveal>
        </div>
        
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col gap-4">
            {faq.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div 
                  className="bg-card border border-border overflow-hidden transition-colors hover:border-gold/30 cursor-pointer"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="p-6 md:p-8 flex items-center justify-between gap-4">
                    <h3 className="font-display font-semibold uppercase tracking-wide md:text-lg">
                      {item.question}
                    </h3>
                    <div className="shrink-0 text-gold">
                      {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 md:px-8 pb-6 md:pb-8 text-muted leading-relaxed font-light">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
