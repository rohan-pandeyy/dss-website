import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

interface EventData {
  title: string;
  description: string;
  images: string[];
}

export default function TimelineDemo() {
  const allEvents: EventData[] = [
    // Add newer events here
    {
      title: "Data Quest (Feb'25)",
      description:
        "Inspired by the high-stakes excitement of Squid Game, this event challenged participants to tackle a series of data-driven tasks, each round testing their analytical skills, creativity, and teamwork, aiming to promote data literacy, problem-solving, and collaborative thinking in an engaging and dynamic environment.",
      images: [
        "/Events/DataQuest/1.jpg",
        "/Events/DataQuest/2.jpg",
        "/Events/DataQuest/3.jpg",
        "/Events/DataQuest/4.jpg",
        "/Events/DataQuest/5.jpg",
      ],
    },
    {
      title: "Bennett's Got Data (Jan'25)",
      description:
        "A talent showcase event, inspired by the popular format of competitive talent shows. Inviting data science enthusiasts from all levels to present their unique projects, insights, or skills in a competitive setting.",
      images: [
        "/Events/BennettsGotData/1.jpg",
        "/Events/BennettsGotData/2.JPG",
        "/Events/BennettsGotData/3.jpg",
        "/Events/BennettsGotData/4.jpg",
        "/Events/BennettsGotData/5.JPG",
      ],
    },
  ];

  const data = allEvents.map((event, eventIndex) => ({
    title: event.title,
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
          {event.description}
        </p>
        <div className="grid grid-cols-2 gap-4">
          {event.images.map((src, imageIndex) => (
            <Image
              key={`${eventIndex}-${imageIndex}`}
              src={src}
              alt={`${event.title} Image ${imageIndex + 1}`}
              width={500}
              height={500}
              className="h-50 md:h-100 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] text-white"
              priority={imageIndex === 0}
            />
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
