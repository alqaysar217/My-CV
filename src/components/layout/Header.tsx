"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteData } from "@/lib/data";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
  const { language, direction } = useLanguage();
  const navItems = siteData[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-sm border-b border-primary/10 shadow-lg"
            : "bg-transparent"
        )}
        dir={direction}
      >
        <nav className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="#home" className="text-2xl font-bold font-headline text-glow-primary">
            {language === 'ar' ? 'محمود' : 'Mahmoud'}
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            {/* Mobile menu can be added here if needed */}
          </div>
        </nav>
      </header>
      <LanguageSwitcher />
    </>
  );
};

export default Header;
