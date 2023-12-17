import CompanyLogo from "../../assets/white-logo.svg?react";

const Footer = () => {
  return (
    <div className="bg-primary text-white pt-[40px] pb-[20px] flex justify-center items-center flex-col  mt-20 px-16">
      <div className="flex items-start justify-between pb-[40px] relative max-w-screen-xl w-full flex-wrap gap-14">
        <div className="flex flex-col w-[413px] gap-[20px] items-start relative">
          <a href="/" className="mt-[-11px]">
            <CompanyLogo />
          </a>
          <p className="relative self-stretch [font-family:'Lato-Regular',Helvetica] font-normal text-white text-[16px]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="flex gap-[40px] items-start relative flex-wrap">
          <div className="flex flex-col  items-start gap-[12px] relative ">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[21px] tracking-[0] leading-[normal] whitespace-nowrap">
              Our Technologies
            </div>
            <div className="inline-flex flex-col gap-[12px] flex-[0_0_auto] items-start relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Reactjs
              </div>
              <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Gatsby
              </div>
              <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Nextjs
              </div>
              <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Nodejs
              </div>
              <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Graphql
              </div>
              <div className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Laravel
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[12px] relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[21px] tracking-[0] leading-[normal] whitespace-nowrap">
              Our Services
            </div>
            <div className="flex flex-col items-start gap-[12px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Social Media Marketing
              </div>
              <p className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Web &amp; Mobile App Development
              </p>
              <div className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Data &amp; Analytics
              </div>
              <div className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Google Marketing Solutions
              </div>
              <div className="relative self-stretch [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[normal]">
                Search Engine Optimization
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[630px] items-center gap-[8px]">
        <hr className="w-full" />
        <div className="inline-flex items-center justify-center gap-[16px] text-[14px] font-medium">
          <div className="w-fit">Privacy Policy</div>
          <div className="h-[16px] border-white border-l" />
          <div className="w-fit">Terms &amp; Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
