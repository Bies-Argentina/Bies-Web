import { AgencySection } from "@/components/site/agency-section";
import { ContactSection } from "@/components/site/contact-section";
import { CraftSection } from "@/components/site/craft-section";
import { FaqSection } from "@/components/site/faq-section";
import { HeroSection } from "@/components/site/hero-section";
import { ProcessSection } from "@/components/site/process-section";
import { ServicesSection } from "@/components/site/services-section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { WhatsAppFloat } from "@/components/site/whatsapp-float";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:font-sans focus:text-[11px] focus:uppercase focus:tracking-label focus:text-primary-foreground"
      >
        Ir al contenido
      </a>
      <SiteHeader />
      <WhatsAppFloat />
      <main>
        <HeroSection />
        <AgencySection />
        <ServicesSection />
        <CraftSection />
        <ProcessSection />
        <ContactSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
