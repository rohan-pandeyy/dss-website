import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Bennett's Got Data (Jan'25)",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            A talent showcase event, inspired by the popular format of competitive talent shows. Inviting data science enthusiasts from all levels to present their unique projects, insights, or skills in a competitive setting. 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/Events/BennettsGotData/1.jpg"
              alt="BGD Image"
              width={500}
              height={500}
              className="h-50 md:h-100 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] text-white"
            />
            <img
              src="/Events/BennettsGotData/2.JPG"
              alt="BGD Image"
              width={500}
              height={500}
              className="h-50 md:h-100 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] text-white"
            />
            <img
              src="/Events/BennettsGotData/3.jpg"
              alt="BGD Image"
              width={500}
              height={500}
              className="h-50 md:h-100 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] text-white"
            />
            <img
              src="/Events/BennettsGotData/4.jpg"
              alt="BGD Image"
              width={500}
              height={500}
              className="h-50 md:h-100 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] text-white"
            />
            <img
              src="/Events/BennettsGotData/5.JPG"
              alt="BGD Image"
              width={500}
              height={500}
              className="h-50 md:h-100 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] text-white"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
