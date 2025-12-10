"use client";

import Image from "next/image";
import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";
import { Link as LinkIcon } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Figma, FileText, Code } from "lucide-react";

// Map of technology names to their SVG icons.
const techIconMap: { [key: string]: React.ReactNode } = {
  React: (
    <svg role="img" viewBox="0 0 128 128" className="h-4 w-4" style={{ color: '#61DAFB' }}><path fill="currentColor" d="M64 128c35.4 0 64-28.6 64-64S99.4 0 64 0 0 28.6 0 64s28.6 64 64 64zM36.1 77.2c2.4 5.9 7.8 10 14.2 11.4 6.3 1.4 12.3-.3 17.2-4.2-2-4-4.5-7.5-7.4-10.4-1.3-1.3-2.6-2.6-3.9-3.8-5.9-5.5-11.2-10.2-14.8-17.4-4.1-8-5-16.4-2.3-24.9C36.6 28 35 29.8 33.6 31.7c-7.2 9.9-7.9 22.2-2.1 32.5 3.3 5.9 8.2 10.5 14.6 13zm56.8-21.9c-2.4-5.9-7.8-10-14.2-11.4-6.3-1.4-12.3.3-17.2 4.2 2 4 4.5 7.5 7.4 10.4 1.3 1.3 2.6 2.6 3.9 3.8 5.9 5.5 11.2 10.2 14.8 17.4 4.1 8 5 16.4 2.3 24.9 2.5.2 5-.4 7.2-1.7 7.2-4.1 11.3-11.2 11.3-19.3.1-6.1-2.1-12-6.5-16.9z" /><path fill="currentColor" d="M64 99.4c-19.6 0-35.4-15.8-35.4-35.4S44.4 28.6 64 28.6s35.4 15.8 35.4 35.4-15.8 35.4-35.4 35.4zm0-59.5c-13.3 0-24.1 10.8-24.1 24.1s10.8 24.1 24.1 24.1 24.1-10.8 24.1-24.1-10.8-24.1-24.1-24.1z" /></svg>
  ),
  'Node.js': (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#339933' }}><path fill="currentColor" d="M11.664 15.115c-.29.131-.599.23-.926.299-.327.068-.663.104-1.008.104-1.125 0-2.094-.37-2.906-1.11-.813-.74-1.22-1.764-1.22-3.075V0H0v11.332c0 2.21.615 4.044 1.845 5.503 1.23 1.459 2.871 2.188 4.922 2.188 1.168 0 2.268-.216 3.3-.651v-3.257zm.586-2.457V0H6.738v11.13c0 .888.225 1.594.676 2.118.45.524 1.053.786 1.808.786.31 0 .61-.033.899-.1.29-.067.564-.16.824-.28l.215-.123V3.906h-5.25V0h10.5v12.658zM24 8.182v3.08l-5.256.033v3.918h-5.52V0H24v3.12h-5.256v1.944H24z"/></svg>
  ),
  Firebase: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#FFCA28' }}><path fill="currentColor" d="M4.22 10.655l-2.02 7.503L14.075 4.38 4.22 10.655zm.507-1.31L16.03 2.15l-1.92 7.15-9.383 1.355zM4.773 19.1l11.45-12.83-8.8 14.864-2.65-2.034zM19.98 5.92L8.525 18.755l9.337-1.392L19.98 5.92z"/></svg>
  ),
  'Next.js': (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4 text-black dark:text-white"><path fill="currentColor" d="M13.685 4.298l-5.23 9.055v5.591h3.318V13.8l3.92-6.793-2.008-2.709zm-1.804-1.218L24 21.914H0L11.881 3.08z"/></svg>
  ),
  TypeScript: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#3178C6' }}><path fill="currentColor" d="M1.5 0h21l-3 18H3L1.5 0zM19.3 4H5.2L6 9h12.2L19.3 4zm-1.5 9H6.8l-.3-2h11.4l-.5 2zm-1.9-4H7.2l-.3-2h10.3l-.4 2z"/></svg>
  ),
  PostgreSQL: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#336791' }}><path fill="currentColor" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM6.9 19.78c.36 0 .69 0 .97-.04.42-.05.79-.17 1.1-.34a3.03 3.03 0 001.07-.68c.28-.27.5-.6.64-.97.14-.37.22-.79.22-1.25v-5.2H8.75v5.04c0 .32-.06.58-.17.78-.12.2-.3.35-.55.45-.25.1-.55.15-.92.15h-.25v.98h.23zm8.39-9.92c-.34 0-.67.01-1.01.04s-.69.09-.99.17c-.31.08-.59.2-.84.34a2.4 2.4 0 00-.7.6c-.2.24-.35.53-.44.86-.09.33-.14.7-.14 1.1v3.3h-2.14v-7.6h1.9v1.65c.19-.34.42-.64.71-.89.28-.25.6-.45.96-.61.36-.16.74-.27 1.15-.33.4-.06.8-.09 1.19-.09h.56v2.16h-.5zm-4.14 3.25c0-.44-.06-.8-.17-1.07s-.29-.5-.52-.66c-.23-.17-.5-.28-.8-.34-.3-.07-.63-.1-.98-.1h-.31v4.34h.31c.35 0 .68-.03.98-.1s.57-.18.8-.34c.23-.15.4-.36.52-.62.11-.26.17-.58.17-.97v-1.14z"/></svg>
  ),
  PHP: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#777BB4' }}><path fill="currentColor" d="M12 1.289l-10.432 6v12l10.432 6 10.432-6v-12l-10.432-6zM8.337 15.111H4V8.889h4.337c1.782 0 2.923.901 2.923 2.589C11.26 14.21 10.119 15.111 8.337 15.111zm7.326 0h-2.111V8.889h2.111v6.222zm5.337 0H16.663V8.889h4.337c1.782 0 2.923.901 2.923 2.589s-1.141 2.622-2.923 2.622zm-5.337-1.889v-2.444h-2.111v2.444h2.111zM8.337 10.778H6.111v2.444h2.226c.722 0 1.055-.4 1.055-.989.001-.59-.333-1.455-1.055-1.455zM21 13.222c.722 0 1.055-.4 1.055-.989s-.333-1.455-1.055-1.455H18.774v2.444H21z"/></svg>
  ),
  MySQL: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#4479A1' }}><path fill="currentColor" d="M12.08 17.584c-.42.067-.933.109-1.533.109-2.22 0-3.96-.54-5.22-1.62-.84-.707-1.26-1.574-1.26-2.607v-3.08L0 13.467V24h10.668v-4.148h-4.32c.32-.42.747-.793 1.28-1.12.533-.327 1.14-.58 1.82-.76.68-.18 1.407-.273 2.18-.293v.005zm-.394-4.834V0H6.738v11.13c0 .888.225 1.594.676 2.118.45.524 1.053.786 1.808.786.31 0 .61-.033.899-.1.29-.067.564-.16.824-.28l.215-.123V3.906h-5.25V0h10.5v12.658c-.42.067-.933.109-1.533.109-2.22 0-3.96-.54-5.22-1.62-.84-.707-1.26-1.574-1.26-2.607v-3.08L0 13.467V24h10.668v-4.148h-4.32c.32-.42.747-.793 1.28-1.12.533-.327 1.14-.58 1.82-.76.68-.18 1.407-.273 2.18-.293v.005zm12.314-7.92L12.926.002l1.666 4.346 6.33-2.92-2.92 6.33 4.346 1.666L18.42 12.92l2.92 6.33-6.33-2.92-1.666 4.348 3.828 3.828 7.828-7.828-3.828-3.828z"/></svg>
  ),
  Bootstrap: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#7952B3' }}><path fill="currentColor" d="M12 0L2.196 5v14L12 24l9.804-5V5L12 0zm5.183 17.513c-2.39 1.38-5.352 2.158-8.406 2.158-1.59 0-3.131-.22-4.575-.634V6.51c1.464-.47 3.068-.72 4.757-.72 2.87 0 5.617.688 8.224 2.064v9.659zM12 17.47c-2.73 0-4.945-2.215-4.945-4.945S9.27 7.58 12 7.58s4.945 2.215 4.945 4.945S14.73 17.47 12 17.47zm0-2.39c1.41 0 2.555-1.146 2.555-2.555S13.41 9.97 12 9.97s-2.555 1.146-2.555 2.555S10.59 15.08 12 15.08z"/></svg>
  ),
  Laravel: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#FF2D20' }}><path fill="currentColor" d="M12.33 0L0 7.42v.32l1.832.962L24 7.42V24l-3.32-1.742v-9.33L12.33 0zM5.534 10.428l-3.666-1.92L12.33 3.08l10.142 5.32-3.69 1.942-6.452-3.38-6.452 3.466zM18.808 10.43l3.32-1.74V20.5l-3.32 1.74v-11.81zm-8.31 9.074l-4.966-2.6v-7.39l4.966 2.6v7.39zm1.832 0l4.966-2.6v-7.39l-4.966 2.6v7.39z"/></svg>
  ),
  'Vue.js': (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4"><path fill="#4FC08D" d="M19.193 1.07H24l-12 20.78L0 1.07h4.807L12 13.92 19.193 1.07z"/><path fill="#4FC08D" d="M.025 1.07h4.807L12 13.92 19.193 1.07h4.807L12 21.85.025 1.07z"/></svg>
  ),
  Stripe: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#635BFF' }}><path fill="currentColor" d="M18.428 11.309c0 1.252-1.01 2.268-2.257 2.268H12.75V9.04h3.42c1.248 0 2.257 1.015 2.257 2.268zm0 5.443c0 1.252-1.01 2.268-2.257 2.268h-7.61V14.48h7.61c1.248 0 2.257 1.016 2.257 2.272zM21.6 9.04v1.89h-1.63V9.04H21.6zM24 6.772v10.456c0 .762-.31 1.48-1.488 1.48h-1.63V4.962c2.096.34 2.872 1.34 3.118 1.81zM7.228 9.04H5.597v1.89h1.63V9.04zM0 6.772v10.456c0 .762.31 1.48 1.488 1.48h1.63V4.962C1.024 5.302.248 6.302 0 6.772z"/></svg>
  ),
  'SQL Server': (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#CC2927' }}><path fill="currentColor" d="M22.286 11.233H1.714v1.439h20.572v-1.439zM1.714 6.772v2.877h5.143V6.772H1.714zm0 9.296h5.143v-2.878H1.714v2.878zM8.571 6.772h6.858v2.877H8.571V6.772zm0 9.296h6.858v-2.878H8.571v2.878zM17.143 6.772h5.143v2.877h-5.143V6.772zm0 9.296h5.143v-2.878h-5.143v2.878zM22.286 3.5V5.11h-5.143V3.5h5.143zM1.714 3.5V5.11h5.143V3.5H1.714zm6.857 0V5.11h6.858V3.5H8.571zM1.714 17.79v2.71h5.143v-2.71H1.714zm6.857 0v2.71h6.858v-2.71H8.571zm8.572 0v2.71h5.143v-2.71h-5.143zM0 1.414v21.172h24V1.414H0z"/></svg>
  ),
  Python: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4"><path fill="#3776AB" d="M23.12,14.075a6.4,6.4,0,0,1-3.41,3.41,6.38,6.38,0,0,1-7.42,0,6.4,6.4,0,0,1-3.41-3.41,6.38,6.38,0,0,1,0-7.42,6.4,6.4,0,0,1,3.41-3.41,6.38,6.38,0,0,1,7.42,0,6.4,6.4,0,0,1,3.41,3.41,6.38,6.38,0,0,1,0,7.42ZM12.285,1.05a5.3,5.3,0,0,0-5.3,5.3v2.65h5.3V3.7a2.65,2.65,0,0,1,2.65-2.65Zm-6.35,11.65v-2.65a2.65,2.65,0,0,1,2.65-2.65h7.95a2.65,2.65,0,0,0,2.65,2.65Zm.265,1.05h5.3v5.3a2.65,2.65,0,1,1-5.3,0Zm12.435,0V17a2.65,2.65,0,0,1-2.65,2.65H11.7v5.3a5.3,5.3,0,0,0,5.3-5.3,5.28,5.28,0,0,0-1.57-3.73A5.25,5.25,0,0,0,18.635,13.75Z"/></svg>
  ),
  Django: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#092E20' }}><path fill="currentColor" d="M0 18.23h3.81V7.12H0v11.11zm4.762 0h3.81V7.12h-3.81v11.11zM9.524 9.94a1.8 1.8 0 0 0-1.81 1.815v6.475h3.81V11.77a1.8 1.8 0 0 0-1.81-1.83v-.001zm3.62 3.195c-1.61 0-3.32.7-3.32 3.1v1.995h6.61v-1.995c.01-2.4-1.7-3.1-3.29-3.1zM24 16.71c-2.3 0-4.04-1.74-4.04-4.07 0-2.34 1.73-4.07 4.04-4.07V16.7z"/></svg>
  ),
  Vite: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4"><path fill="#646CFF" d="M12 0L1.6 15.5h6.9L12 24l3.5-8.5h6.9L12 0z"/><path fill="#FFC107" d="M12 0L1.6 15.5h6.9L12 24l3.5-8.5h6.9L12 0z"/></svg>
  ),
  HTML: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#E34F26' }}><path fill="currentColor" d="M1.6 21.4l1.8-20.3h17.2l-1.8 20.3-6.8 2.6-6.8-2.6zM6.5 7.8h11.8l-.4 4.8H8.1l.3 3.3h5.9l-.4 4-3.4 1.3-3.4-1.3-.2-2.5H4.6l.3 5.4 7.1 2.6 7.1-2.6.9-10.3.4-4.8.4-4.8H5l-.3 3.4z"/></svg>
  ),
  CSS: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#1572B6' }}><path fill="currentColor" d="M1.6 21.4l1.8-20.3h17.2l-1.8 20.3-6.8 2.6-6.8-2.6zM17.4 6.3H6.5l.3 3.3h9.3l-.3 3.3H7.1l.3 3.3h8.3l-.4 4-3.4 1.3-3.4-1.3-.2-2.5H5.8l.3 5.4 6.9 2.6 6.9-2.6 1-11.2.3-3.4.1-1.1z"/></svg>
  ),
  JavaScript: (
    <svg role="img" viewBox="0 0 24 24" className="h-4 w-4" style={{ color: '#F7DF1E' }}><path fill="black" d="M0 0h24v24H0V0z"/><path fill="#F7DF1E" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2V8h2v8zm5-4h-2V8h-2v4h-2v2h2v2h2v-2h2v-2z"/></svg>
  ),
  AI: (
    <BrainCircuit className="h-4 w-4 text-purple-400" />
  ),
  Figma: (
    <Figma className="h-4 w-4" />
  ),
  default: (
    <Code className="h-4 w-4" />
  )
};

const TechBadge = ({ name }: { name: string }) => {
  const icon = techIconMap[name] || techIconMap['default'];
  return (
    <Badge
      variant="secondary"
      className="flex items-center gap-2 border-primary/20 bg-card/70 py-1 px-3 text-xs font-normal text-muted-foreground backdrop-blur-sm"
    >
      {icon}
      <span>{name}</span>
    </Badge>
  );
};


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
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold font-headline">{project.title}</h3>
            <p className="text-muted-foreground mt-2 min-h-[60px] text-sm">{project.description}</p>
          </div>
          <Button variant="outline" size="icon" asChild className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent w-10 h-10 flex-shrink-0 ml-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Live Demo of ${project.title}`}>
              <LinkIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech && project.tech.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
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
