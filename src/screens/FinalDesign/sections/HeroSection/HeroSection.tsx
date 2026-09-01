import { DownloadIcon } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const phrases = [
  "FRONTEND-FOCUSED FULL-STACK DEVELOPER",
  "I TURN IDEAS INTO PRODUCTION-READY WEB PRODUCTS",
];

const roles = [
  "Ago Chukwubuikem Jideofor",
  "a React developer",
  "a React Native developer",
  "a JavaScript developer",
  "a Tailwind CSS developer",
  "a Next.js and Node.js developer",
];

export const HeroSection = (): JSX.Element => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [currentWord, setCurrentWord] = useState(roles[0]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setCurrentWord(roles[index]);
    }, 2500);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: number;

    if (!isDeleting && displayText.length < currentPhrase.length) {
      timeout = window.setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentPhrase.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText.length > 0) {
      timeout = window.setTimeout(() => {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentPhraseIndex, isDeleting, shouldReduceMotion]);

  const visiblePhrase = shouldReduceMotion ? phrases[0] : displayText;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-background overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto relative min-h-screen">
        <div className="relative z-20 px-6 lg:px-20 pt-36 lg:pt-56 max-w-5xl">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center gap-2 text-sm md:text-lg font-semibold"
          >
            <span className="text-[#eeeeee]">Hello, I'm</span>

            <motion.div
              ref={ref}
              variants={container}
              initial="hidden"
              animate={controls}
            >
              <motion.span
                key={currentWord}
                variants={fadeUp}
                className="text-primary font-bold"
              >
                {currentWord}
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 min-h-[140px] md:min-h-[190px] lg:min-h-[210px] flex items-start"
          >
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentPhraseIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-foreground max-w-[900px]"
              >
                {visiblePhrase}
                <motion.span
                  animate={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: [0, 1, 0] }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : { repeat: Infinity, duration: 0.8 }
                  }
                  className="ml-1 text-primary"
                >
                  |
                </motion.span>
              </motion.h1>
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 mt-4"
          >
            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 2, repeat: Infinity }
              }
            >
              <Button
                onClick={() => navigate("/hire-me")}
                className="px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-lg font-bold shadow-xl"
              >
                Hire me
              </Button>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={
                shouldReduceMotion
                  ? undefined
                  : { duration: 2, repeat: Infinity, delay: 0.4 }
              }
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
                className="px-8 py-6 rounded-full bg-secondary hover:bg-secondary/90 text-lg font-bold shadow-xl"
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.img
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          src="/icons/Vector 187.png"
          alt=""
          className="absolute left-10 top-[430px] w-28 hidden lg:block z-10"
        />

        <motion.div
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute right-0 bottom-0 w-[520px] h-[650px] hidden lg:block z-0"
        >
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              src="/icons/doodles mixed round.png"
              alt=""
              className="absolute top-0 right-0 w-[470px]"
            />

            <motion.img
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              src="/icons/laptop-guy.png"
              alt="Developer illustration"
              className="absolute bottom-0 left-0 w-[420px]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 0.25 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="lg:hidden absolute bottom-10 left-1/2 -translate-x-1/2 w-56"
        >
          <img
            src="/icons/laptop-guy.png"
            alt=""
            className="w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};
