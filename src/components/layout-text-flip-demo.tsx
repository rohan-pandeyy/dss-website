"use client";
import CompareDemo from "@/components/compare-demo";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

export default function LayoutTextFlipDemo() {
  return (
    <div className="max-w-6xl mx-auto mb-12">
      <motion.div className="relative mx-4 my-4 flex flex-row items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0">
        <LayoutTextFlip
          text="What we "
          words={["are", "do", "stand for", "believe in"]}
        />
      </motion.div>
      <div className="mt-4 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 flex items-center">
          <p className="px-4 md:px-0 text-left md:text-2xl text-lg text-neutral-600 dark:text-neutral-400 font-poppins">
            Our mission at the BU Data Science Society is to foster learning, drive innovation, and promote ethical data practices. We cultivate a dynamic community that collaboratively explores and analyzes data to solve real-world problems. Through continuous growth and outreach, we aim to transform data into insights for a better future. 
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-0">
          <CompareDemo />
        </div>
      </div>
    </div>
  );
}
