"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, ArrowRight, Sparkles } from "lucide-react";
import QuizModal from "./QuizModal";

export default function QuizSection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-dark p-6 sm:p-8 lg:p-10 relative overflow-hidden"
          >
            {/* Decorative gradient border effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-orange/5 via-transparent to-brand-purple/5 pointer-events-none" />

            <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              {/* Left — Icon + Badge */}
              <div className="shrink-0 text-center lg:text-left">
                <div className="w-16 h-16 rounded-2xl gradient-brand-subtle flex items-center justify-center mx-auto lg:mx-0 mb-3">
                  <Sparkles size={28} className="text-brand-orange" />
                </div>
                {/* Badge E-book mais destacado */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-[11px] font-bold text-brand-orange uppercase tracking-wider shadow-[0_0_12px_rgba(249,115,22,0.2)]"
                >
                  <Gift size={12} />
                  E-book grátis
                </motion.div>
              </div>

              {/* Center — Text */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 tracking-[-0.02em]">
                  Quiz: Tecnologia e{" "}
                  <span className="gradient-brand-text">Negócios 2026</span>
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-1">
                  Em comemoração aos 20 anos da VTS, descubra seu perfil digital
                  e ganhe um e-book exclusivo.
                </p>
                <p className="text-zinc-600 text-[12px]">
                  4 perguntas • ~1 minuto • resultado personalizado
                </p>
              </div>

              {/* Right — CTA com borda brilhante */}
              <div className="shrink-0">
                {/* Botão com borda de brilho rotativa */}
                <button
                  onClick={() => setIsQuizOpen(true)}
                  className="quiz-cta-btn group relative flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 font-medium text-sm transition-colors duration-150"
                >
                  Fazer Quiz
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  );
}
