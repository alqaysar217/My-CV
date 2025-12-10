"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  const { direction } = useLanguage();
  return (
    <h2
      className={cn(
        "text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center mb-12 md:mb-20 font-headline",
        "bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-500",
        "text-glow-primary",
        className
      )}
      dir={direction}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
