"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/gym";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-border py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50 relative">
            <div className="w-14 h-14 md:w-16 md:h-16 relative flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="The Lion Fitness 2.0 Logo" 
                fill 
                className="object-contain"
                sizes="(max-width: 768px) 56px, 64px"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors font-medium hover:text-gold relative group",
                  pathname === item.href ? "text-gold" : "text-foreground/80"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-0.5 bg-gold transition-all duration-300",
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Link href="/membership">
              <Button size="sm" withArrow>
                JOIN NOW
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-4 z-50">
            <ThemeToggle />
            <button
              className="text-foreground hover:text-gold transition-colors focus:outline-none p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background pt-28 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl uppercase tracking-widest font-display",
                    pathname === item.href ? "text-gold" : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto mb-12 flex flex-col gap-4">
              <Link href="/membership" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full" size="lg" withArrow>
                  JOIN NOW
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
