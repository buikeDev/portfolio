import type { Project } from "./projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="bg-[#23263a] rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 w-full max-w-sm mx-auto">
      <img
        src={project.imageSrc}
        alt={project.altText}
        loading="lazy"
        width="384"
        height="192"
        className="object-cover w-full h-48 rounded-t-2xl"
      />

      <div className="flex flex-col flex-1 p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="text-[#cfd8dc] text-sm mb-4">{project.description}</p>

        <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
          {project.tech.map((technology) => (
            <li
              key={technology}
              className="bg-[#23263a] text-[#00adb5] px-3 py-1 rounded-full text-xs font-semibold border border-[#00adb5]"
            >
              {technology}
            </li>
          ))}
        </ul>

        {project.codeUnavailableMessage && (
          <p className="mb-3 text-xs text-[#aebdc2]">
            {project.codeUnavailableMessage}
          </p>
        )}

        <div className="flex gap-3 mt-auto">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              className="flex-1 border border-[#00adb5] text-[#00adb5] rounded-lg py-2 text-center font-semibold hover:bg-[#00adb5] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eeeeee]"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          )}
          <a
            href={project.demoUrl}
            className="flex-1 bg-[#00adb5] text-white rounded-lg py-2 text-center font-semibold hover:bg-[#019ca1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#eeeeee]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.codeUrl ? "Live Demo" : "View Project"}
          </a>
        </div>
      </div>
    </article>
  );
}
