import { TextEffect, TextEffectProps } from "@/components/core/text-effect";

export function TextEffectPerChar({ children, className }: TextEffectProps) {
  return (
    <TextEffect per="char" preset="fade" className={className}>
      {children}
    </TextEffect>
  );
}
