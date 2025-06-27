import { DownloadIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";

import { useNavigate } from "react-router-dom";

export const HeroSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full md:min-h-screen min-h-[80vh] bg-color-1 overflow-hidden py-20 lg:py-4">
      <div className="relative h-full">
        {/* Main content */}
        <div className="flex flex-col items-center lg:items-start gap-8 lg:gap-12 px-6 lg:px-0 pt-12 lg:pt-0 lg:absolute lg:top-[334px] lg:left-[180px] text-center lg:text-left">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-['Poppins',Helvetica] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight lg:leading-[96px]"
          >
            <span className="text-[#eeeeee]">CREATIVE WEB</span>
            <span className="text-white">&nbsp;</span>
            <span className="text-[#00adb5] block lg:inline">DEVELOPER</span>
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Button
                onClick={() => navigate("/hire-me")}
                className="px-6 lg:px-8 py-2.5 bg-color-3 rounded-3xl font-['Poppins',Helvetica] font-bold text-[#eeeeee] text-base lg:text-lg shadow-[0px_4px_4px_#00000080] w-full sm:w-auto hover:bg-color-3/90 transition-colors"
              >
                Hire me
              </Button>
            </motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv/resume.pdf";
                  link.download = "resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-6 lg:px-8 py-2.5 bg-[#393e4680] rounded-3xl font-['Poppins',Helvetica] font-bold text-[#eeeeee] text-base lg:text-lg shadow-[0px_4px_4px_#00000080] w-full sm:w-auto hover:bg-[#393e4680]/90 transition-colors"
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Left side vector - hidden on mobile */}
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute w-[123px] h-[235px] top-[385px] left-[72px] hidden lg:block"
          alt="Vector"
          src="/icons/Vector 187.png"
        />

        {/* Right side illustration - simplified for mobile */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="absolute md:right-0 md:top-[295px] lg:w-[547px] h-[656px] hidden lg:block"
        >
          {/* Shadow element */}
          <div className="absolute w-[348px] h-6 top-[543px] left-0 bg-[#00000080] rounded-[174px/12px]" />

          {/* Tech icons container */}
          <div className="absolute w-[514px] h-[514px] top-0 left-[33px]">
            <div className="relative w-[462px] h-[456px] top-7 left-[22px]">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                src="/icons/doodles mixed round.png"
                alt="Tech-doodles"
              />
            </div>
          </div>

          {/* Character illustration */}
          <div className="absolute w-[400px] h-[473px] top-[183px] left-0">
            <div className="h-[473px]">
              <div className="relative w-[400px] h-[473px]">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="absolute w-[400px] h-[473px] top-0 left-0"
                >
                  <img src="/icons/laptop-guy.png" alt="laptop-guy" />
                </motion.div>

                <div className="absolute w-[99px] h-5 top-[127px] left-[61px] bg-[#eeeeee] rounded-[2.01px] border-[1.4px] border-solid border-black rotate-[75deg]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile simplified illustration */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="lg:hidden absolute bottom-30 left-1/2 transform -translate-x-1/2 w-48 h-48 opacity-30"
        >
          <img
            className="w-full h-full object-contain"
            alt="Designer illustration"
            src="/icons/laptop-guy.png"
          />
        </motion.div>
      </div>
    </section>
  );
};
