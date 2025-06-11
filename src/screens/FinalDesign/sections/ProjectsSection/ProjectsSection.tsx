import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import FirstCards from "../Cards/FirstCards";
import SecondCards from "../Cards/SecondCards";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

interface Category {
  id: string;
  name: string;
  projects: Project[];
}

// Project data for mapping
const projectCategories: Category[] = [
  {
    id: "1",
    name: "First Page",
    projects: [], // Add your projects here
  },
  {
    id: "2",
    name: "2nd Page",
    projects: [],
  },
  {
    id: "3",
    name: "3rd Page",
    projects: [],
  },
  {
    id: "webdesign",
    name: "Web Design",
    projects: [],
  },
];

const firstCategoryId = projectCategories[0].id;

export const ProjectsSection = (): JSX.Element => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#222831] py-16 lg:py-24 overflow-x-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 w-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
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

        <Tabs defaultValue={firstCategoryId} className="w-full h-full">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 lg:gap-4">
            <TabsList className="flex items-end gap-2 lg:gap-4">
              {projectCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`px-4 lg:px-8 py-2 lg:py-2.5 rounded-3xl data-[state=active]:bg-color-3 bg-[#393e4680] backdrop-blur-sm`}
                >
                  <span className="[text-shadow:0px_4px_4px_#00000080] font-['Poppins',Helvetica] font-bold text-[#eeeeee] text-sm lg:text-lg">
                    {category.name}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {projectCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-8">
              <div className="w-full flex justify-center lg:justify-start lg:mt-10">
                {category.id === "1" && (
                  <div className="flex justify-center w-full">
                    <FirstCards />
                  </div>
                )}
                {category.id === "2" && (
                  <div className="flex justify-center w-full">
                    <SecondCards />
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
