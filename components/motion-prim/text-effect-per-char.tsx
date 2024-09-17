import { TextEffect } from "@/components/core/text-effect";

export function TextEffectPerChar({children}: {children: React.ReactNode}) {
  return <TextEffect per="char" preset="fade">{children}</TextEffect>;
}
