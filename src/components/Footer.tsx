import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="w-full  bg-gray-100 py-6 mt-32">
        <div className="w-10/12 mx-auto container  px-4 flex flex-col items-center sm:flex-row sm:justify-between text-center lg:text-center">
          <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-0">
            <a href="#" className="text-gray-600 hover:text-black">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              FAQs
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Contact Us
            </a>
          </div>
          <Link href={"/"}>
            <div className="text-lg cursor-pointer font-semibold text-gray-700">
              FitFlux
            </div>
          </Link>
          <div className="pt-4 sm:pt-0 text-gray-700 text-sm">
            Design by Sandamina Wijenayake
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
