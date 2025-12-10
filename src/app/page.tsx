import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import BooksSection from '@/components/sections/BooksSection';
import TrainingGallerySection from '@/components/sections/TrainingGallerySection';
import YoutubeCoursesSection from '@/components/sections/YoutubeCoursesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificatesSection />
        <BooksSection />
        <TrainingGallerySection />
        <YoutubeCoursesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
