import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";
import Header from "./sections/Header/Index";

export const FinalDesign = (): JSX.Element => {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="w-full overflow-x-hidden">
        <Header />
        <HeroSection />
        <AboutMeSection />
        <ProjectsSection />
        <ContactFormSection />
        <FooterSection />
      </div>
    </main>
  );
};
