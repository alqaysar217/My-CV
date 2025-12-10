
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteData } from "@/lib/data";
import { cn } from "@/lib/utils";
import LanguageSwitcher from "../LanguageSwitcher";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Menu,
  Home,
  User,
  Briefcase,
  Shapes,
  FolderKanban,
  Award,
  Book,
  GalleryHorizontal,
  Youtube,
  Mail,
} from "lucide-react";

const navIcons = {
  home: <Home />,
  user: <User />,
  briefcase: <Briefcase />,
  shapes: <Shapes />,
  folderKanban: <FolderKanban />,
  award: <Award />,
  book: <Book />,
  galleryHorizontal: <GalleryHorizontal />,
  youtube: <Youtube />,
  mail: <Mail />,
};

type NavIconKeys = keyof typeof navIcons;

const Header = () => {
  const { language, direction } = useLanguage();
  const navItems = siteData[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({
    item,
    isMobile = false,
  }: {
    item: (typeof navItems)[0];
    isMobile?: boolean;
  }) => {
    const Icon = navIcons[item.icon as NavIconKeys];
    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-2 font-medium transition-colors hover:text-accent",
          isMobile
            ? "text-lg text-foreground"
            : "text-sm text-muted-foreground"
        )}
      >
        <span className="text-accent">{Icon}</span>
        <span>{item.name}</span>
      </Link>
    );
  };

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
          <Link
            href="#home"
            className="text-2xl font-bold font-headline text-accent"
          >
            {language === "ar" ? "محمود" : "Mahmoud"}
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </div>
          <div className="md:hidden">
            {isMounted && (
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side={direction === 'rtl' ? 'left' : 'right'}>
                  <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                  <div className="flex flex-col gap-6 pt-10">
                    {navItems.map((item) => (
                      <SheetClose key={item.name} asChild>
                        <NavLink item={item} isMobile={true} />
                      </SheetClose>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </nav>
      </header>
      <LanguageSwitcher />
    </>
  );
};

export default Header;
