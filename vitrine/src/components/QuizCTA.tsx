"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, ArrowRight } from "lucide-react";
import QuizModal from "./QuizModal";

type QuizCTAProps = {
  variant?: "dark" | "light";
};

export default function QuizCTA({ variant = "dark" }: QuizCTAProps) {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const isDark = variant === "dark";

  return (
    <>
      <section className={`py-12 sm:py-16 relative ${isDark ? "" : "section-light"}`}>
        {isDark && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent" />
        )}

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border ${
                isDark
                  ? "bg-zinc-900/80 border-white/[0.06]"
                  : "bg-white border-zinc-200 shadow-sm"
              }`}
            >
              <div className="w-10 h-10 rounded-xl gradient-brand-subtle flex items-center justify-center shrink-0">
                <Gift size={18} className="text-brand-orange" />
              </div>

              <div className="flex-1 text-center sm:text-left">
                <p className={`text-sm font-semibold mb-0.5 ${isDark ? "text-white" : "text-zinc-900"}`}>
                  🎉 Quiz 20 anos — Descubra seu perfil digital
                </p>
                <p className={`text-[12px] ${isDark ? "text-zinc-500" : "text-zinc-500"}`}>
                  4 perguntas + e-book de presente. Leva menos de 1 minuto.
                </p>
              </div>

              <button
                onClick={() => setIsQuizOpen(true)}
                className={`group shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-colors ${
                  isDark
                    ? "bg-zinc-100 hover:bg-white text-zinc-900"
                    : "bg-zinc-900 hover:bg-zinc-800 text-white"
                }`}
              >
                Fazer Quiz
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </>
  );
}
