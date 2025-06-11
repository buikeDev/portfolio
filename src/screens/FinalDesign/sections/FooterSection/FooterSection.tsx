import {
  FacebookIcon,
  HomeIcon,
  InstagramIcon,
  PhoneIcon,
  TwitterIcon,
  UserIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const FooterSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    {
      icon: <HomeIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
      text: "Home",
      href: "#",
    },
    {
      icon: <UserIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
      text: "About me",
      href: "#about",
    },
    {
      icon: <PhoneIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
      text: "Contact",
      href: "#",
    },
  ];

  // Social media links data
  const socialLinks = [
    {
      icon: <FacebookIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
      label: "Facebook",
    },
    {
      icon: <InstagramIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
      label: "Instagram",
    },
    {
      icon: <TwitterIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
      label: "Twitter",
    },
    {
      icon: <YoutubeIcon className="w-5 h-5 lg:w-6 lg:h-6" />,
      label: "Youtube",
    },
  ];

  return (
    <footer className="w-full min-h-[300px] lg:h-[400px] bg-color-1 flex flex-col items-center justify-center relative py-12 lg:py-0">
      <div className="w-full max-w-[475px] h-full flex flex-col items-center justify-center relative px-6">
        {/* Vertical line - hidden on mobile */}
        <img
          className="h-full w-px absolute left-[29px] hidden lg:block"
          alt="Line"
          src="/line-7.svg"
        />

        {/* Navigation links */}
        <nav className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 mb-8 lg:mb-10">
          {navLinks.map((link, index) => (
            <Button
              key={index}
              variant="ghost"
              className="inline-flex items-center gap-2.5 p-2.5 text-[#eeeeee] hover:bg-color-2 text-base lg:text-lg"
              asChild
            >
              <a href={link.href}>
                {link.icon}
                <span className="font-normal font-['Poppins',Helvetica]">
                  {link.text}
                </span>
              </a>
            </Button>
          ))}
        </nav>

        {/* Social media icons */}
        <div className="flex items-center gap-4 lg:gap-6 mt-4 lg:mt-5">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className="w-10 h-10 lg:w-12 lg:h-12 bg-color-2 rounded-full flex items-center justify-center hover:bg-color-3"
            >
              {social.icon}
              <span className="sr-only">{social.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Terms and Privacy */}
      <div className="absolute bottom-6 lg:bottom-12 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-24 lg:transform-none">
        <p className="font-['Poppins',Helvetica] font-normal text-[#eeeeeebf] text-sm lg:text-lg text-center lg:text-right">
          Terms of Service - Privacy Policy
        </p>
      </div>
    </footer>
  );
};
