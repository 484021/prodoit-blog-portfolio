import React from "react";
import { Icons } from "./icons";
import { TextEffectPerChar } from "./motion-prim/text-effect-per-char";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center justify-between fixed -z-10 ml-1.5">
        <Icons.logo className="h-6 w-6" />
        <TextEffectPerChar className="px-2 text-zinc-500">
          Santhosh
        </TextEffectPerChar>
      </div>
    </Link>
  );
}
