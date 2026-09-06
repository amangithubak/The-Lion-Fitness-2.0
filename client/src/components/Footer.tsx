import Link from "next/link";
import Image from "next/image";
import { gymInfo, navigation } from "@/data/gym";
import { MessageCircle } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 relative flex items-center justify-center">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} 
                  alt="The Lion Fitness 2.0 Logo" 
                  fill 
                  className="object-contain"
                  sizes="64px"
                />
              </div>
            </Link>
            <p className="text-muted mb-6 max-w-sm">
              {gymInfo.tagline}
            </p>
            <div className="flex items-center gap-4">
              <a href={gymInfo.socials.instagram} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-background hover:border-gold transition-colors">
                <InstagramIcon />
              </a>
              <a href={gymInfo.socials.facebook} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-background hover:border-gold transition-colors">
                <FacebookIcon />
              </a>
              <a href={gymInfo.socials.whatsapp} className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-gold hover:text-background hover:border-gold transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-display uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {navigation.slice(0, 4).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted hover:text-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-display uppercase tracking-widest mb-6">Explore</h4>
            <ul className="flex flex-col gap-3">
              {navigation.slice(4).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted hover:text-gold transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-display uppercase tracking-widest mb-6">Contact</h4>
            <ul className="flex flex-col gap-4 text-muted">
              <li>{gymInfo.location}</li>
              <li>{gymInfo.phone}</li>
              <li>{gymInfo.email}</li>
              <li className="pt-2 text-gold">{gymInfo.openingHours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
          <p>© {new Date().getFullYear()} {gymInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
