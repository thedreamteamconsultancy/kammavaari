import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Header />
      <HeroSection />

      {/* Stats (dark maroon) */}
      <TrustSection />

      {/* Dark → Cream divider */}
      <SectionDivider direction="dark-to-light" darkColor="hsl(0,60%,11%)" />

      {/* Journey (cream) */}
      <HowItWorksSection />

      {/* Cream → Dark divider */}
      <SectionDivider direction="light-to-dark" />

      {/* Testimonials (dark) */}
      <TestimonialsSection />

      {/* Dark → Cream divider */}
      <SectionDivider direction="dark-to-light" />

      {/* Gallery (cream) */}
      <GallerySection />

      {/* Pricing (cream) */}
      <PricingSection />

      {/* FAQ (cream) */}
      <FAQSection />

      {/* CTA with real image */}
      <CTABanner />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
