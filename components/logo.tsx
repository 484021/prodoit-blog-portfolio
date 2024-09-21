import React from "react";
import { Icons } from "./icons";
import { TextEffectPerChar } from "./motion-prim/text-effect-per-char";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="fixed top-5 left-5">
      <Link href="/">
        <div className="flex items-center">
          <Icons.logo className="h-7 w-7" />
          <TextEffectPerChar className="px-2 text-zinc-600 text-base">
            Santhosh
          </TextEffectPerChar>
        </div>
      </Link>
    </div>
  );
}
