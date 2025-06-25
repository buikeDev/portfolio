"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 20);
    };
    if (typeof window !== "undefined") {
      setIsScroll(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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

  // Navigation items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section
      className={`fixed left-[50%] -translate-x-[50%] w-[95%] flex justify-between items-center z-30 transition-all font-sora duration-500 text-white shadow-lg shadow-[#00adb5] rounded-[12px] md:rounded-[18px]  ${
        isScroll
          ? " max-w-[70%] shadow-nav top-9 bg-white/5 rounded-4xl backdrop-blur-md"
          : "max-w-full shadow-none top-3 md:rounded-none md:bg-transparent md:backdrop-blur-none"
      }`}
    >
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center w-full px-6 lg:px-24 py-2 lg:py-6"
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
              className="fixed top-1 left-[10%] transform -translate-x-1/2 h-[60vh] w-[85%] bg-[#393e46] z-50 shadow-xl md:hidden rounded-[18px] bg-gradient-to-b from-[#00ADB5] to-[#393E46] border-white"
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
    </section>
  );
}
