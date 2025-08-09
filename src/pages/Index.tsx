import { useEffect } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ContactSection from "@/components/sections/ContactSection";
import { trackEvent } from '@/lib/supabase';

const Index = () => {
  useEffect(() => {
    trackEvent('page_visit', { page: 'home' });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProductsSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default Index;