"use client";

import React from "react";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function HoverBorderGradientDemo() {
  return (
    <div className="-translate-y-10 md:translate-y-0 w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent text-center font-sans font-bold">
        {/* Mobile view */}
        <div className="flex flex-col items-center md:hidden">
          <Image
            src="/Assets/DSS_Logo_White.svg"
            alt="DSS Logo"
            width={140}
            height={60}
            className="h-8 w-auto mx-2 translate-y-1"
          />
          <span className="bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">&#215;</span>
          <Image
            src="/Assets/google.svg"
            alt="Google Logo"
            width={596}
            height={194.5}
            className="h-10 w-auto my-2"
          />
          <span className="bg-clip-text bg-gradient-to-t from-neutral-200 to-neutral-600">Crowdsource</span>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex items-center justify-center">
          <Image
            src="/Assets/DSS_Logo_White.svg"
            alt="DSS Logo"
            width={140}
            height={60}
            className="h-14 w-auto mx-2 translate-y-1"
          />
          <span className="bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">&#215;</span>
          <Image
            src="/Assets/google.svg"
            alt="Google Logo"
            width={596}
            height={194.5}
            className="h-16 w-auto mx-2 translate-y-3"
          />
          <span className="bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">Crowdsource</span>
        </div>
      </h1>
      <p className="text-neutral-400 max-w-lg mx-auto mt-2 text-md text-center relative z-10">
        <br />Join us for an exciting two-hour interactive workshop/ hands-on session powered by Google Crowdsource, 
        where you&apos;ll discover Google trains it&apos;s AI models, even how you can help
         train & improve Google&apos;s AI - no coding required!<br /><br />
        <span className="relative z-10 text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center font-sans font-bold">
        20th November 2025,<br />10:00 AM IST<br /><br />
        </span>
        This is your chance to network with industry specialists, understand how big 
        techs like Google train and improve their AI systems. Don&apos;t miss out!<br /><br />
      </p>
      <div className="mb-16 flex justify-center text-center">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex cursor-pointer items-center space-x-2"
        >
          <AceternityLogo />
          <span>Register Here</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};