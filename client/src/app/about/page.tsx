import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTA } from "@/components/CTA";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader 
          title="About Us" 
          description="Discover the story behind Bhubaneswar's most premium fitness destination."
          image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop"
        />
        <AboutSection />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
