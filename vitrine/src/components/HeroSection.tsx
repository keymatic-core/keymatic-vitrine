"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "../lib/utils";

/* ─── Wireframe Gear Cube ─────────────────────────────────── */
function FloatingCube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 100,
    damping: 30,
  });

  function handleMouseMove(e: React.MouseEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-72 h-72 lg:w-[340px] lg:h-[340px] mx-auto lg:mx-0"
      style={{
        perspective: "1000px",
        maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 30%, transparent 80%)",
      }}
    >
      {/* Ambient light glow — orange left, purple right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 25% 50%, rgba(249,115,22,0.08) 0%, transparent 60%), radial-gradient(ellipse at 75% 50%, rgba(168,85,247,0.08) 0%, transparent 60%)",
        }}
      />

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-full h-full"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Slow rotation wrapper */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ rotate: { duration: 40, repeat: Infinity, ease: "linear" } }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Outer wireframe ring */}
          <div
            className="absolute w-56 h-56 lg:w-64 lg:h-64 rounded-[28px] border border-white/[0.05]"
            style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.01)" }}
          />

          {/* Mid wireframe ring */}
          <div
            className="absolute w-44 h-44 lg:w-52 lg:h-52 rounded-[22px] border border-white/[0.07] rotate-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(249,115,22,0.03) 0%, transparent 50%, rgba(168,85,247,0.03) 100%)",
            }}
          />

          {/* Inner wireframe ring */}
          <div className="absolute w-32 h-32 lg:w-40 lg:h-40 rounded-2xl border border-white/[0.09] -rotate-6" />

          {/* Glowing Core */}
          <div className="relative">
            <div
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl gradient-brand opacity-80"
              style={{
                boxShadow:
                  "0 0 30px rgba(249,115,22,0.2), 0 0 60px rgba(168,85,247,0.15), 0 0 100px rgba(249,115,22,0.05)",
              }}
            />
            {/* Core inner reflection */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-transparent" />
          </div>

          {/* Cross lines (wireframe detail) */}
          <div className="absolute w-px h-56 lg:h-64 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
          <div className="absolute w-56 lg:w-64 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
          <div className="absolute w-px h-44 lg:h-52 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent rotate-45" />
          <div className="absolute w-px h-44 lg:h-52 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent -rotate-45" />
        </motion.div>

        {/* Orbiting particles — outside rotation so they orbit independently */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * 360;
          const radius = 42 + (i % 3) * 8;
          const isOrange = i % 2 === 0;
          return (
            <motion.div
              key={i}
              className={`absolute w-1.5 h-1.5 rounded-full ${
                isOrange ? "bg-brand-orange/50" : "bg-brand-purple/50"
              }`}
              style={{
                top: `${50 + Math.sin((angle * Math.PI) / 180) * radius}%`,
                left: `${50 + Math.cos((angle * Math.PI) / 180) * radius}%`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                opacity: [0.15, 0.6, 0.15],
                scale: [0.8, 1.4, 0.8],
              }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.35,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

/* ─── Hero Section ────────────────────────────────────────── */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-subtle" />
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-orange/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-brand-purple/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group/badge relative inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-[13px] text-zinc-400 mb-8 overflow-hidden hover:border-white/[0.15] transition-colors duration-300"
            >
              {/* Shimmer on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover/badge:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
              <span className="relative w-1.5 h-1.5 rounded-full gradient-brand" />
              <span className="relative">20 anos de tradição — agora como Keymatic</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-[-0.02em] text-white mb-6"
            >
              Tecnologia que{" "}
              <span className="gradient-brand-text">funciona</span> enquanto
              você dorme.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-zinc-400 max-w-lg mb-10 leading-relaxed"
            >
              E-commerce de elite, automação inteligente e consultoria em IA
              para quem quer crescer de verdade.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={getWhatsAppUrl("Olá! Gostaria de agendar um diagnóstico gratuito.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-zinc-950 bg-zinc-50 hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] transition-all duration-200"
              >
                Diagnóstico gratuito
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#solucoes"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-zinc-300 border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.03] transition-all duration-150"
              >
                Conhecer soluções
              </a>
            </motion.div>
          </div>

          {/* 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <FloatingCube />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}
