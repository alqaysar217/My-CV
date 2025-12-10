"use client";

import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Linkedin, Youtube, Instagram } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const socialIcons = {
  github: <Github />,
  linkedin: <Linkedin />,
  youtube: <Youtube />,
  instagram: <Instagram />,
};

type SocialIconKeys = keyof typeof socialIcons;

const Footer = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language];

  return (
    <footer className="w-full py-8 border-t border-t-primary/10 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
        <p className="text-sm text-muted-foreground" dir={direction}>
          &copy; {new Date().getFullYear()} {data.footer.copyright}
        </p>
        <div className="flex gap-2">
          {data.socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="ghost"
              size="icon"
              asChild
              className="text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors duration-300"
            >
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {socialIcons[social.icon as SocialIconKeys]}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
