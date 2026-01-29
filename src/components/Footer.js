import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-blue py-[24px] text-white text-sm">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between space-y-2 md:flex-row md:space-y-0">
          <div className="text-center md:text-left">
            2025 &copy; STC Falcon Legal Services. All Rights Reserved.
          </div>
          <div className="flex space-x-4">
            <Link
              to="/privacy-policy"
              className="transition-colors duration-300 hover:text-gray-300"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <a
              href="mailto:stcfalcon.ls@gmail.com"
              className="transition-colors duration-300 hover:text-gray-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
