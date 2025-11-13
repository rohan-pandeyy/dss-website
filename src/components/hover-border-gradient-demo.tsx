"use client";

import React from "react";
import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import AnimatedModalDemo from "@/components/animated-modal-demo";

export default function HoverBorderGradientDemo() {
  return (
    <div className="md:translate-y-0 w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <h1 className="mt-30 relative z-10 text-4xl md:text-7xl text-transparent [-webkit-text-stroke:0.4px_silver] text-center font-sans font-bold">Upcoming Event</h1>
      <h1 className="mt-10 relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent text-center font-sans font-bold">
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
      <div className="w-full px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
        <div className="order-2 md:order-1 mt-2 text-center">
          <h2 className="text-2xl font-bold text-white mt-4">
            Speaker 1
          </h2>
          <DraggableCardContainer className="flex items-center justify-center mt-4">
            <div className="relative">
              <DraggableCardBody className="w-full max-w-xs mx-auto">
                <Image
                  src="/Events/GoogleCrowdsource_NoCodeAITrainingWorkshop/MrHarshitGoyal.jpg"
                  alt="Mr. Harshit Goyal"
                  width={320}
                  height={320}
                  className="pointer-events-none relative z-10 h-60 w-60 mx-auto object-cover"
                />
                <h3 className="mt-4 font-poppins text-center text-xl font-bold text-neutral-700 dark:text-neutral-300">
                  Mr. Harshit Goyal
                </h3>
                <p className="text-center font-poppins text-base text-neutral-500 dark:text-neutral-400">
                  AI Data Operations Department<br />
                  Operations Manager<br />
                  Google
                </p>
              </DraggableCardBody>
              <div className="absolute inset-0 z-50 bg-transparent cursor-default"></div>
            </div>
          </DraggableCardContainer>
        </div>

        <div className="order-1 md:order-2 flex flex-col justify-center">
          <p className="text-neutral-400 max-w-lg mx-auto mt-2 text-md text-center relative z-10">
            <br />
            Join us for an exciting two-hour interactive workshop/ hands-on
            session powered by Google Crowdsource, where you&apos;ll discover
            Google trains it&apos;s AI models, even how you can help train &
            improve Google&apos;s AI - no coding required!
            <br />
            <br />
            <span className="relative z-10 text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center font-sans font-bold">
              20th November 2025,
              <br />
              time revealing soon
              <br />
              <br />
            </span>
            This is your chance to network with industry specialists,
            understand how big techs like Google train and improve their AI
            systems. Don&apos;t miss out!
            <br />
            <br />
          </p>
          <div className="flex justify-center text-center">
            <a
              href="https://rsvp.withgoogle.com/events/crowdsource-learning-community/forms/registration"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HoverBorderGradient
                  containerClassName="rounded-full"
                  className="dark:bg-black bg-white text-black dark:text-white flex cursor-pointer items-center space-x-2"
                >
                  <AceternityLogo />
                  <span>Register Here</span>
                </HoverBorderGradient>
            </a>
          </div>
          {/* <AnimatedModalDemo /> */}
        </div>

        <div className="order-3 md:order-3 mt-2 text-center">
          <h2 className="text-2xl font-bold text-white mt-4">
            Speaker 2
          </h2>
          <DraggableCardContainer className="flex items-center justify-center mt-4">
            <div className="relative">
              <DraggableCardBody className="w-full max-w-xs mx-auto">
                <Image
                  src="/Events/GoogleCrowdsource_NoCodeAITrainingWorkshop/MrNirmitAhuja.jpg"
                  alt="Mr. Nirmit Ahuja"
                  width={320}
                  height={320}
                  className="pointer-events-none relative z-10 h-60 w-60 mx-auto object-cover"
                />
                <h3 className="mt-4 font-poppins text-center text-xl font-bold text-neutral-700 dark:text-neutral-300">
                  Mr. Nirmit Ahuja
                </h3>
                <p className="text-center font-poppins text-base text-neutral-500 dark:text-neutral-400">
                  AI Data Operations Department<br />
                  Operations Manager<br />
                  Google
                </p>
              </DraggableCardBody>
              <div className="absolute inset-0 z-50 bg-transparent cursor-default"></div>
            </div>
          </DraggableCardContainer>
        </div>
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