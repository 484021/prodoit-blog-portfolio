import { PaperPlaneIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

export default function HeroContent() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="mb-3">Projects</div>
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
        <div>Blog</div>
      </div>
    </div>
  );
}
