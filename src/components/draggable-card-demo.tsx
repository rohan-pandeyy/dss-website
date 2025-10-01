import React from "react";
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
        "/TeamImages/RohanPandey.jpeg",
      className: "absolute font-poppins top-22 left-[8%] md:left-[25%] rotate-[-6deg] translate-y-30",
    },
    {
      title: "Arya Prakash",
      description: "Chairperson",
      image:
        "/TeamImages/AryaPrakash.jpg",
      className: "absolute font-poppins top-10 left-[15%] md:left-[40%] rotate-[2deg] translate-y-30",
    },
    // {
    //   title: "Japan",
    //   image:
    //     "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   className: "absolute top-32 left-[55%] rotate-[10deg] translate-y-30",
    // },
    // {
    //   title: "Norway",
    //   image:
    //     "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   className: "absolute top-20 right-[35%] rotate-[2deg] translate-y-30",
    // },
    // {
    //   title: "New Zealand",
    //   image:
    //     "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   className: "absolute top-24 left-[45%] rotate-[-7deg] translate-y-30",
    // },
    // {
    //   title: "Canada",
    //   image:
    //     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   className: "absolute top-8 left-[30%] rotate-[4deg] translate-y-30",
    // },
  ];
  return (
    <DraggableCardContainer className="relative flex h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Senior Core - Revealing soon.
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <img
            src={item.image}
            alt={item.title}
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
