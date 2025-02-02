"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function SportsEv() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-text dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-paragraph dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Football - Kickoff",
    title: "The Beautiful Game",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Join",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Kickoff is a football competition where teams compete in fast-paced
          matches to showcase their skills, teamwork, and strategy. Whether it's
          dribbling, passing, or shooting, every moment on the field is full of
          excitement and energy. <br /> <br />A thrilling event for football
          enthusiasts to cheer and compete!
        </p>
      );
    },
  },
  {
    description: "Basketball - Hoops",
    title: "Bouncing to Victory",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Join",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Hoops is a basketball tournament that challenges teams to showcase
          their agility, precision, and teamwork on the court. From fast breaks
          to buzzer-beaters, every second of the game is filled with intensity.{" "}
          <br /> <br />
          Perfect for fans who love high-energy action and competitive spirit.
        </p>
      );
    },
  },
  {
    description: "Badminton - Smash",
    title: "Shuttle and Smash",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Join",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Smash is a badminton event where players compete in intense singles or
          doubles matches, testing their speed, reflexes, and precision. The
          game is fast-paced, and every smash and drop shot brings excitement to
          the court. <br /> <br />A perfect event for badminton enthusiasts to
          showcase their skills.
        </p>
      );
    },
  },
  {
    description: "Volleyball - Set and Spike",
    title: "Teamwork in the Air",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Join",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Set and Spike is a volleyball competition where teams battle it out
          with powerful serves, sets, and spikes. This event emphasizes
          coordination, strategy, and strength as teams work together to secure
          victory. <br /> <br />A great sport for those who love high-flying
          action and team dynamics.
        </p>
      );
    },
  },
  {
    description: "Cricket - Boundary Rush",
    title: "Chasing the Run",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Join",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Boundary Rush is a cricket tournament where players aim to score big
          with perfect shots, fast runs, and solid bowling. The game is all
          about precision, power, and strategy, making every moment on the field
          thrilling. <br /> <br />
          An exciting event for cricket fans to showcase their batting and
          bowling skills!
        </p>
      );
    },
  },
];
