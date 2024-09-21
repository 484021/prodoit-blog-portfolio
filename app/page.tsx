import HomeContentTeaser from "@/components/animated-minimalist-content-grid";
import HomeHeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main className="max-w-[60ch] lg:min-w-[60ch] mx-auto w-full space-y-6">
      <HomeHeroSection />
      {/* <HomeContentTeaser /> */}
    </main>
  );
}
