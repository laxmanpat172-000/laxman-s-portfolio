import { AboutSection } from "@/components/sections/AboutSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import type { Theme } from "@/types";

interface HomePageProps {
  theme: Theme;
}

export default function HomePage({ theme }: HomePageProps) {
  return (
    <div className="flex flex-col" style={{ scrollBehavior: "smooth" }}>
      <HeroSection theme={theme} />
      <AboutSection theme={theme} />
      <EducationSection theme={theme} />
      <CertificatesSection theme={theme} />
      <SkillsSection theme={theme} />
      <ProjectsSection theme={theme} />
      <LocationSection theme={theme} />
      <ContactSection theme={theme} />
    </div>
  );
}
