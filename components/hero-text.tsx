import { Briefcase, BriefcaseMedical, MapPin } from "lucide-react";
import React from "react";

export default function HeroText() {
  return (
    <>
      <h1 className="font-medium">
        <span className="">Santhosh Bhoopal</span>
      </h1>
      <div className="mb-6 flex flex-col gap-2">
        <div className="flex items-center gap-3 ">
          <MapPin className="h-5 w-5 text-blue-300 dark:text-blue-700" />

          <p>Canada</p>
        </div>
        <div className="flex items-center gap-3 ">
          <Briefcase className="h-5 w-5 text-amber-300 dark:text-amber-700" />
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
