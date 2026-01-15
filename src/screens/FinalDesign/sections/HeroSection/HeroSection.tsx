import { DownloadIcon } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { Button } from "../../../../components/ui/button";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export const HeroSection = (): JSX.Element => {
  const navigate = useNavigate();
  const phrases = [
    "FRONTEND-FOCUSED FULL-STACK DEVELOPER",
    "I TURN IDEAS INTO PRODUCTION-READY WEB PRODUCTS",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const ref = useRef(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const [currentWord, setCurrentWord] = useState("Ago Chukwubuikem Jideofor");
  const words = [
    "Ago Chukwubuikem Jideofor",
    "a React, React-Native Developer",
    "a TailwindCSS, CSS Developer",
    "a Nextjs Nodejs, JavaScript Developer",
  ];

  useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
      setCurrentWord(words[index]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: number;

    if (!isDeleting && displayText.length < currentPhrase.length) {
      // Typing animation
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      }, 100); // Typing speed
    } else if (!isDeleting && displayText.length === currentPhrase.length) {
      // Pause at full phrase
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting animation
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
      }, 50); // Deleting speed
    } else if (isDeleting && displayText.length === 0) {
      // Switch to next phrase
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentPhraseIndex, isDeleting]);

  return (
    <section className="relative w-full md:min-h-screen min-h-[80vh] bg-color-1 overflow-hidden pt-20 pb-10 lg:py-4">
      <div className="relative h-full">
        {/* Main content */}
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-['Poppins',Helvetica] font-bold text-base sm:text-[5px] md:text-lg lg:text-lg flex-row px-6 mb-2 lg:absolute lg:top-[300px] lg:left-[180px] inline-flex  "
        >
          {/* {Name } */}
          <span className="text-[#eeeeee]">Hello, i'm</span>
          <span className="text-white">&nbsp;</span>
          <span className="text-[#00adb5] inline"></span>

          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={controls}
            className="items-center inline ml-2 text-center lg:text-left"
          >
            {/* Heading (Animated Words) */}
            <motion.h1
              variants={fadeUp}
              key={currentWord}
              className="text-md md:text-lg lg:text-xl font-bold  text-[#00adb5]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {currentWord}
            </motion.h1>
          </motion.div>
        </motion.h1>

        {/* Headline with typewriter effect */}
        <div className="flex flex-col items-start lg:items-start gap-8 lg:gap-12 px-6 lg:px-0  lg:absolute lg:top-[334px] lg:left-[180px]  lg:text-left">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-['Poppins',Helvetica] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight lg:leading-[96px] justify-start w-full"
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentPhraseIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-bold text-[#eeeeee] text-base sm:text-lg md:text-3xl lg:text-5xl mb-4 md:mb-6 z-10 inline-block min-w-[22ch] text-left lg:ml-5"
              >
                {displayText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="ml-1"
                >
                  |
                </motion.span>
              </motion.h1>
            </AnimatePresence>
          </motion.h1>

          {/* Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center w-full gap-4 sm:flex-row sm:justify-center sm:items-center lg:gap-6"
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
                className="px-6 lg:px-8  bg-color-3 rounded-3xl font-['Poppins',Helvetica] font-bold text-[#eeeeee] text-base lg:text-lg shadow-[0px_4px_4px_#00000080] w-full sm:w-auto hover:bg-color-3/90 transition-colors"
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
          className="absolute w-48 h-48 transform -translate-x-1/2 lg:hidden bottom-30 left-1/2 opacity-30"
        >
          <img
            className="object-contain w-full h-full"
            alt="Designer illustration"
            src="/icons/laptop-guy.png"
          />
        </motion.div>
      </div>
    </section>
  );
};
