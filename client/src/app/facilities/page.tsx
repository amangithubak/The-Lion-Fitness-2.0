import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Facilities } from "@/components/Facilities";
import { CTA } from "@/components/CTA";

export default function FacilitiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader 
          title="Facilities" 
          description="Explore our premium training zones equipped with top-tier machinery and free weights."
          image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        />
        <Facilities />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
