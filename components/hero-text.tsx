import React from "react";

export default function HeroText() {
  return (
    <>
      <h1 className="font-medium">
        <span className="">Santhosh Bhoopal</span>
      </h1>
      <div className="mb-6 flex flex-col gap-2">
        <div className="flex items-center gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 text-blue-300 dark:text-blue-700"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <p>Canada</p>
        </div>
        <div className="flex items-center gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 text-amber-300 dark:text-amber-700"
          >
            <path d="M12 12h.01"></path>
            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
            <path d="M22 13a18.15 18.15 0 0 1-20 0"></path>
            <rect width="20" height="14" x="2" y="6" rx="2"></rect>
          </svg>
          <p className="inline-flex">Full Stack Developer</p>
        </div>
      </div>

      <p className="font-light">
        I’m a <span className="underline">full stack developer</span> with a
        passion for building dynamic web applications and{" "}
        <span className="underline">solving</span> challenging{" "}
        <span className="underline">problems</span>. I’m mostly{" "}
        <span className="underline">self-taught</span>, and I thrive on the
        process of <span className="underline">learning</span> new technologies
        and improving my skills every day. I mainly work with{" "}
        <span className="text-zinc-500">Next.js, </span>{" "}
        <span className="text-blue-300">React, </span>
        <span className="text-blue-600">Typescript, </span>
        <span className="font-medium">Prisma </span>and{" "}
        <span className="text-[#336791]">Postgres</span>, I’m always looking for
        ways to level up my craft.
      </p>
      <p className="font-light">
        Outside of coding, you’ll find me watching anime, reading manga, playing
        badminton, or hanging out with friends. I’ve got a continuous learning
        mentality—whether it’s diving into new programming languages or picking
        up something completely new. For me, the journey is just as exciting as
        the destination!
      </p>
    </>
  );
}
