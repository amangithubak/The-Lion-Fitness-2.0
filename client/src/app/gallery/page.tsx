import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Gallery } from "@/components/Gallery";
import { CTA } from "@/components/CTA";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader 
          title="Gallery" 
          description="A look inside our premium training facility in Bhubaneswar."
          image="https://images.unsplash.com/photo-1596357395217-80de13130e92?q=80&w=2071&auto=format&fit=crop"
        />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
