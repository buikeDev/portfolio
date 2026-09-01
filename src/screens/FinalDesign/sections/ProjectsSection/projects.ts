export type ProjectCategory = "featured" | "more";

export interface Project {
  id: string;
  category: ProjectCategory;
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  tech: string[];
  codeUrl?: string;
  demoUrl: string;
  codeUnavailableMessage?: string;
}

export const projectCategories: Array<{
  id: ProjectCategory;
  name: string;
}> = [
  { id: "featured", name: "Featured" },
  { id: "more", name: "More Projects" },
];

export const projects: Project[] = [
  {
    id: "neme-blog",
    category: "featured",
    imageSrc: "/images/NemeBlog.png",
    altText: "NemeBlog article listing page",
    title: "NemeBlog",
    description:
      "An SEO-focused publishing platform with dynamic routing, pagination, and category filtering. Sanity CMS and GROQ give content teams a structured editorial workflow with real-time updates.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GROQ"],
    codeUrl: "https://github.com/buikeDev/blog",
    demoUrl: "https://blog-t9vn.vercel.app/",
  },
  {
    id: "ounje-mobile",
    category: "featured",
    imageSrc: "/images/ounje.jpeg",
    altText: "OunjeFood mobile application screens",
    title: "OunjeFood Mobile App",
    description:
      "A cross-platform food delivery product for customers, restaurants, and riders. It supports secure payments, live delivery tracking, KYC verification, and multi-role order management.",
    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Paystack",
      "Google Maps API",
    ],
    demoUrl: "https://apps.apple.com/ng/app/ounjefood/id6762204959/",
    codeUnavailableMessage: "Private company-owned repository",
  },
  {
    id: "ounje-landing",
    category: "featured",
    imageSrc: "/images/ounjeLanding.png",
    altText: "Ounje product landing page",
    title: "Ounje Landing Page",
    description:
      "A responsive, conversion-focused website explaining Ounje's customer, vendor, and rider experiences. The interface highlights live tracking, secure payments, and partner onboarding.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://ounje-landingpage-nine.vercel.app/",
    codeUnavailableMessage: "Private company-owned repository",
  },
  {
    id: "beekeys",
    category: "more",
    imageSrc: "/images/beekeys.png",
    altText: "BeeKeys local business landing page",
    title: "BeeKeys",
    description:
      "A responsive landing page for discovering and connecting with local businesses. It presents platform roles and trust-focused features in a clear, approachable interface.",
    tech: ["React", "TypeScript", "HTML", "CSS"],
    codeUrl: "https://github.com/buikeDev/beekeys",
    demoUrl: "https://beekeys-nine.vercel.app",
  },
  {
    id: "settings-dashboard",
    category: "more",
    imageSrc: "/images/settings.png",
    altText: "Settings dashboard interface",
    title: "Settings Dashboard",
    description:
      "A responsive task-management dashboard supporting task creation, status tracking, and deadline reminders across screen sizes.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/buikeDev/settings",
    demoUrl: "https://settings-gilt.vercel.app/",
  },
  {
    id: "neo-ai",
    category: "more",
    imageSrc: "/images/landingPage.png",
    altText: "Neo AI product landing page",
    title: "Neo AI",
    description:
      "A responsive product landing page that communicates an AI platform's features, benefits, and integration use cases.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    codeUrl: "https://github.com/buikeDev/landingPage",
    demoUrl: "https://bycto-com-7vui.vercel.app/",
  },
];
