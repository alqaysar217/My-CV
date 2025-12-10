"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button
        onClick={toggleLanguage}
        variant="ghost"
        size="icon"
        aria-label="Toggle Language"
        className={cn(
            "h-14 w-14 rounded-full bg-card/50 backdrop-blur-sm transition-all duration-300 ease-in-out",
            "shadow-lg shadow-primary/20 hover:shadow-neon-cyan hover:bg-primary/20",
            "border-2 border-primary/30 hover:border-accent",
            "text-primary hover:text-accent"
        )}
      >
        <Languages className="h-6 w-6" />
        <span className="sr-only">
          Switch to {language === "en" ? "Arabic" : "English"}
        </span>
        <span className="absolute flex h-full w-full">
            <span className="absolute bottom-0 right-0 -z-10 h-1/2 w-1/2 rounded-full bg-accent/30 blur-2xl"></span>
            <span className="absolute left-0 top-0 -z-10 h-1/2 w-1/2 rounded-full bg-primary/30 blur-2xl"></span>
        </span>
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
