import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <h1 className="text-4xl font-display font-bold uppercase mb-8">Terms & Conditions</h1>
          <div className="prose prose-invert prose-gold max-w-none text-muted font-light">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>This is a placeholder for the Terms & Conditions. Replace with actual terms and conditions content.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
