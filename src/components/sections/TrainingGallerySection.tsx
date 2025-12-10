"use client";

import Image from "next/image";
import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import FloatingShapes from "../3d/FloatingShapes";

const TrainingGallerySection = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language].gallery;
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith("gallery"));

  return (
    <section id="gallery" className="relative container mx-auto py-20 md:py-32 px-4 overflow-hidden">
      <FloatingShapes />
      <SectionTitle>{data.title}</SectionTitle>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg group relative border-2 border-transparent hover:border-accent transition-all duration-300 shadow-lg">
            <Image
              src={image.imageUrl}
              alt={`${data.imageAlt} ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
              data-ai-hint={image.imageHint}
            />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainingGallerySection;
