import React from "react";
const Footer = () => {
  return (
    <footer className="bg-black absolute w-full h-1/3 flex md:justify-center text-gray-500 text-[13px]">
      <div className="mt-4 ml-10">
        <p>Questions? Call xx0-8xx-9x9-1xx4</p>
        <div className="flex flex-col">
          <div className=" flex mb-4 md:mb-0 lg:mb-0">
            <ul className="mt-4 flex space-x-24 md:space-x-48">
              <li>
                <a href="#faq" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="mt-4 mb-10 flex space-x-2 md:space-x-[105px]">
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Corporate Information
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
