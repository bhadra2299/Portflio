import { GlassHero } from "@/components/glass-hero";
import { AboutSection } from "@/components/portfolio/profile-system";
import { ProjectsShowcaseSection } from "@/components/portfolio/projects-showcase";
import { SkillsClassifiedSection } from "@/components/portfolio/skills-classified";
import { EducationSection } from "@/components/portfolio/experience-foundation";
import { ContactClosingSection } from "@/components/portfolio/contact-closing";
import { CommandDock } from "@/components/portfolio/command-dock";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full bg-[#e8ecf0] text-gray-900">
      <div id="hero" />
      <GlassHero />
      <AboutSection />
      <ProjectsShowcaseSection />
      <SkillsClassifiedSection />
      <EducationSection />
      <ContactClosingSection />
      <CommandDock />
    </main>
  );
}
