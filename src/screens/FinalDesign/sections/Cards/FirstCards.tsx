interface ProjectCard {
  href: string;
  imageSrc: string;
  altText: string;
  previewClass?: string;
  title: string;
  description: string;
  tech: string[];
  codeUrl: string;
  demoUrl: string;
  codeAvailable?: boolean;
  codeUnavailableMessage?: string;
}

const projects: ProjectCard[] = [
  {
    href: "#",
    imageSrc: "/images/NemeBlog.png",
    altText: "NemeBlog App Preview",
    title: "NemeBlog App",
    description:
      "Built a dynamic, SEO-optimized blog application using TypeScript, React, and Sanity.io CMS. Designed and developed a fully responsive platform centered around themes like relationships, health, education, and self-growth. Integrated dynamic routing, pagination, and category-based filtering, while leveraging Sanity’s GROQ for structured content querying. Implemented clean, semantic markup and metadata optimization to enhance discoverability on search engines. The result is a performant, scalable blog with real-time CMS integration—perfect for content teams and editorial workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GROQ"],
    codeUrl: "https://github.com/buikeDev/blog",
    demoUrl: "https://blog-t9vn.vercel.app/",
  },
  {
    href: "#",
    imageSrc: "/images/ounje.jpeg",
    altText: "Ounje Mobile App Preview",
    title: "OunjeFood Mobile App",
    description:
      "Ounje is a modern food ordering and delivery platform built to connect customers with local restaurants through a fast, seamless, and reliable mobile experience. The app features dedicated portals for customers, vendors, and riders, enabling real-time order management, live delivery tracking, secure payments, and efficient logistics coordination.Built with React Native for both Android and iOS, Ounje focuses on performance, scalability, and user experience. Key features include Paystack payment integration, live map tracking, KYC verification for vendors and riders, delivery confirmation tokens, order history, and dynamic menu management. The platform was designed to simplify food delivery operations while creating a smooth and intuitive experience for every user involved in the ecosystem.",
    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Paystack",
      "Google Maps API",
      "Live Location Tracking",
      "Git",
      "GitHub",
      "EAS Build",
    ],
    codeUrl: "https://github.com/buikeDev/ounje",
    demoUrl: "https://apps.apple.com/ng/app/ounjefood/id6762204959/",
    codeAvailable: false,
    codeUnavailableMessage:
      "This repo is private/company-owned and not available publicly.",
  },
  {
    href: "#",
    imageSrc: "/images/beekeys.png",
    altText: "beekeys App Preview",
    title: "beekeys",
    description:
      "A sleek, responsive landing page designed to introduce a trust-driven platform for discovering and connecting with local businesses. The page highlights core services (business owners, contributors, registrars) and key value propositions like transparency, community feedback, and local visibility.",
    tech: ["HTML", "CSS", "Typescricpt", "React"],
    codeUrl: "https://github.com/buikeDev/beekeys",
    demoUrl: "https://beekeys-nine.vercel.app",
  },

  // Add more projects as needed
];

import { useState } from "react";

export default function FirstCards() {
  const [clickedUnavailableIndex, setClickedUnavailableIndex] = useState<number | null>(null);

  return (
    <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#23263a] rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 w-full max-w-sm mx-auto"
        >
          {/* Image */}
          <img
            src={project.imageSrc}
            alt={project.altText}
            className="object-cover w-full h-48 rounded-t-2xl"
          />

          {/* Content */}
          <div className="flex flex-col flex-1 p-6">
            <h3 className="mb-2 text-xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-[#cfd8dc] text-sm mb-4">{project.description}</p>
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-[#23263a] text-[#00adb5] px-3 py-1 rounded-full text-xs font-semibold border border-[#00adb5]"
                >
                  {t}
                </span>
              ))}
            </div>
            {/* Buttons */}
            <div className="flex gap-3 mt-auto">
              {project.codeAvailable === false ? (
                <div className="relative group flex-1">
                  <button
                    type="button"
                    className="w-full border border-[#39626f] bg-[#1b2a35] text-[#7aa2ab] rounded-lg py-2 text-center font-semibold cursor-not-allowed transition-colors"
                    title={project.codeUnavailableMessage}
                    aria-label={project.codeUnavailableMessage}
                    onClick={() =>
                      setClickedUnavailableIndex(
                        clickedUnavailableIndex === index ? null : index,
                      )
                    }
                  >
                    Code
                  </button>
                  <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full rounded-md bg-[#111827] px-3 py-2 text-xs text-[#cfd8dc] shadow-lg shadow-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {project.codeUnavailableMessage}
                  </span>
                  {clickedUnavailableIndex === index ? (
                    <div className="mt-3 rounded-lg border border-[#00adb5] bg-[#111827] px-3 py-2 text-xs text-[#cfd8dc] shadow-lg">
                      {project.codeUnavailableMessage}
                    </div>
                  ) : null}
                </div>
              ) : (
                <a
                  href={project.codeUrl}
                  className="flex-1 border border-[#00adb5] text-[#00adb5] rounded-lg py-2 text-center font-semibold hover:bg-[#00adb5] hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              )}
              <a
                href={project.demoUrl}
                className="flex-1 bg-[#00adb5] text-white rounded-lg py-2 text-center font-semibold hover:bg-[#019ca1] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
