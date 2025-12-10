"use client";

import React from "react";
import Link from "next/link";
import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Download, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import HeroAnimation from "../3d/HeroAnimation";

const socialIcons = {
  github: <Github />,
  linkedin: <Linkedin />,
  youtube: <Youtube />,
  instagram: <Instagram />,
};
type SocialIconKeys = keyof typeof socialIcons;

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 h-5 w-5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
)

const HeroSection = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language].hero;

  const handleWhatsAppClick = () => {
    const phone = siteData.en.contact.info.phone.replace(/[\s+]/g, "");
    const message = encodeURIComponent("Hello Mahmoud, I'm reaching out from your portfolio website.");
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen-dynamic overflow-hidden"
    >
      <div className="absolute inset-0 z-10 opacity-70">
        <HeroAnimation />
      </div>

      <div
        className="relative z-20 flex flex-col items-center text-center px-4"
        dir={direction}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-2 font-headline text-purple-400">
          {data.name}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-primary font-medium mb-4">
          {data.subtitle}
        </p>
        <p className="max-w-2xl text-sm sm:text-md md:text-lg text-muted-foreground mb-6 md:mb-8">
          {data.caption}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8">
          <Button size="lg" className="shadow-neon-cyan hover:shadow-neon-cyan/70 transition-shadow text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6" onClick={() => window.open('/Mahmoud-Omar-CV.pdf', '_blank')}>
            <Download className="me-2 h-5 w-5" />
            {data.cta.cv}
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-500 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6"
            onClick={handleWhatsAppClick}
          >
            <WhatsAppIcon />
            {data.cta.whatsapp}
          </Button>
        </div>
        <div className="flex gap-2">
          {siteData[language].socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="ghost"
              size="icon"
              asChild
              className="h-12 w-12 text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors duration-300 [&>svg]:h-6 [&>svg]:w-6 sm:h-14 sm:w-14 sm:[&>svg]:h-7 sm:[&>svg]:w-7"
            >
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {React.cloneElement(socialIcons[social.icon as SocialIconKeys])}
              </Link>
            </Button>
          ))}
        </div>
      </div>
       <div className="absolute bottom-10 animate-bounce">
        <div className="h-6 w-6 border-b-2 border-r-2 border-primary rotate-45"></div>
      </div>
    </section>
  );
};

export default HeroSection;
