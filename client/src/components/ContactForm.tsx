"use client";

import { useState } from "react";
import { Button } from "./Button";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-card border border-gold p-8 md:p-12 text-center h-full flex flex-col justify-center items-center">
        <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 className="text-2xl font-display font-bold uppercase tracking-widest mb-4">Message Sent</h3>
        <p className="text-muted mb-8">
          Thank you for reaching out. A member of our team will get back to you shortly.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-10 flex flex-col gap-6">
      <h3 className="text-2xl font-display font-bold uppercase tracking-widest mb-2">Send an Enquiry</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-display uppercase tracking-widest text-muted">Full Name</label>
          <input 
            type="text" 
            id="name" 
            required 
            className="bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors" 
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-display uppercase tracking-widest text-muted">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            required 
            className="bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors" 
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-display uppercase tracking-widest text-muted">Email Address</label>
        <input 
          type="email" 
          id="email" 
          required 
          className="bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors" 
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="goal" className="text-sm font-display uppercase tracking-widest text-muted">Fitness Goal</label>
        <select 
          id="goal" 
          required 
          className="bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors appearance-none"
        >
          <option value="" disabled selected>Select a goal</option>
          <option value="strength">Strength Training</option>
          <option value="weight-loss">Weight Loss</option>
          <option value="muscle">Muscle Building</option>
          <option value="general">General Fitness</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-display uppercase tracking-widest text-muted">Message (Optional)</label>
        <textarea 
          id="message" 
          rows={4} 
          className="bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors resize-none" 
        />
      </div>
      
      <Button type="submit" disabled={isSubmitting} withArrow className="mt-4">
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </Button>
    </form>
  );
}
