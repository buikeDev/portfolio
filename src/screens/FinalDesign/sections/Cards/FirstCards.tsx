import { Card } from "../../../../components/ui/card";

interface ProjectCard {
  href: string;
  imageSrc: string;
  altText: string;
  previewClass?: string;
}

const projects: ProjectCard[] = [
  {
    href: "https://settings-gilt.vercel.app/general",
    imageSrc: "/images/settings.png",
    altText: "Settings App Preview",
    previewClass: "top-[40px] lg:top-[61px] lg:left-[51px] lg:transform-none",
  },
  {
    href: "https://bycto-com-7vui.vercel.app/",
    imageSrc: "/images/landingPage.png",
    altText: "Landing Page Preview",
    previewClass: "w-[200px] lg:w-[265px] h-[120px] lg:h-[158px]",
  },
  {
    href: "https://bycto-com-7vui.vercel.app/",
    imageSrc: "/images/landingPage.png",
    altText: "Landing Page Preview",
    previewClass: "w-[200px] lg:w-[265px] h-[120px] lg:h-[158px]",
  },
];

export default function FirstCards() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full max-w-6xl">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

function ProjectCard({ href, imageSrc, altText, previewClass }: ProjectCard) {
  return (
    <Card className="relative w-full max-w-[320px] lg:max-w-[368px] h-[200px] lg:h-[280px] bg-[#393e4680] rounded-2xl overflow-hidden backdrop-blur-[2px] group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className={`bg-white shadow-lg overflow-hidden ${previewClass}`}>
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-medium text-gray-800">Visit Website</span>
          </div>
        </div>
      </a>
    </Card>
  );
}
