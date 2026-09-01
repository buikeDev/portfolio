import {
  HomeIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "../../../../components/ui/button";

const navLinks = [
  { icon: HomeIcon, text: "Home", href: "#home" },
  { icon: UserIcon, text: "About me", href: "#about" },
  { icon: PhoneIcon, text: "Contact", href: "#contact" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full min-h-[300px] lg:h-[400px] bg-color-1 flex flex-col items-center justify-center relative py-12 lg:py-0">
      <div className="w-full max-w-[475px] h-full flex flex-col items-center justify-center relative px-6">
        {/* Vertical line - hidden on mobile */}
        <img
          className="h-full w-px absolute left-[29px] hidden lg:block"
          alt=""
          src="/line-7.svg"
        />

        {/* Navigation links */}
        <nav className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 mb-8 lg:mb-10">
          {navLinks.map((link) => {
            const Icon = link.icon;

            return (
              <Button
                key={link.href}
                variant="ghost"
                className="inline-flex items-center gap-2.5 p-2.5 text-[#eeeeee] hover:bg-color-2 text-base lg:text-lg"
                asChild
              >
                <a href={link.href}>
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  <span className="font-normal font-['Poppins',Helvetica]">
                    {link.text}
                  </span>
                </a>
              </Button>
            );
          })}
        </nav>
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
