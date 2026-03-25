"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "../../lib/utils";

const ROTATING_WORDS = [
  "Workshop Presencial",
  "Treinamento Prático",
  "Implantação Hands-on",
  "Agentes Customizados",
  "Consultoria Estratégica",
];

export default function IAHero() {
  const [wordIndex, setWordIndex] = useState(0);

  const nextWord = useCallback(() => {
    setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextWord, 2800);
    return () => clearInterval(interval);
  }, [nextWord]);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-zinc-950">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/ia/hero-ia.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/80 to-zinc-950" />

      {/* Purple ambient glows */}
      <div
        className="absolute top-20 right-[15%] w-[500px] h-[500px] rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, #7c3aed 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 left-[10%] w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #ec4899 0%, #a855f7 60%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-400/30"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Animated icon */}
          <div className="flex items-center justify-center mb-8">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-purple-500/30">
                <Brain size={32} className="text-white" />
              </div>
              {/* Sparkle orbiting */}
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={14} className="text-purple-300" />
              </motion.div>
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-purple-400"
                animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
            </motion.div>
          </div>

          {/* Headline with rotating word */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white mb-6 leading-[1.1]">
            Transforme sua equipe com
          </h1>
          <div className="h-[1.5em] sm:h-[1.4em] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] mb-6 relative">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
              >
                {ROTATING_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Do zero ao resultado. IA aplicada no dia a dia da sua empresa,
            com acompanhamento de quem entende do seu negócio.
          </p>

          {/* Word indicators */}
          <div className="flex items-center justify-center gap-1.5 mb-10">
            {ROTATING_WORDS.map((_, i) => (
              <button
                key={i}
                onClick={() => setWordIndex(i)}
                className="group p-1"
                aria-label={`Mostrar: ${ROTATING_WORDS[i]}`}
              >
                <div
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === wordIndex
                      ? "w-6 bg-purple-400"
                      : "w-1.5 bg-zinc-700 group-hover:bg-zinc-500"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(
                "Olá! Vim pela página de Consultoria em IA e quero saber mais sobre os treinamentos."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-medium text-white bg-gradient-to-r from-purple-500 to-violet-600 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
            >
              Agendar Diagnóstico
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
            <a
              href="#servicos-ia"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-medium text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all"
            >
              Conhecer Serviços
            </a>
          </div>
        </motion.div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
