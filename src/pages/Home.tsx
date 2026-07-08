import Navigation from "@/sections/Navigation";
import Hero from "@/sections/Hero";
import StatsSection from "@/sections/StatsSection";
import AboutPreview from "@/sections/AboutPreview";
import ServicesPreview from "@/sections/ServicesPreview";
import ApproachesSection from "@/sections/ApproachesSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FEFEFB]">
      <Navigation />
      <main>
        <Hero />
        <AboutPreview />
        <ServicesPreview />
        <ApproachesSection />
        <StatsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
