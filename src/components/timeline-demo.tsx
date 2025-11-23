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
      title: "DSS x Google Crowdsource (Nov'25)",
      description:
        "The Data Science Society BU hosted the university's first speaker session in collaboration with Crowdsource by Google India. Mr. Harshit Goyal, Operations Manager at Google's AI & Data Operations, shared insights on community-driven AI contributions, Responsible AI, and Adversarial Prompting, highlighting the impact of diverse datasets and the future of human-AI collaboration.",
      images: [
        "/Events/GoogleCrowdsource_NoCodeAITrainingWorkshop/1.jpeg",
        "/Events/GoogleCrowdsource_NoCodeAITrainingWorkshop/2.jpeg",
        "/Events/GoogleCrowdsource_NoCodeAITrainingWorkshop/3.jpeg",
        "/Events/GoogleCrowdsource_NoCodeAITrainingWorkshop/4.jpeg",
        "/Events/GoogleCrowdsource_NoCodeAITrainingWorkshop/5.jpeg",
      ],
    },
    {
      title: "International Conference on Emerging Data Science Paradigm (Mar'25)",
      description:
        "Hosted the International Conference on Emerging Data Science Paradigm, uniting global experts to explore the future of AI. The event featured keynotes on Human-Centered Computing and Deep Learning, plus a panel on Generative AI, highlighting the university's dedication to advancing data science and innovation.",
      images: [
        "/Events/ICEDSP/Day1/1.jpeg",
        "/Events/ICEDSP/Day1/2.jpeg",
        "/Events/ICEDSP/Day1/3.jpeg",
        "/Events/ICEDSP/Day1/4.jpeg",
        "/Events/ICEDSP/Day1/5.jpeg",
      ],
    },
    {
      title: "ICEDSP Day 2 (Mar'25)",
      description:
        "The second day combined expert insights with vibrant student engagement, featuring keynotes on GenAI, Data Engineering, and HCI by leaders from AWS, AtriCure, and NSUT. The event included student workshops and project showcases, concluding with a valedictory ceremony that celebrated the collective achievements of the data science community.",
      images: [
        "/Events/ICEDSP/Day2/1.jpeg",
        "/Events/ICEDSP/Day2/2.jpeg",
        "/Events/ICEDSP/Day2/3.jpeg",
        "/Events/ICEDSP/Day2/4.jpeg",
        "/Events/ICEDSP/Day2/5.jpeg",
      ],
    },
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
