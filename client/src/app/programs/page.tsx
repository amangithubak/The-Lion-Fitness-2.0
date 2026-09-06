import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Programs } from "@/components/Programs";
import { CTA } from "@/components/CTA";

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader 
          title="Programs" 
          description="Find the perfect training program tailored to your fitness goals."
          image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
        />
        <Programs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
