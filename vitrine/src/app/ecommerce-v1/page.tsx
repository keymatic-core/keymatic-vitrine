import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import MouseGlow from "../../components/MouseGlow";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import CookieBanner from "../../components/CookieBanner";

import EcomHero from "../../components/ecommerce-v1/EcomHero";
import EcomStats from "../../components/ecommerce-v1/EcomStats";
import ImageAccordion from "../../components/ecommerce-v1/ImageAccordion";
import WebSolutions from "../../components/ecommerce-v1/WebSolutions";
import EcomFeatures from "../../components/ecommerce-v1/EcomFeatures";
import EcomCase from "../../components/ecommerce-v1/EcomCase";
import TechInfra from "../../components/ecommerce-v1/TechInfra";
import EcomProcess from "../../components/ecommerce-v1/EcomProcess";
import VtsInstitutional from "../../components/ecommerce-v1/VtsInstitutional";
import EcomCTA from "../../components/ecommerce-v1/EcomCTA";

export const metadata: Metadata = {
  title: "E-commerce de Elite (v1)",
  robots: { index: false },
};

export default function EcommerceV1Page() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <Navbar />

      <main>
        <EcomHero />
        <EcomStats />
        <ImageAccordion />
        <WebSolutions />
        <EcomFeatures />
        <EcomCase />
        <TechInfra />
        <EcomProcess />
        <VtsInstitutional />
        <EcomCTA />
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
