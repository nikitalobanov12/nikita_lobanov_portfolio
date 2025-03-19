import { HeroSection } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { EducationSection } from "@/components/sections/education";
import { ContactSection } from "@/components/sections/contact";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/sections/about";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-32 space-y-32">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
		<section >
          <div className="grid lg:grid-cols-2 lg:gap-8 gap-16">
            <div className="h-full flex flex-col">
              <EducationSection />
            </div>
            <div className="h-full flex flex-col">
              <ContactSection />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}