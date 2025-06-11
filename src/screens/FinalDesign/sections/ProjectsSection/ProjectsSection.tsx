import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";
import FirstCards from "../Cards/FirstCards";
import SecondCards from "../Cards/SecondCards";

// interface Category {
//   id: string;
//   name: string;
//   active: boolean;
// }

// Project data for mapping
const projectCategories = [
  { id: "1", name: "First Page" },
  { id: "2", name: "2nd Page" },
  { id: "3", name: "3rd Page" },
  { id: "webdesign", name: "Web Design" },
];

const firstCategoryId = projectCategories[0].id;

export const ProjectsSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen lg:h-[1024px] bg-color-1 overflow-hidden py-16 lg:py-0">
      <div className="relative w-full h-full">
        {/* Background pattern with tech icons - simplified for mobile */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute top-0 left-0 w-[515px] h-[386px] overflow-hidden opacity-10 lg:opacity-20 hidden lg:block">
            <div className="relative w-[512px] h-[436px]">
              <img
                className="absolute w-[53px] h-11 top-[11px] left-[15px]"
                alt="Macbook"
                src="/macbook-4.png"
              />
              <img
                className="absolute w-[46px] h-[69px] top-[74px] left-20"
                alt="Lightbulb"
                src="/lightbulb-5.png"
              />
              <img
                className="absolute w-[29px] h-8 top-[258px] left-[97px]"
                alt="Curly braces"
                src="/curly-braces-3.png"
              />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center lg:items-start gap-8 lg:gap-12 pt-16 lg:pt-[268px] px-6 lg:pl-[120px] lg:pr-6">
          {/* Heading and filter section */}
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-4 w-full">
            <h2 className="font-['Poppins',Helvetica] font-bold text-4xl sm:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-normal text-center lg:text-left">
              <span className="text-[#eeeeee]">My recent</span>
              <span className="text-white">&nbsp;</span>
              <span className="text-[#00adb5]">works</span>
            </h2>

            <Tabs defaultValue={firstCategoryId} className="w-full h-full">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-4 ">
                <TabsList className="flex items-end gap-4">
                  {projectCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className={`px-8 py-2.5 rounded-3xl data-[state=active]:bg-color-3 bg-[#393e4680] backdrop-blur-sm`}
                    >
                      <span className="[text-shadow:0px_4px_4px_#00000080] font-['Poppins',Helvetica] font-bold text-[#eeeeee] text-lg">
                        {category.name}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <div className="w-full flex justify-center lg:justify-start lg:mt-10">
                {projectCategories.map((category) => (
                  <TabsContent
                    key={category.id}
                    value={category.id}
                    className="w-full max-w-6xl" // Add this class
                  >
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
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>

          {/* Project cards */}
        </div>
      </div>
    </section>
  );
};
