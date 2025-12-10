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

const iconMap = {
  web: <Monitor className="h-6 w-6 text-accent" />,
  programming: <Code className="h-6 w-6 text-accent" />,
  tools: <Terminal className="h-6 w-6 text-accent" />,
  design: <Palette className="h-6 w-6 text-accent" />,
  soft: <Users className="h-6 w-6 text-accent" />,
};

type SkillCategoryIcon = keyof typeof iconMap;

const SkillBar = ({ skill, percentage }: { skill: string, percentage: number }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 300);
    return () => clearTimeout(timer);
  }, [percentage]);

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

  return (
    <section id="skills" className="container mx-auto py-20 md:py-32 px-4">
      <SectionTitle>{data.title}</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" dir={direction}>
        {data.categories.map((category) => (
          <GlowCard key={category.name} className="flex flex-col">
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
                />
              ))}
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
