"use client";

import Image from "next/image";
import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";
import { Link as LinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const ProjectCard = ({ project }: { project: (typeof siteData.en.projects.list)[0] }) => {
  const projectImage = PlaceHolderImages.find((img) => img.id === project.id);

  return (
    <div className="group relative rounded-lg overflow-hidden border border-primary/20 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent hover:shadow-neon-cyan hover:-translate-y-2">
      {projectImage && (
        <Image
          src={projectImage.imageUrl}
          alt={project.title}
          width={600}
          height={400}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={projectImage.imageHint}
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold font-headline">{project.title}</h3>
        <p className="text-muted-foreground mt-2 min-h-[40px]">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <LinkIcon className="me-2 h-4 w-4" />
              {siteData.en.projects.linkText}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language].projects;

  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-card/40">
      <div className="container mx-auto px-4" dir={direction}>
        <SectionTitle>{data.title}</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.list.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
