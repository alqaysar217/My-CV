"use client";

import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import GlowCard from "../GlowCard";
import { Briefcase, CheckCircle2 } from "lucide-react";

const ExperienceSection = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language].experience;

  return (
    <section id="experience" className="w-full py-20 md:py-32 bg-card/40">
      <div className="container mx-auto px-4">
        <SectionTitle>{data.title}</SectionTitle>
        <div className="relative max-w-4xl mx-auto" dir={direction}>
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border"></div>
          
          {data.list.map((job, index) => (
            <div key={index} className="relative mb-16">
              <div className="absolute left-1/2 -translate-x-1/2 -top-1.5 mt-8 h-8 w-8 rounded-full bg-primary flex items-center justify-center ring-8 ring-background">
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="mt-8">
                <GlowCard>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-xl font-bold font-headline">{job.role}</h3>
                    <p className="text-sm text-primary font-semibold mt-1 sm:mt-0">{job.date}</p>
                  </div>
                  <p className="text-md text-muted-foreground mb-4">{job.company}</p>
                  <ul className="space-y-2">
                    {job.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
