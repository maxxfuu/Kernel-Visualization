import DotGrid from "@/components/aicanvas/dot-grid";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { Hero } from "@/components/landing/Hero";
import { HeroPreview } from "@/components/landing/HeroPreview";
import { LandingFooter } from "@/components/landing/LandingFooter";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <DotGrid showLabel={false} />
      <LandingNavbar />
      <main className="flex-1">
        <Hero />
        <HeroPreview />
      </main>
      <LandingFooter />
    </div>
  );
}
