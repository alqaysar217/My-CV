"use client";

import Image from "next/image";
import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import FloatingShapes from "../3d/FloatingShapes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TrainingGallerySection = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language].gallery;
  const galleryImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith("gallery")
  );

  return (
    <section
      id="gallery"
      className="relative container mx-auto py-20 md:py-32 px-4 overflow-hidden"
    >
      <FloatingShapes />
      <SectionTitle>{data.title}</SectionTitle>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {galleryImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 pl-4"
            >
              <div className="group relative overflow-hidden rounded-lg [perspective:1000px]">
                <Image
                  src={image.imageUrl}
                  alt={`${data.imageAlt} ${index + 1}`}
                  width={500}
                  height={500}
                  className="h-auto w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40"></div>
                <div className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-300 group-hover:border-accent"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 transform text-white" />
        <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 transform text-white" />
      </Carousel>
    </section>
  );
};

export default TrainingGallerySection;
