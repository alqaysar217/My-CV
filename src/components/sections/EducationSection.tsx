"use client";

import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language].education;

  return (
    <section id="education" className="w-full py-20 md:py-32 bg-card/40">
      <div className="container mx-auto px-4">
        <SectionTitle>{data.title}</SectionTitle>
        <div className="relative max-w-2xl mx-auto" dir={direction}>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent">
              <div className="absolute top-0 h-4 w-4 rounded-full bg-accent -translate-x-[calc(50%-1px)] shadow-neon-cyan"></div>
          </div>
          <div className="relative">
            <div className="mb-8 flex justify-between items-center w-full">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                <GraduationCap className="mx-auto text-primary-foreground h-6 w-6" />
              </div>
              <div className="order-1 bg-card rounded-lg shadow-xl w-5/12 px-6 py-4 border border-primary/20">
                <p className="text-sm text-muted-foreground">{data.date}</p>
                <h3 className="mb-2 font-bold text-foreground text-lg">{data.degree}</h3>
                <p className="text-sm leading-snug tracking-wide text-muted-foreground text-opacity-100">{data.university}</p>
                 <Badge className="mt-4 bg-accent/10 text-accent border-accent/30 shadow-lg shadow-accent/10">
                    {data.gpaLabel}: {data.gpa}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
