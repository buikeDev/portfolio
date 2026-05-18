import { AboutMeSection } from "./sections/AboutMeSection";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import Header from "./sections/Header/Index";
import TechMarquee from "./sections/TechStack/TecheMarquee";

export const FinalDesign = (): JSX.Element => {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="w-full overflow-x-hidden">
        <Header />
        <HeroSection />
        <TechMarquee />
        <AboutMeSection />
        <ProjectsSection />
        <ContactFormSection />
        <FooterSection />
      </div>
    </main>
  );
};
