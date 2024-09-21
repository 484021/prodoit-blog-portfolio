import HeroContent from "@/components/hero-content";
import HeroText from "@/components/hero-text";

export default function Home() {
  return (
    <main className="max-w-[60ch] lg:min-w-[60ch] mx-auto w-full space-y-6">
      <HeroText />
      <HeroContent />
    </main>
  );
}
