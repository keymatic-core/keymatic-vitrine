import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import ScrollProgress from "../../components/ScrollProgress";
import MouseGlow from "../../components/MouseGlow";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import CookieBanner from "../../components/CookieBanner";

import SobreHero from "../../components/sobre/SobreHero";
import SobreTimeline from "../../components/sobre/SobreTimeline";
import SobreTeam from "../../components/sobre/SobreTeam";
import SobreMission from "../../components/sobre/SobreMission";
import SobreCTA from "../../components/sobre/SobreCTA";

export const metadata: Metadata = {
  title: "Quem Somos — Keymatic",
  description:
    "Conheça a história da VTS Informática e da Keymatic. 20 anos transformando tecnologia em resultado para pequenas empresas em São Paulo.",
  openGraph: {
    title: "Quem Somos — Keymatic",
    description:
      "De assistência técnica a parceira digital. 20 anos de evolução.",
    url: "https://keymatic.com.br/sobre",
  },
};

export default function SobrePage() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <Navbar variant="light" page="sobre" />

      <main>
        <SobreHero />
        <SobreTimeline />
        <SobreTeam />
        <SobreMission />
        <SobreCTA />
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
