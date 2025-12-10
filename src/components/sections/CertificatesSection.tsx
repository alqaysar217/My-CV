
"use client";

import Image from "next/image";
import { siteData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import SectionTitle from "../SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const CertificateCard = ({ cert }: { cert: (typeof siteData.en.certificates.list)[0] }) => {
    const certImage = PlaceHolderImages.find((img) => img.id === cert.id);
    return (
      <div className="relative group overflow-hidden rounded-lg">
        {certImage && (
          <Image
            src={certImage.imageUrl}
            alt={cert.title}
            width={400}
            height={280}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={certImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <h3 className="font-bold text-lg text-white">{cert.title}</h3>
          <p className="text-sm text-gray-300">{cert.provider}</p>
          <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
        </div>
        <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-accent transition-all duration-300" />
      </div>
    );
};


const CertificatesSection = () => {
  const { language, direction } = useLanguage();
  const data = siteData[language].certificates;

  const allCategoryName = language === 'ar' ? 'الكل' : 'All';
  const uniqueCategories = Array.from(new Set(data.list.map((cert) => cert.category)));
  const categories = [allCategoryName, ...uniqueCategories];
  
  const arabicCategories = {
    "AI & Data": "الذكاء الاصطناعي والبيانات",
    "Cybersecurity & IT": "الأمن السيبراني وتقنية المعلومات",
    "Development": "التطوير",
    "Business & Marketing": "الأعمال والتسويق"
  } as { [key: string]: string };

  const getCategoryName = (category: string) => {
    if (language === 'ar') {
      if (category === allCategoryName) return allCategoryName;
      return arabicCategories[category] || category;
    }
    return category;
  }

  return (
    <section id="certificates" className="container mx-auto py-20 md:py-32 px-4">
      <SectionTitle>{data.title}</SectionTitle>
        <Tabs defaultValue={allCategoryName} className="w-full" dir={direction}>
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-10 bg-card/80 backdrop-blur-sm h-auto flex-wrap">
                {categories.map(category => (
                    <TabsTrigger key={category} value={category} className="flex-1 min-w-max">{getCategoryName(category)}</TabsTrigger>
                ))}
            </TabsList>
            <TabsContent value={allCategoryName}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.list.map((cert) => (
                        <CertificateCard key={cert.id} cert={cert} />
                    ))}
                </div>
            </TabsContent>
            {uniqueCategories.map(category => (
                 <TabsContent key={category} value={category}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.list.filter(cert => cert.category === category).map((cert) => (
                            <CertificateCard key={cert.id} cert={cert} />
                        ))}
                    </div>
                 </TabsContent>
            ))}
        </Tabs>
    </section>
  );
};

export default CertificatesSection;
