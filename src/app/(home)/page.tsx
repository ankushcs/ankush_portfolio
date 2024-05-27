import { ContactMeForm } from "@/components/page-ui/ContactMe";
import { ExperienceSection } from "@/components/page-ui/ExperienceSection";
import { LandingPage } from "@/components/page-ui/LandingPage";
import { ProjectsSection } from "@/components/page-ui/ProjectsSection";
import { SkillsSection } from "@/components/page-ui/SkillsSection";
import { AboutMe } from "@/components/page-ui/AboutMe";
import { Testimonials } from "@/components/page-ui/Testimonials";
import FooterSection from "@/components/page-ui/FooterSection";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <AboutMe />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <Testimonials />
      <ContactMeForm />
      <FooterSection />
    </main>
  );
}
