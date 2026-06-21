import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import StatBar from "@/components/home/StatBar";
import AboutTeaser from "@/components/home/AboutTeaser";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TeamPreview from "@/components/home/TeamPreview";
import LatestBlogs from "@/components/home/LatestBlogs";
import ContactCTA from "@/components/home/ContactCTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <StatBar />
      <AboutTeaser />
      <ServicesOverview />
      <FeaturedProjects />
      <TeamPreview />
      <LatestBlogs />
      <ContactCTA />
      <Footer />
    </main>
  );
}
