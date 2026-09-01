import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectCategories, projects } from "./projects";

const firstCategoryId = projectCategories[0].id;

export const ProjectsSection = (): JSX.Element => {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen bg-[#222831] py-16 lg:py-24 overflow-x-hidden w-full"
    >
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 w-full">
        <motion.div
          style={shouldReduceMotion ? undefined : { opacity, y }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-[#eeeeee] text-3xl lg:text-4xl font-bold mb-4">
            My Projects
          </h2>
          <p className="text-[#eeeeee] text-base lg:text-lg max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique
            challenge and solution.
          </p>
        </motion.div>

        <motion.div style={shouldReduceMotion ? undefined : { opacity, y }}>
          <Tabs defaultValue={firstCategoryId} className="w-full h-full">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-4 mb-5">
              <TabsList className="flex items-end gap-2 lg:gap-4">
                {projectCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className={`px-2 lg:px-8 py-2 lg:py-2.5 rounded-3xl data-[state=active]:border-color-3 bg-[#393e4680] backdrop-blur-sm`}
                  >
                    <span className="[text-shadow:0px_4px_4px_#00000080] font-['Poppins',Helvetica] font-bold text-[#eeeeee] text-[12px] lg:text-lg">
                      {category.name}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {projectCategories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-8"
              >
                <div className="w-full flex justify-center lg:justify-start lg:mt-10">
                  <div className="grid w-full max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
                    {projects
                      .filter((project) => project.category === category.id)
                      .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                      ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};
