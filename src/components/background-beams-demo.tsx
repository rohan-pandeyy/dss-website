"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Junior Core Waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-md text-center relative z-10">
          Sign up for our waitlist and we&apos;ll notify you on your college email as soon as applications go live. Don&apos;t miss your chance to be among the first to join our team, learn hands-on skills, and contribute to exciting projects and events!
        </p>
        <input
          type="mail"
          placeholder="enrollmentNumber@bennett.edu.in"
          className="rounded-lg border p-2 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full text-white relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
