import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import MouseGlow from "../../components/MouseGlow";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import CookieBanner from "../../components/CookieBanner";

import IAHero from "../../components/ia/IAHero";
import IAPain from "../../components/ia/IAPain";
import IAServices from "../../components/ia/IAServices";
import IAHowItWorks from "../../components/ia/IAHowItWorks";
import IAToolkit from "../../components/ia/IAToolkit";
import IAQuiz from "../../components/ia/IAQuiz";
import IACTA from "../../components/ia/IACTA";
import QuizSection from "../../components/QuizSection";

export const metadata: Metadata = {
  title: "Consultoria em IA — Keymatic",
  description:
    "Workshop, treinamento e implantação hands-on de Inteligência Artificial para sua empresa. Do zero ao resultado com acompanhamento contínuo.",
  alternates: {
    canonical: "https://keymatic.com.br/consultoria-ia",
  },
  openGraph: {
    title: "Consultoria em IA — Keymatic",
    description: "Transforme sua equipe com Inteligência Artificial. Workshop, treinamento e implantação hands-on.",
    url: "https://keymatic.com.br/consultoria-ia",
  },
};

export default function ConsultoriaIAPage() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <Navbar variant="dark" page="ia" />

      <main>
        <IAHero />
        <IAPain />
        <IAServices />
        <IAHowItWorks />
        <IAToolkit />
        <IAQuiz />
        <QuizSection />
        <IACTA />
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
