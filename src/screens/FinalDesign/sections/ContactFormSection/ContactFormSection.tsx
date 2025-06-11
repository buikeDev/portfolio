import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactFormSection = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    { id: "name", label: "Your name", placeholder: "Name", type: "input" },
    { id: "email", label: "Your email", placeholder: "Email", type: "input" },
    {
      id: "message",
      label: "Your Message",
      placeholder: "Message",
      type: "textarea",
    },
  ];

  return (
    <section className="relative w-full bg-color-1 py-16 lg:py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 px-6">
        {/* Left side with heading and illustration */}
        <div className="flex flex-col space-y-8 lg:w-1/2 text-center lg:text-left">
          <h2 className="font-['Poppins',Helvetica] font-bold text-4xl sm:text-5xl lg:text-[64px] leading-tight lg:leading-[80px]">
            <span className="text-[#eeeeee]">Got a project in </span>
            <span className="text-[#00adb5]">mind?</span>
          </h2>

          {/* Simplified illustration for mobile */}
          <div className="relative h-[200px] lg:h-[348px] w-[180px] lg:w-[255px] mx-auto lg:mx-0">
            {/* Shadow */}
            <div className="w-[120px] lg:w-[190px] h-4 lg:h-6 rounded-[60px/8px] lg:rounded-[95px/12px] bg-[#00000080] absolute bottom-[-20px] lg:bottom-[-40px] left-[30px] lg:left-[10px]" />

            {/* Desktop illustration */}
            <div className="hidden lg:block">
              <img src="/icons/climb.png" alt="icon" />
            </div>

            {/* Mobile simplified illustration */}
            <div className="lg:hidden absolute inset-0 flex items-center justify-center">
              <div className="relative w-32 h-32">
                <img
                  className="w-full h-full object-contain opacity-60"
                  alt="Contact illustration"
                  src="/mail-40.png"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side with form */}
        <Card className="lg:w-1/2 w-full bg-transparent border-none">
          <CardContent className="p-0">
            <form className="flex flex-col gap-6 w-full max-w-[600px]">
              <div className="flex flex-col lg:flex-row gap-6 w-full">
                {formFields.slice(0, 2).map((field) => (
                  <div key={field.id} className="flex flex-col gap-2.5 flex-1">
                    <label
                      htmlFor={field.id}
                      className="font-['Poppins',Helvetica] font-bold text-[#eeeeee] text-base lg:text-lg"
                    >
                      {field.label}
                    </label>
                    <Input
                      id={field.id}
                      placeholder={field.placeholder}
                      className="bg-[#393e4680] text-[#eeeeee] placeholder:text-[#eeeeee80] placeholder:font-bold rounded-2xl py-3 lg:py-4 px-4 lg:px-6 h-auto text-base"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2.5 w-full">
                <label
                  htmlFor="message"
                  className="font-['Poppins',Helvetica] font-bold text-[#eeeeee] text-base lg:text-lg"
                >
                  {formFields[2].label}
                </label>
                <Textarea
                  id="message"
                  placeholder={formFields[2].placeholder}
                  className="bg-[#393e4680] text-[#eeeeee] placeholder:text-[#eeeeee80] placeholder:font-bold rounded-2xl py-3 lg:py-4 px-4 lg:px-6 h-[200px] lg:h-[280px] resize-none text-base"
                />
              </div>

              <Button
                type="submit"
                className="bg-color-3 hover:bg-color-3/90 text-[#eeeeee] font-['Poppins',Helvetica] font-bold text-base lg:text-lg rounded-3xl py-2.5 px-6 lg:px-8 w-full lg:w-fit flex items-center justify-center gap-2.5"
              >
                Send Message
                <img
                  className="w-6 h-6 lg:w-[30px] lg:h-[31px]"
                  alt="Send"
                  src="/send.svg"
                />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Decorative elements - hidden on mobile */}
      <img
        className="absolute w-[75px] h-[72px] bottom-[169px] right-[165px] hidden xl:block"
        alt="Mail"
        src="/mail-40.png"
      />
      <img
        className="absolute w-[153px] h-[115px] top-[60px] right-[467px] hidden xl:block"
        alt="Keyboard"
        src="/keyboard-41.png"
      />

      {/* Divider line */}
      <div className="w-full h-px bg-[#eeeeee]/10 absolute bottom-0"></div>
    </section>
  );
};
