import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  ArrowLeft,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

export const HireMeSection = (): JSX.Element => {
  // Social media links data
  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5 lg:w-6 lg:h-6" />,
      label: "Facebook",
      url: "https://www.facebook.com/ago.bkem?mibextid=wwXIfr&mibextid=wwXIfr",
    },
    {
      icon: <Twitter className="w-5 h-5 lg:w-6 lg:h-6" />,
      label: "Twitter",
      url: "https://x.com/bkem_der_brainy?s=21",
    },
    {
      icon: <Linkedin className="w-5 h-5 lg:w-6 lg:h-6" />,
      label: "Linkedin",
      url: "https://linkedin.com/in/ago-chukwubuikem-aa84a1305",
    },
  ];

  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <section
      ref={sectionRef}
      id="hire-me"
      className="relative min-h-screen bg-[#222831] py-16 lg:py-24 overflow-x-hidden w-full"
    >
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 w-full">
        <Button
          onClick={() => navigate("/")}
          className="mb-8 bg-[#393e4680] hover:bg-[#393e4680]/90 text-[#eeeeee]"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Button>

        <motion.div></motion.div>

        <motion.div
          style={{ opacity, y }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-[#eeeeee] text-3xl lg:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-[#eeeeee] text-base lg:text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity, y }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-[#eeeeee] text-base lg:text-lg max-w-2xl mx-auto">
            You can reach out to me via these chanels ...
          </h2>
          <div className="flex items-center gap-4 lg:gap-6 mt-4 lg:mt-5 justify-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 lg:w-12 lg:h-12 bg-color-2 rounded-full flex items-center justify-center hover:bg-color-3 transition-colors"
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div style={{ opacity, y }} className="max-w-2xl mx-auto">
          <form
            action="https://formspree.io/f/xwpborjn"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[#eeeeee] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-[#393e4680] text-[#eeeeee] border border-[#393e46] focus:outline-none focus:border-[#00adb5]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[#eeeeee] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-[#393e4680] text-[#eeeeee] border border-[#393e46] focus:outline-none focus:border-[#00adb5]"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-[#eeeeee] mb-2">
                Subject
              </label>
              <input
                type="email"
                name="email"
                id="subject"
                className="w-full px-4 py-2 rounded-lg bg-[#393e4680] text-[#eeeeee] border border-[#393e46] focus:outline-none focus:border-[#00adb5]"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[#eeeeee] mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-[#393e4680] text-[#eeeeee] border border-[#393e46] focus:outline-none focus:border-[#00adb5]"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#00adb5] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#00adb5]/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
