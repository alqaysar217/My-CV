"use client";

import Image from "next/image";
import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import { Button } from "../ui/button";
import { Star, Youtube } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import GlowCard from "../GlowCard";

const CourseCard = ({ course, isFeatured }: { course: (typeof siteData.en.courses.list)[0], isFeatured: boolean }) => {
  const courseImage = PlaceHolderImages.find((img) => img.id === course.id);
  const { language } = useLanguage();
  
  const renderStars = (rating: number) => {
    return (
        <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star
            key={i}
            className={`h-5 w-5 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
            }`}
            />
        ))}
        </div>
    )
  }

  if (isFeatured) {
      return (
        <GlowCard className="md:col-span-2 lg:col-span-3">
             <div className="grid lg:grid-cols-2 gap-8 items-center">
                {courseImage && (
                    <div className="overflow-hidden rounded-lg">
                        <Image
                            src={courseImage.imageUrl}
                            alt={course.title}
                            width={1280}
                            height={720}
                            className="w-full object-cover transition-transform duration-300 hover:scale-105"
                            data-ai-hint={courseImage.imageHint}
                        />
                    </div>
                )}
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold font-headline text-glow-primary">{course.title}</h3>
                    {renderStars(course.rating)}
                    <p className="text-muted-foreground mt-4">{course.description}</p>
                    <Button asChild size="lg" className="mt-6 shadow-neon-cyan">
                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                        <Youtube className="me-2 h-5 w-5" />
                        {siteData[language].courses.cta}
                        </a>
                    </Button>
                </div>
            </div>
        </GlowCard>
      )
  }

  return (
    <GlowCard className="flex flex-col h-full group">
        {courseImage && (
             <div className="overflow-hidden rounded-t-lg">
                <Image
                    src={courseImage.imageUrl}
                    alt={course.title}
                    width={1280}
                    height={720}
                    className="w-full object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={courseImage.imageHint}
                />
            </div>
        )}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold font-headline text-lg flex-grow">{course.title}</h3>
        {renderStars(course.rating)}
        <p className="text-sm text-muted-foreground mt-2 flex-grow">{course.description}</p>
        <Button asChild className="w-full mt-4">
          <a href={course.link} target="_blank" rel="noopener noreferrer">
            <Youtube className="me-2 h-4 w-4" />
            {siteData[language].courses.cta}
          </a>
        </Button>
      </div>
    </GlowCard>
  );
};


const YoutubeCoursesSection = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language].courses;
  const featuredCourse = data.list.find(c => c.featured);
  const otherCourses = data.list.filter(c => !c.featured);

  return (
    <section id="courses" className="w-full py-20 md:py-32 bg-card/40">
      <div className="container mx-auto px-4" dir={direction}>
        <SectionTitle>{data.title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourse && <CourseCard course={featuredCourse} isFeatured={true} />}
            {otherCourses.map((course) => (
                <CourseCard key={course.id} course={course} isFeatured={false} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default YoutubeCoursesSection;
