import type { Metadata } from "next";
import QuizAutoOpen from "../../components/QuizAutoOpen";

export const metadata: Metadata = {
  title: "Quiz: Tecnologia e Negócios 2026",
  description:
    "Faça o quiz dos 20 anos da VTS e descubra seu perfil digital. Ganhe um e-book exclusivo de presente.",
  alternates: {
    canonical: "https://keymatic.com.br/quiz",
  },
};

export default function QuizPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[11px] font-semibold text-brand-orange uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
          20 anos de VTS
        </div>
        <h1 className="text-3xl font-semibold text-white mb-3 tracking-[-0.02em]">
          Quiz: Tecnologia e{" "}
          <span className="gradient-brand-text">Negócios 2026</span>
        </h1>
        <p className="text-zinc-400 text-sm leading-relaxed mb-2">
          Carregando seu quiz...
        </p>
      </div>
      <QuizAutoOpen />
    </main>
  );
}
