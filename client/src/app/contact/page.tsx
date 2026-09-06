import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Location } from "@/components/Location";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader 
          title="Contact Us" 
          description="Ready to take the next step? Get in touch with our team."
          image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
        />
        <section className="py-24 bg-background border-y border-border">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl">
            <ContactForm />
          </div>
        </section>
        <Location />
      </main>
      <Footer />
    </>
  );
}
