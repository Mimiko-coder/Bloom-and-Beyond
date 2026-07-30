import { About } from "@/components/About";
import { BackToTop } from "@/components/BackToTop";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { GiftInspiration } from "@/components/features/GiftInspiration";
import { Hero } from "@/components/Hero";
import { LoveCalendar } from "@/components/features/LoveCalendar";
import { Navbar } from "@/components/Navbar";
import { Occasions } from "@/components/Occasions";
import { PageLoader } from "@/components/PageLoader";
import { Services } from "@/components/Services";
import { SiteBackground } from "@/components/SiteBackground";
import { SurpriseQuiz } from "@/components/features/SurpriseQuiz";
import { SurpriseRequestForm } from "@/components/features/SurpriseRequestForm";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyChoose } from "@/components/WhyChoose";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bloom & Beyond",
    description:
      "Premium gifting, decoration, and surprise experience company creating beautiful memories for special occasions.",
    slogan: "Beautiful Moments, Made with Love.",
    telephone: "+905338593314",
    url: "https://bloomandbeyond.example",
    image: "/images/proposal-beach.jpeg",
    priceRange: "$$",
    areaServed: "Worldwide",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageLoader />
      <SiteBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <SurpriseQuiz />
        <GiftInspiration />
        <SurpriseRequestForm />
        <LoveCalendar />
        <Occasions />
        <Gallery />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
