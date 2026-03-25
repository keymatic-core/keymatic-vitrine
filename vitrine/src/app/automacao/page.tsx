import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import MouseGlow from "../../components/MouseGlow";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import CookieBanner from "../../components/CookieBanner";

import AutoHero from "../../components/automacao/AutoHero";
import AutoPain from "../../components/automacao/AutoPain";
import AutoTechStrip from "../../components/automacao/AutoTechStrip";
import AutoBot from "../../components/automacao/AutoBot";
import AutoHowItWorks from "../../components/automacao/AutoHowItWorks";
import AutoServices from "../../components/automacao/AutoServices";
import AutoDifferentials from "../../components/automacao/AutoDifferentials";
import AutoCTA from "../../components/automacao/AutoCTA";
import QuizSection from "../../components/QuizSection";

export const metadata: Metadata = {
  title: "Automação Inteligente — Keymatic",
  description:
    "Automatize seu negócio com WhatsApp, processos internos e integrações entre sistemas. Diagnóstico gratuito para pequenas empresas.",
  openGraph: {
    title: "Automação Inteligente — Keymatic",
    description: "Seu negócio no piloto automático. WhatsApp, processos e integrações.",
    url: "https://keymatic.com.br/automacao",
  },
};

export default function AutomacaoPage() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <Navbar variant="light" page="automacao" />

      <main>
        <AutoHero />
        <AutoPain />
        <AutoTechStrip />
        <AutoBot />
        <AutoHowItWorks />
        <AutoServices />
        <AutoDifferentials />
        <QuizSection />
        <AutoCTA />
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
