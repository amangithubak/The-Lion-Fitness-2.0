import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Facilities } from "@/components/Facilities";
import { Programs } from "@/components/Programs";
import { Gallery } from "@/components/Gallery";
import { Trainers } from "@/components/Trainers";
import { Testimonials } from "@/components/Testimonials";
import { Membership } from "@/components/Membership";
import { FAQ } from "@/components/FAQ";
import { Location } from "@/components/Location";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <AboutSection />
        <WhyChooseUs />
        <Facilities />
        <Programs />
        <Gallery />
        <Trainers />
        <Testimonials />
        <Membership />
        <FAQ />
        <Location />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
