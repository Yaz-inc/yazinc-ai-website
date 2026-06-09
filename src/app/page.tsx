import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuroraBackground from '@/components/AuroraBackground';
import HeroSection from '@/components/sections/HeroSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import MethodologySection from '@/components/sections/MethodologySection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Navbar />

      <main className="flex-1 pt-24 overflow-hidden relative content-above-aurora">
        {/* Glow spots */}
        <div className="glow-spot glow-orange w-[500px] h-[500px] -top-40 -left-40 animate-pulse-glow" />
        <div
          className="glow-spot glow-cyan w-[500px] h-[500px] top-[40%] -right-40 animate-pulse-glow"
          style={{ animationDelay: '2s' }}
        />

        <HeroSection />

        <div className="section-glass">
          <CapabilitiesSection />
        </div>

        <AboutSection />

        <div className="section-glass">
          <ServicesSection />
        </div>

        <ProjectsSection />

        <div className="section-glass">
          <MethodologySection />
        </div>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
