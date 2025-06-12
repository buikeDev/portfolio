import { DownloadIcon, Image, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HeroSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Tech icons and elements data for the floating elements

  // Navigation items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-color-1 overflow-hidden">
      <div className="relative h-full">
        {/* Navigation */}
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center w-full px-6 lg:px-24 py-6 lg:py-12"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-['Oswald',Helvetica] font-bold text-[#eeeeee] text-xl lg:text-2xl"
          >
            BuikeDev
          </motion.div>

          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="font-['Poppins',Helvetica] font-normal text-[#eeeeee] text-base lg:text-lg hover:text-[#00adb5] transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            onClick={toggleMenu}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:hidden text-[#eeeeee] p-2"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </motion.header>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 md:hidden"
                onClick={toggleMenu}
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-1 left-[10%] h-[60vh] w-full w-[85%] bg-[#393e46] z-50 shadow-xl md:hidden rounded-[18px] bg-gradient-to-b from-[#00ADB5] to-[#393E46] border-white"
              >
                <div className="flex flex-col h-full">
                  {/* Close Button */}
                  <div className="flex justify-end p-4">
                    <motion.button
                      onClick={toggleMenu}
                      className="text-[#eeeeee] p-2 rounded-full hover:bg-[#ffffff20] transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
                  </div>

                  {/* Menu Items */}
                  <nav className="flex flex-col justify-center gap-6 p-6 mt-4">
                    <motion.button
                      onClick={() => {
                        scrollToSection("home");
                        toggleMenu();
                      }}
                      className="text-[#eeeeee] text-lg font-medium hover:text-[#393E46] transition-colors py-2"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Home
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        scrollToSection("about");
                        toggleMenu();
                      }}
                      className="text-[#eeeeee] text-lg font-medium hover:text-[#393E46] transition-colors py-2"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      About Me
                    </motion.button>

                    <motion.button
                      onClick={() => {
                        scrollToSection("contact");
                        toggleMenu();
                      }}
                      className="text-[#eeeeee] text-lg font-medium hover:text-[#393E46] transition-colors py-2"
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact
                    </motion.button>
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Horizontal and vertical lines - hidden on mobile */}

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
              <Button className="px-6 lg:px-8 py-2.5 bg-[#393e4680] rounded-3xl font-['Poppins',Helvetica] font-bold text-[#eeeeee] text-base lg:text-lg shadow-[0px_4px_4px_#00000080] w-full sm:w-auto hover:bg-[#393e4680]/90 transition-colors">
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
