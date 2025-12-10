"use client";

import Image from "next/image";
import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import GlowCard from "../GlowCard";
import { Button } from "../ui/button";
import { Download, MessageCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GraduationCap, Code, Briefcase, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const icons = {
  grad: <GraduationCap className="h-8 w-8 text-accent" />,
  dev: <Code className="h-8 w-8 text-accent" />,
  instructor: <Briefcase className="h-8 w-8 text-accent" />,
};

const AboutSection = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language].about;
  const cta = siteData[language].hero.cta;
  const educationData = siteData[language].education;
  const languagesData = siteData[language].languages;
  const profileImage = PlaceHolderImages.find((img) => img.id === "profile");
  
  const handleWhatsAppClick = () => {
    const phone = siteData.en.contact.info.phone.replace(/[\s+]/g, "");
    const message = encodeURIComponent("Hello Mahmoud, I'm reaching out from your portfolio website.");
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="about" className="container mx-auto py-20 md:py-32 px-4">
      <SectionTitle>{data.title}</SectionTitle>
      <GlowCard>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full bg-primary blur-xl animate-pulse" />
              <div className="absolute inset-2 rounded-full bg-accent blur-xl animate-pulse animation-delay-400" />
              {profileImage && (
                <Image
                  src={profileImage.imageUrl}
                  alt={data.imageAlt}
                  width={256}
                  height={256}
                  className="relative rounded-full object-cover w-full h-full border-4 border-card"
                  data-ai-hint={profileImage.imageHint}
                />
              )}
            </div>
          </div>
          <div className="md:col-span-2" dir={direction}>
            <p className="text-muted-foreground leading-relaxed text-center md:text-left">
              {data.bio}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {data.roles.map((role) => (
                <div key={role.title} className="flex flex-col items-center gap-2">
                  {icons[role.icon as keyof typeof icons]}
                  <h3 className="font-semibold">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">{role.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 border-t border-primary/10 pt-8">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                  <div className="bg-primary/10 border border-primary/20 text-primary p-3 rounded-full">
                      <GraduationCap className="h-8 w-8" />
                  </div>
                  <div className="flex-grow">
                      <p className="text-sm text-muted-foreground">{educationData.date}</p>
                      <h3 className="mb-1 mt-1 font-bold text-foreground text-lg">{educationData.degree}</h3>
                      <p className="text-sm leading-snug tracking-wide text-muted-foreground">{educationData.university}</p>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/30 shadow-lg shadow-accent/10 text-base py-1 px-3">
                      {educationData.gpaLabel}: {educationData.gpa}
                  </Badge>
              </div>
            </div>

            <div className="mt-8 border-t border-primary/10 pt-8">
                <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 border border-primary/20 text-primary p-3 rounded-full">
                        <Languages className="h-8 w-8" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg">{languagesData.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {languagesData.list.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-2">
                        <span className="font-semibold">{lang.name}:</span>
                        <span className="text-muted-foreground">{lang.level}</span>
                    </div>
                ))}
                </div>
            </div>


            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="shadow-neon-cyan hover:shadow-neon-cyan/70 transition-shadow">
                <Download className="me-2 h-5 w-5" />
                {cta.cv}
              </Button>
              <Button onClick={handleWhatsAppClick} size="lg" variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:text-purple-300 hover:border-purple-500 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all">
                <MessageCircle className="me-2 h-5 w-5" />
                {cta.whatsapp}
              </Button>
            </div>
          </div>
        </div>
      </GlowCard>
    </section>
  );
};

export default AboutSection;
