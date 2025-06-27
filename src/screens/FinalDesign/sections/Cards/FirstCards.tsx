import React from "react";

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
}

const projects: ProjectCard[] = [
  {
    href: "#",
    imageSrc: "/images/bytco.png",
    altText: "Bytco App Preview",
    title: "Bytco",
    description:
      "Designed and developed a responsive landing page for a cryptocurrency trading platform using HTML, CSS, and JavaScript. The project highlights key features, market trends, and user benefits through sleek UI design and smooth animations. Optimized for mobile and desktop, it ensures fast load times and cross-browser compatibility—delivering a polished user experience and high engagement.",
    tech: ["HTML", "CSS", "JavaScript"],
    codeUrl: "#",
    demoUrl: "https://bycto-com.vercel.app/",
  },
  {
    href: "#",
    imageSrc: "/images/landingPage.png",
    altText: "Neo-AI App Preview",
    title: "Neo-AI App",
    description:
      "Developed a responsive AI-powered landing page for Neo AI, showcasing product features, benefits, and integration use cases.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    codeUrl: "#",
    demoUrl: "https://bycto-com-7vui.vercel.app/",
  },
  {
    href: "#",
    imageSrc: "/images/NemeBlog.png",
    altText: "NemeBlog App Preview",
    title: "NemeBlog App",
    description:
      "Built a dynamic, SEO-optimized blog application using TypeScript, React, and Sanity.io CMS. Designed and developed a fully responsive platform centered around themes like relationships, health, education, and self-growth. Integrated dynamic routing, pagination, and category-based filtering, while leveraging Sanity’s GROQ for structured content querying. Implemented clean, semantic markup and metadata optimization to enhance discoverability on search engines. The result is a performant, scalable blog with real-time CMS integration—perfect for content teams and editorial workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GROQ"],
    codeUrl: "#",
    demoUrl: "https://blog-t9vn.vercel.app/",
  },
  // Add more projects as needed
];

export default function FirstCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-[#23263a] rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 w-full max-w-sm mx-auto"
        >
          {/* Image */}
          <img
            src={project.imageSrc}
            alt={project.altText}
            className="w-full h-48 object-cover rounded-t-2xl"
          />

          {/* Content */}
          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-white text-xl font-bold mb-2">
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
              <a
                href={project.codeUrl}
                className="flex-1 border border-[#00adb5] text-[#00adb5] rounded-lg py-2 text-center font-semibold hover:bg-[#00adb5] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
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
