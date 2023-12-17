import CompanyLogo from "../../assets/white-logo.svg?react";

const Navbar = () => (
  <nav className="bg-primary text-white py-[26px] flex justify-center px-5">
    <div className="max-w-screen-xl w-full flex justify-between items-center">
      <a href="/" className="mt-[-11px]">
        <CompanyLogo />
      </a>
      <div className="md:hidden  relative w-[31px] h-[24px]">
        <div className="top-0 left-0 absolute w-[31px] h-[4px]  bg-white rounded-[5px]" />
        <div className="top-[10px] left-0 absolute w-[31px] h-[4px] bg-white rounded-[5px]" />
        <div className="top-[20px] left-0 absolute w-[31px] h-[4px] bg-white rounded-[5px]" />
      </div>
      <ul className="hidden md:flex space-x-6 text-sm">
        <li>
          <a href="#services" className="hover:text-gray-300">
            SERVICES
          </a>
        </li>
        <li>
          <a href="#about-us" className="hover:text-gray-300">
            ABOUT US
          </a>
        </li>
        <li>
          <a href="#contact-us" className="hover:text-gray-300">
            CONTACT US
          </a>
        </li>
        <li>
          <a href="#careers" className="hover:text-gray-300">
            CAREERS
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
