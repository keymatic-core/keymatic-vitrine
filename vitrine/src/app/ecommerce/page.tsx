import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import MouseGlow from "../../components/MouseGlow";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import CookieBanner from "../../components/CookieBanner";

import EcomHero from "../../components/ecommerce/EcomHero";
import EcomStats from "../../components/ecommerce/EcomStats";
import ImageAccordion from "../../components/ecommerce/ImageAccordion";
import WebSolutions from "../../components/ecommerce/WebSolutions";
import EcomFeatures from "../../components/ecommerce/EcomFeatures";
import EcomCase from "../../components/ecommerce/EcomCase";
import TechInfra from "../../components/ecommerce/TechInfra";
import EcomProcess from "../../components/ecommerce/EcomProcess";
import EcomCTA from "../../components/ecommerce/EcomCTA";
import QuizSection from "../../components/QuizSection";

export const metadata: Metadata = {
  title: "E-commerce de Elite",
  description:
    "Plataforma e-commerce completa com checkout inteligente, estoque blindado e recomendações por IA. Da Keymatic, com 20 anos de tradição da VTS Informática.",
  alternates: {
    canonical: "https://keymatic.com.br/ecommerce",
  },
  openGraph: {
    title: "E-commerce de Elite — Keymatic",
    description: "Lojas virtuais que vendem enquanto você dorme.",
    url: "https://keymatic.com.br/ecommerce",
  },
};

export default function EcommercePage() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <Navbar variant="light" page="ecommerce" />

      <main>
        <EcomHero />
        <EcomStats />
        <ImageAccordion />
        <EcomFeatures />
        <EcomCase />
        <WebSolutions />
        <TechInfra />
        <EcomProcess />
        <QuizSection />
        <EcomCTA />
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Keycommerce — Plataforma E-commerce",
            description:
              "Plataforma e-commerce white-label completa com checkout inteligente, estoque blindado contra overselling e recomendações personalizadas por IA.",
            brand: { "@type": "Brand", name: "Keymatic" },
            offers: {
              "@type": "Offer",
              priceCurrency: "BRL",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </>
  );
}
