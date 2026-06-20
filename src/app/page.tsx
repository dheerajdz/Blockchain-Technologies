import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import SecuritySection from "@/components/sections/SecuritySection";
import ValidatorsSection from "@/components/sections/ValidatorsSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative bg-[#020205] text-white">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <SecuritySection />
      <ValidatorsSection />
      <RoadmapSection />
      <FooterSection />
    </main>
  );
}
