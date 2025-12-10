"use client";

import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import GlowCard from "../GlowCard";
import { Progress } from "@/components/ui/progress";
import * as React from "react";
import {
  Code,
  Palette,
  Terminal,
  GitMerge,
  Users,
  BrainCircuit,
  Database,
  Monitor,
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
  web: <Monitor className="h-6 w-6 text-accent" />,
  programming: <Code className="h-6 w-6 text-accent" />,
  tools: <Terminal className="h-6 w-6 text-accent" />,
  design: <Palette className="h-6 w-6 text-accent" />,
  soft: <Users className="h-6 w-6 text-accent" />,
};

type SkillCategoryIcon = keyof typeof iconMap;

const SkillBar = ({ skill, percentage, inView }: { skill: string, percentage: number, inView: boolean }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setProgress(percentage), 300);
      return () => clearTimeout(timer);
    }
  }, [percentage, inView]);

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <span className="text-xs font-mono text-primary">{percentage}%</span>
      </div>
      <Progress value={progress} />
    </div>
  );
};

const SkillsSection = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language].skills;
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="container mx-auto py-20 md:py-32 px-4" ref={sectionRef}>
      <SectionTitle>{data.title}</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" dir={direction}>
        {data.categories.map((category, index) => (
          <div
            key={category.name}
            className={cn(
              "transition-all duration-700 ease-out",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <GlowCard className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4">
                {iconMap[category.icon as SkillCategoryIcon]}
                <h3 className="text-2xl font-bold font-headline">{category.name}</h3>
              </div>
              <div className="space-y-5 mt-auto">
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.level}
                    inView={inView}
                  />
                ))}
              </div>
            </GlowCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
