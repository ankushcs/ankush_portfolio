import dynamic from "next/dynamic";

// Dynamically import components
const ContactMeForm = dynamic(() => import("@/components/page-ui/ContactMe"));
const ExperienceSection = dynamic(
  () => import("@/components/page-ui/ExperienceSection")
);
const LandingPage = dynamic(() => import("@/components/page-ui/LandingPage"));
const ProjectsSection = dynamic(
  () => import("@/components/page-ui/ProjectsSection")
);
const SkillsSection = dynamic(
  () => import("@/components/page-ui/SkillsSection")
);
const AboutMe = dynamic(() => import("@/components/page-ui/AboutMe"));
const Testimonials = dynamic(() => import("@/components/page-ui/Testimonials"));
const FooterSection = dynamic(
  () => import("@/components/page-ui/FooterSection")
);

function MyPage() {
  return (
    <div>
      <LandingPage />
      <AboutMe />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <Testimonials />
      <ContactMeForm />
      <FooterSection />
    </div>
  );
}

export default MyPage;
