import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import GallerySection from "../components/home/GallerySection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import ContactSection from "../components/home/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <AboutSection />

      <ServicesSection />

      <GallerySection />

      <WhyChooseUs />

      <Testimonials />

      

      <ContactSection />
    </main>
  );
}