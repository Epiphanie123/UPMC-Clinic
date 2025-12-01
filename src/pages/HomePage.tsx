import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { PhilosophySection } from "../components/PhilosophySection";
import { DepartmentsSection } from "../components/DepartmentsSection";
// import { TestimonialsSection } from "../components/TestimonialsSection";
// import { CTASection } from "../components/CTASection";

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <PhilosophySection />
      <DepartmentsSection />
      {/* <TestimonialsSection /> */}
      {/* <CTASection /> */}
    </div>
  );
}