import { LockOpen1Icon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { div } from "framer-motion/client";
import Link from "next/link";
import React from "react";

export default function HeroContent() {
  return (
    <section className="pt-7">
      <div className="grid grid-cols-2 gap-4 ">
        <div className="">
          <Link href="/projects">
            <div className="flex group hover:scale-100 transition">
              <div className="mb-3">Projects</div>
              <PaperPlaneIcon className="mt-1  text-violet-500  h-5 w-5 group-hover:translate-x-1 transition-all ml-1" />
            </div>
          </Link>
          <ul className="">
            <Link href="https://github.com/484021/petly" target="_blank">
              <li className="flex flex-col mb-2">
                <span className="flex items-center underline tracking-wider">
                  Petly
                </span>
                <p className="font-light text-sm mt-1">
                  Pet managment app for pet daycare owners.
                </p>
              </li>
            </Link>
            <Link href="https://github.com/484021/nestio">
              <li className="flex flex-col mb-2">
                <span className="flex items-center underline tracking-wider">
                  Nestio
                </span>
                <p className="font-light text-sm mt-1">
                  Rental property managment app to help connect owners and
                  renters.
                </p>
              </li>
            </Link>
          </ul>
        </div>

        <div>
            <Link href="/blog">
          <div className="flex group">
              <div className="mb-3">Blog</div>
              <PaperPlaneIcon className="mt-1  text-violet-500  h-5 w-5 group-hover:translate-x-1 transition-all ml-1" />
          </div>
            </Link>
          <ul className="">
            <Link href="xxxxxxxxxx" target="_blank">
              <li className="flex flex-col mb-2">
                <span className="flex items-center underline tracking-wider">
                  Lorem ipsum dolor sit.
                </span>
                <p className="font-light text-sm mt-1">
                  Lorem ipsum dolor sit amet.
                </p>
              </li>
            </Link>
            <Link href="xxxxxxxxxxxxxxxxxxx">
              <li className="flex flex-col mb-2">
                <span className="flex items-center underline tracking-wider">
                  Lorem, ipsum dolor.
                </span>
                <p className="font-light text-sm mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
}
