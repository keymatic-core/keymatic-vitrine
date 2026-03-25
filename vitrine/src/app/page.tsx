import Navbar from "../components/Navbar";
import ScrollProgress from "../components/ScrollProgress";
import MouseGlow from "../components/MouseGlow";
import HeroSection from "../components/HeroSection";
import TrustBar from "../components/TrustBar";
import SolutionsShowcase from "../components/SolutionsShowcase";
import HowItWorks from "../components/HowItWorks";
import CasesResults from "../components/CasesResults";
import TechDifferentials from "../components/TechDifferentials";
import AIConsulting from "../components/AIConsulting";
import InteractiveTriage from "../components/InteractiveTriage";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import CookieBanner from "../components/CookieBanner";
import QuizSection from "../components/QuizSection";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <MouseGlow />
      <Navbar />

      <main>
        <HeroSection />
        <TrustBar />
        <SolutionsShowcase />
        <HowItWorks />
        <CasesResults />
        <QuizSection />
        <TechDifferentials />
        <AIConsulting />
        <InteractiveTriage />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </>
  );
}
