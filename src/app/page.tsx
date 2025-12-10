import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
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
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
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
