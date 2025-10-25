import React from "react";
import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

interface Item {
  title: string;
  description: string;
  image: string;
  className: string;
}

export default function DraggableCardDemo() {
  const items: Item[] = [
    {
      title: "Mansimer Singh",
      description: "Sub-Head of Operations & Management Department",
      image:
        "/TeamImages/MansimerSingh.jpg",
      className: "absolute font-poppins top-25 left-[14%] md:left-[35%] rotate-[-6deg] translate-y-30",
    },
    {
      title: "Dhruv Agarwal",
      description: "Head of Operations & Management Department",
      image:
        "/TeamImages/DhruvAgarwal.jpg",
      className: "absolute font-poppins top-25 left-[14%] md:left-[46%] rotate-[6deg] translate-y-30",
    },
    // {
    //   title: "Arnav Thakur",
    //   description: "Head of Sponsorship",
    //   image:
    //     "https://cdnb.artstation.com/p/assets/images/images/084/124/303/large/matthew-blank-profile-photo-1-1.jpg?1737590055",
    //   className: "absolute font-poppins top-18 left-[8%] md:left-[56%] rotate-[4deg] translate-y-30",
    // },
    {
      title: "Praney Wadhwa",
      description: "Head of PR & Outreach",
      image:
        "/TeamImages/PraneyWadhwa.jpg",
      className: "absolute font-poppins top-30 md:right-[20%] rotate-[-3deg] translate-y-30",
    },
    {
      title: "Siddhi Sanap",
      description: "Sub-Head of Media Department",
      image:
        "/TeamImages/SiddhiSanap.jpg",
      className: "absolute font-poppins top-25 left-[14%] md:left-[39%] rotate-[-6deg] translate-y-30",
    },
    {
      title: "Rishika Chauhan",
      description: "Sub-Head of Media Department",
      image:
        "/TeamImages/RishikaChauhan.jpg",
      className: "absolute font-poppins top-29 left-[14%] md:left-[39%] rotate-[0deg] translate-y-30",
    },
    {
      title: "Sumukh Gupta",
      description: "Head of Media Department",
      image:
        "/TeamImages/SumukhGupta.jpg",
      className: "absolute font-poppins top-20 left-[14%] md:left-[41%] rotate-[-3deg] translate-y-30",
    },
    // {
    //   title: "Aradhya Kumar Rao",
    //   description: "Sub-Head of Design Department",
    //   image:
    //     "https://cdnb.artstation.com/p/assets/images/images/084/124/303/large/matthew-blank-profile-photo-1-1.jpg?1737590055",
    //   className: "absolute font-poppins top-30 md:right-[27%] rotate-[2deg] translate-y-30",
    // },
    {
      title: "Pranith Varma",
      description: "Head of Design Department",
      image:
        "/TeamImages/PranithVarma.jpg",
      className: "absolute font-poppins top-30 md:top-38 md:left-[57%] rotate-[-7deg] translate-y-30",
    },
    {
      title: "Suhani Rastogi",
      description: "Head of Content Department",
      image:
        "/TeamImages/SuhaniRastogi.jpg",
      className: "absolute font-poppins top-22 md:left-[60%] md:rotate-[4deg] rotate-[-4deg] translate-y-30 md:translate-y-20",
    },
    {
      title: "Jatin Sharma",
      description: "Head of Statistics Department",
      image:
        "/TeamImages/JatinSharma.jpg",
      className: "absolute font-poppins top-28 md:left-[25%] left-[10%] rotate-[10deg] translate-y-30",
    },
    {
      title: "Rhea Mathur",
      description: "Head of Data Analysis Department",
      image:
        "/TeamImages/RheaMathur.jpg",
      className: "absolute font-poppins top-20 md:right-[65%] rotate-[-3deg] translate-y-30",
    },
    {
      title: "Mayank Singh",
      description: "Head of Machine Learning Department",
      image:
        "/TeamImages/MayankSingh.jpg",
      className: "absolute font-poppins top-21 md:top-35 md:left-[23%] rotate-[9deg] translate-y-30",
    },
    {
      title: "Taruvar Singhal",
      description: "Chief Technical Officer",
      image:
        "/TeamImages/TaruvarSinghal.jpg",
      className: "absolute font-poppins top-25 md:left-[25%] md:rotate-[4deg] rotate-[-4deg] translate-y-30 md:translate-y-20",
    },
    {
      title: "Aditya Siwach",
      description: "General Secretary",
      image:
        "/TeamImages/AdityaSiwach.jpg",
      className: "absolute font-poppins top-40 left-[10%] md:left-[55%] rotate-[4deg] translate-y-10 md:translate-y-20",
    },
    {
      title: "Rohan Pandey",
      description: "Vice-Chairperson",
      image:
        "/TeamImages/ROHANPANDEY.png",
      className: "absolute font-poppins top-22 left-[8%] md:left-[24%] rotate-[-6deg] translate-y-30",
    },
    {
      title: "Arya Prakash",
      description: "Chairperson",
      image:
        "/TeamImages/AryaPrakash.jpg",
      className: "absolute font-poppins top-19 md:top-10 left-[14%] md:left-[40%] rotate-[2deg] translate-y-30",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        ~ Team DSS
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <Image
            src={item.image}
            alt={item.title}
            width={320}
            height={320}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
          <p className="text-center text-base text-neutral-500 dark:text-neutral-400">
            {item.description}
          </p>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
