import React from "react";
import Image from "next/image";
import { IconMail, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 p-8">
      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center md:items-start space-y-8 space-y-reverse md:space-y-0">
        {/* Left Column (Logos & Copyright) */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <div className="flex flex-col items-center md:flex-row md:items-center md:space-x-4 mb-4">
            <div className="flex flex-row items-center md:flex-row md:space-y-0 md:space-x-4">
              <Image src="/dssWHITE_.png" alt="Data Science Society Logo" width={86} height={64} style={{ width: 'auto' }} />
              <Image src="/cabinet-logo-white.png" alt="Student Cabinet Logo" width={220} height={64} className="p-2 rounded" />
            </div>
            <div className="mt-4 md:mt-0">
              <Image src="/NAAC-Logo-2025.png" alt="Bennett University Logo" width={286} height={64} className="p-2 rounded" />
            </div>
          </div>
          <p className="font-poppins text-neutral-600 dark:text-neutral-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Data Science Society. All rights reserved.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm text-center md:text-left mt-2">
            Made with ❤️ by{' '}
            <a
              href="https://rohan-pandeyy.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-poppins hover:text-neutral-800 underline dark:hover:text-neutral-200 transition-colors"
            >
              Rohan Pandey
            </a>
          </p>
        </div>

        {/* Right Column (Connect with Us) */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <h3 className="font-bold text-lg mb-4 text-neutral-800 dark:text-neutral-200">Connect with Us</h3>
          <div className="flex flex-col space-y-2">
            <a href="mailto:datascienceclub@bennett.edu.in" className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">
              <IconMail size={20} />
              <span>datascienceclub@bennett.edu.in</span>
            </a>
            <a href="https://www.instagram.com/datasciencesociety_bu" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">
              <IconBrandInstagram size={20} />
              <span>@datasciencesociety_bu</span>
            </a>
            <a href="https://www.linkedin.com/company/dss-bu" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors">
              <IconBrandLinkedin size={20} />
              <span>@dss-bu</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
