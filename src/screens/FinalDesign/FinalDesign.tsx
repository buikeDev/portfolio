import React from "react";
import { AboutMeSection } from "./sections/AboutMeSection";
import { ContactFormSection } from "./sections/ContactFormSection/ContactFormSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { ProjectsSection } from "./sections/ProjectsSection/ProjectsSection";

export const FinalDesign = (): JSX.Element => {
  return (
    <main className="bg-white w-full">
      <div className="mx-auto max-w-[1440px]">
        <HeroSection />
        <AboutMeSection />
        <ProjectsSection />
        <ContactFormSection />
        <FooterSection />
      </div>
    </main>
  );
};
