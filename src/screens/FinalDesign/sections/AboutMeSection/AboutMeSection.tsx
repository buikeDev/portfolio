import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";

export const AboutMeSection = (): JSX.Element => {
  // Data for the floating tech elements - simplified for mobile
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Hi there! 👋 I’m Ago Chukwubuikem Jideofor, a passionate Full Stack Web Developer with expertise in building modern, scalable, and user-friendly web applications. I thrive on turning ideas into functional and visually appealing digital experiences.

With a strong foundation in HTML, CSS, and JavaScript, I specialize in frontend development using React.js and Next.js, ensuring fast, responsive, and SEO-friendly applications. On the backend, I work with technologies like Node.js, Express, and databases (SQL & NoSQL) to create seamless full-stack solutions.

I’m dedicated to writing clean, efficient code while staying updated with the latest industry trends. Whether it’s crafting intuitive UIs or optimizing server performance, I love solving problems and delivering high-quality results.

When I’m not coding, you’ll find me exploring new tech, contributing to open-source projects, or sharing knowledge with the developer community.

Let’s build something amazing together`;

  // Function to truncate text to 30 words
  const truncateText = (text: string, wordCount: number) => {
    const words = text.split(" ");
    if (words.length <= wordCount) return text;
    return words.slice(0, wordCount).join(" ") + "...";
  };

  const displayedText = isExpanded ? fullText : truncateText(fullText, 30);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen lg:h-[1024px] bg-color-1 py-16 lg:py-0"
    >
      <div className="relative h-full w-full max-w-[1440px] mx-auto">
        {/* About me content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 lg:px-24 pt-8 lg:pt-[255px] gap-12 lg:gap-0">
          {/* Left side - Text content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col max-w-full lg:max-w-[550px] text-center lg:text-left"
          >
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Poppins',Helvetica] font-bold text-4xl sm:text-5xl lg:text-[64px] tracking-[0] leading-tight lg:leading-normal"
            >
              <span className="text-[#eeeeee]">About</span>
              <span className="text-white">&nbsp;</span>
              <span className="text-[#00adb5]">me</span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-['Poppins',Helvetica] font-normal text-base lg:text-lg text-[#eeeeeebf] mt-6 lg:mt-8"
            >
              {displayedText}
              {fullText.split(" ").length > 30 && (
                <Button
                  variant="link"
                  className="font-bold text-[#eeeeee] p-0 text-base lg:text-lg hover:text-[#00adb5] transition-colors"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Read less" : "Read more"}
                </Button>
              )}
            </motion.p>

            {/* Vector below text - hidden on mobile */}
            <motion.img
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-[130px] h-[190px] mt-[60px] hidden lg:block ml-[200px]"
              alt="Vector"
              src="/icons/arrow.png"
            />
          </motion.div>

          {/* Right side - Illustration - simplified for mobile */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[400px] lg:max-w-[665px] h-[300px] lg:h-[593px] mt-8 lg:mt-0"
          >
            {/* Shadow effect */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-[200px] lg:w-[348px] top-[280px] lg:top-[569px] left-1/2 transform -translate-x-1/2 lg:left-40 lg:transform-none rounded-[100px/6px] lg:rounded-[174px/12px] absolute h-3 lg:h-6 bg-[#00000080]"
            />

            {/* Main illustration container */}
            <div className="absolute w-full lg:w-[665px] h-[250px] lg:h-[499px] top-0 left-0 overflow-hidden">
              <div className="relative w-full lg:w-[661px] h-[300px] lg:h-[564px] top-[5px] left-[3px]">
                {/* Floating elements - only show on desktop */}
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  alt="doodle items"
                  src="/icons/doodle-floating-items.png"
                />

                {/* Simplified mobile illustration */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="lg:hidden absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-48 h-48">
                    <img
                      className="absolute w-full h-full object-contain opacity-80"
                      alt="Developer illustration"
                      src="/icons/user-profile.png"
                    />
                    <img
                      className="absolute w-16 h-16 top-4 right-4 object-contain"
                      alt="Code"
                      src="/lightbulb-2.png"
                    />
                  </div>
                </motion.div>

                {/* Desktop illustration elements */}
                <div className="hidden lg:block"></div>
              </div>
            </div>

            {/* Character illustration - simplified for mobile */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hidden lg:block"
            >
              <div className="absolute w-[413px] h-[353px] top-56 left-[108px]">
                <img src="/icons/lazy-coder.png" alt="lazy-coder-icon" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
