import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Membership } from "@/components/Membership";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader 
          title="Membership" 
          description="Flexible plans designed around your fitness goals."
          image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
        />
        <Membership />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
