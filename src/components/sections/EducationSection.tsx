"use client";

import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import GlowCard from "../GlowCard";

const EducationSection = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language].education;

  return (
    <section id="education" className="w-full py-20 md:py-32 bg-card/40">
      <div className="container mx-auto px-4">
        <SectionTitle>{data.title}</SectionTitle>
        <div className="max-w-2xl mx-auto" dir={direction}>
            <GlowCard>
                <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                    <div className="bg-primary/10 border border-primary/20 text-primary p-4 rounded-full">
                        <GraduationCap className="h-10 w-10" />
                    </div>
                    <div className="flex-grow">
                        <p className="text-sm text-muted-foreground">{data.date}</p>
                        <h3 className="mb-1 mt-1 font-bold text-foreground text-xl">{data.degree}</h3>
                        <p className="text-sm leading-snug tracking-wide text-muted-foreground">{data.university}</p>
                    </div>
                    <Badge className="bg-accent/10 text-accent border-accent/30 shadow-lg shadow-accent/10 text-base py-1 px-3">
                        {data.gpaLabel}: {data.gpa}
                    </Badge>
                </div>
            </GlowCard>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
