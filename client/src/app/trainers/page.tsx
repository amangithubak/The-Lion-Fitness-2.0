import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Trainers } from "@/components/Trainers";
import { CTA } from "@/components/CTA";

export default function TrainersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader 
          title="Our Trainers" 
          description="Meet the expert coaches who will guide you to your next level."
          image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
        />
        <Trainers />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
