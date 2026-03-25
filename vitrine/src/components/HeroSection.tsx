"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "../lib/utils";

/* ─── Wireframe Cube with Key Unlock ──────────────────────── */
function FloatingCube() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [phase, setPhase] = useState(0);
  // 0 = initial (static, keyhole visible)
  // 1 = key sliding in
  // 2 = key turning (unlocking)
  // 3 = circuit burst (rings light up)
  // 4 = idle (gentle float + glow)

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

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2100),
      setTimeout(() => setPhase(3), 2450),
      setTimeout(() => setPhase(4), 4500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const isIdle = phase >= 4;
  const isUnlocked = phase >= 3;

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
        {/* Idle floating — starts after unlock */}
        <motion.div
          animate={isIdle ? { y: [0, -6, 0] } : {}}
          transition={isIdle ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : {}}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Outer wireframe ring */}
          <motion.div
            className="absolute w-56 h-56 lg:w-64 lg:h-64 rounded-[28px] border border-white/[0.05]"
            style={{ boxShadow: "inset 0 0 40px rgba(255,255,255,0.01)" }}
            animate={
              isUnlocked
                ? {
                    borderColor: isIdle
                      ? ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.05)"]
                      : ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.25)", "rgba(255,255,255,0.1)"],
                    boxShadow: isIdle
                      ? [
                          "inset 0 0 40px rgba(255,255,255,0.01), 0 0 0px transparent",
                          "inset 0 0 40px rgba(255,255,255,0.03), 0 0 10px rgba(255,255,255,0.04)",
                          "inset 0 0 40px rgba(255,255,255,0.01), 0 0 0px transparent",
                        ]
                      : [
                          "inset 0 0 40px rgba(255,255,255,0.01), 0 0 0px transparent",
                          "inset 0 0 40px rgba(255,255,255,0.06), 0 0 20px rgba(255,255,255,0.08)",
                          "inset 0 0 40px rgba(255,255,255,0.03), 0 0 10px rgba(255,255,255,0.04)",
                        ],
                  }
                : {}
            }
            transition={
              isIdle
                ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.8 }
            }
          />

          {/* Mid wireframe ring */}
          <motion.div
            className="absolute w-44 h-44 lg:w-52 lg:h-52 rounded-[22px] border border-white/[0.07] rotate-12"
            style={{
              background:
                "linear-gradient(135deg, rgba(249,115,22,0.03) 0%, transparent 50%, rgba(168,85,247,0.03) 100%)",
            }}
            animate={
              isUnlocked
                ? {
                    borderColor: isIdle
                      ? ["rgba(255,255,255,0.07)", "rgba(255,255,255,0.14)", "rgba(255,255,255,0.07)"]
                      : ["rgba(255,255,255,0.07)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.14)"],
                  }
                : {}
            }
            transition={
              isIdle
                ? { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                : { duration: 0.8, delay: 0.1 }
            }
          />

          {/* Inner wireframe ring */}
          <motion.div
            className="absolute w-32 h-32 lg:w-40 lg:h-40 rounded-2xl border border-white/[0.09] -rotate-6"
            animate={
              isUnlocked
                ? {
                    borderColor: isIdle
                      ? ["rgba(255,255,255,0.09)", "rgba(255,255,255,0.18)", "rgba(255,255,255,0.09)"]
                      : ["rgba(255,255,255,0.09)", "rgba(255,255,255,0.35)", "rgba(255,255,255,0.18)"],
                  }
                : {}
            }
            transition={
              isIdle
                ? { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
                : { duration: 0.8, delay: 0.2 }
            }
          />

          {/* Glowing Core — "portal" that opens */}
          <motion.div
            className="relative"
            style={{ perspective: 600 }}
            animate={
              isUnlocked
                ? { scale: isIdle ? [1.08, 1.12, 1.08] : [1, 1.1] }
                : { scale: 1 }
            }
            transition={
              isIdle
                ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.6, ease: "easeOut" }
            }
          >
            <motion.div
              className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl gradient-brand"
              animate={
                isUnlocked
                  ? {
                      opacity: isIdle ? [0.85, 0.95, 0.85] : [0.8, 1],
                      boxShadow: isIdle
                        ? [
                            "0 0 40px rgba(249,115,22,0.3), 0 0 80px rgba(168,85,247,0.2), 0 0 120px rgba(249,115,22,0.08)",
                            "0 0 50px rgba(249,115,22,0.4), 0 0 100px rgba(168,85,247,0.25), 0 0 140px rgba(249,115,22,0.12)",
                            "0 0 40px rgba(249,115,22,0.3), 0 0 80px rgba(168,85,247,0.2), 0 0 120px rgba(249,115,22,0.08)",
                          ]
                        : [
                            "0 0 30px rgba(249,115,22,0.2), 0 0 60px rgba(168,85,247,0.15), 0 0 100px rgba(249,115,22,0.05)",
                            "0 0 60px rgba(249,115,22,0.5), 0 0 100px rgba(168,85,247,0.35), 0 0 160px rgba(249,115,22,0.15)",
                          ],
                    }
                  : {
                      opacity: 0.8,
                      boxShadow: "0 0 30px rgba(249,115,22,0.2), 0 0 60px rgba(168,85,247,0.15), 0 0 100px rgba(249,115,22,0.05)",
                    }
              }
              transition={
                isIdle
                  ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.8 }
              }
            />
            {/* Core inner reflection */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-transparent" />

            {/* ── Keyhole (matches key teeth shape — always visible) ── */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className="lg:w-[28px] lg:h-[20px]">
                <defs>
                  <filter id="keyhole-depth">
                    <feDropShadow dx="0" dy="0.8" stdDeviation="0.8" floodColor="#000" floodOpacity="0.6" />
                  </filter>
                </defs>
                {/* Outer shadow (depth) */}
                <rect x="0.5" y="3.5" width="7" height="4" rx="1.2" fill="rgba(0,0,0,0.3)" />
                <rect x="0.5" y="8.5" width="11" height="4" rx="1.2" fill="rgba(0,0,0,0.3)" />
                <rect x="7.5" y="3.5" width="5" height="4" rx="1.2" fill="rgba(0,0,0,0.25)" />
                {/* Main keyhole cutout — matches key teeth silhouette */}
                <g filter="url(#keyhole-depth)">
                  <rect x="0" y="3" width="7" height="4" rx="1" fill="rgba(0,0,0,0.6)" />
                  <rect x="0" y="8" width="11" height="4" rx="1" fill="rgba(0,0,0,0.6)" />
                  <rect x="7" y="3" width="5" height="4" rx="1" fill="rgba(0,0,0,0.5)" />
                </g>
                {/* Inner depth */}
                <rect x="0.8" y="3.8" width="5.5" height="2.5" rx="0.5" fill="rgba(0,0,0,0.35)" />
                <rect x="0.8" y="8.8" width="9.5" height="2.5" rx="0.5" fill="rgba(0,0,0,0.35)" />
                {/* Subtle rim highlight */}
                <rect x="0" y="3" width="7" height="0.5" rx="0.25" fill="rgba(255,255,255,0.06)" />
                <rect x="0" y="8" width="11" height="0.5" rx="0.25" fill="rgba(255,255,255,0.06)" />
              </svg>
            </div>

            {/* ── Key (white — slides in from left, teeth enter keyhole, barrel roll) ── */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ zIndex: 10, backfaceVisibility: "hidden" }}
              initial={{ x: -140, opacity: 0, scale: 0.9 }}
              animate={
                phase === 0
                  ? { x: -140, opacity: 0, scale: 0.9 }
                  : phase === 1
                    ? { x: 4, opacity: 1, scale: 1, rotateX: 0 }
                    : { x: 4, opacity: 1, scale: 1, rotateX: 360 }
              }
              transition={{
                x: { duration: 1.3, ease: [0.25, 0.1, 0.25, 1] },
                scale: { duration: 1.3, ease: [0.25, 0.1, 0.25, 1] },
                rotateX: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.6 },
              }}
            >
              <svg width="36" height="26" viewBox="0 0 32 24" fill="none" className="lg:w-[44px] lg:h-[32px]">
                <defs>
                  <clipPath id="key-clip">
                    <motion.rect
                      x="0" y="0" height="24"
                      initial={{ width: 32 }}
                      animate={phase >= 1 ? { width: 15 } : { width: 32 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                    />
                  </clipPath>
                  <linearGradient id="key-brand" x1="0" y1="4" x2="26" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#f0f0f2" />
                    <stop offset="100%" stopColor="#e4e4e7" />
                  </linearGradient>
                  <linearGradient id="key-brand-dark" x1="0" y1="4" x2="26" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#a1a1aa" />
                    <stop offset="100%" stopColor="#71717a" />
                  </linearGradient>
                  <linearGradient id="key-ring-grad" x1="5.5" y1="10.5" x2="8.5" y2="13.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                  <filter id="key-shadow">
                    <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000" floodOpacity="0.35" />
                  </filter>
                </defs>
                <g clipPath="url(#key-clip)">
                  {/* Key body shadow (subtle depth) */}
                  <rect x="0.5" y="5" width="14" height="16" rx="4" fill="rgba(0,0,0,0.2)" />
                  <rect x="14.5" y="9" width="6" height="3" rx="1" fill="rgba(0,0,0,0.15)" />
                  <rect x="14.5" y="14" width="10" height="3" rx="1" fill="rgba(0,0,0,0.15)" />
                  {/* Key body */}
                  <g filter="url(#key-shadow)">
                    <rect x="0" y="4" width="14" height="16" rx="4" fill="url(#key-brand)" />
                    <rect x="14" y="8" width="6" height="3" rx="1" fill="url(#key-brand)" />
                    <rect x="14" y="13" width="10" height="3" rx="1" fill="url(#key-brand)" />
                    <rect x="20" y="8" width="4" height="3" rx="1" fill="url(#key-brand)" opacity="0.7" />
                  </g>
                  {/* Top bevel (subtle 3D) */}
                  <rect x="1" y="4.5" width="12" height="1.5" rx="1" fill="white" opacity="0.4" />
                  <rect x="14.5" y="8.2" width="5" height="0.7" rx="0.4" fill="white" opacity="0.25" />
                  <rect x="14.5" y="13.2" width="9" height="0.7" rx="0.4" fill="white" opacity="0.25" />
                  {/* Bottom edge */}
                  <rect x="0" y="17.5" width="14" height="2" rx="1" fill="url(#key-brand-dark)" opacity="0.3" />
                  <rect x="14" y="10.3" width="6" height="0.7" rx="0.4" fill="url(#key-brand-dark)" opacity="0.2" />
                  <rect x="14" y="15.3" width="10" height="0.7" rx="0.4" fill="url(#key-brand-dark)" opacity="0.2" />
                  {/* Key ring */}
                  <circle cx="7" cy="12" r="3" fill="#09090b" opacity="0.25" />
                  <circle cx="7" cy="12" r="1.5" fill="url(#key-ring-grad)" opacity="0.9" />
                </g>
              </svg>
            </motion.div>
          </motion.div>

          {/* Cross lines (wireframe detail) */}
          <div className="absolute w-px h-56 lg:h-64 bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
          <div className="absolute w-56 lg:w-64 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
          <div className="absolute w-px h-44 lg:h-52 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent rotate-45" />
          <div className="absolute w-px h-44 lg:h-52 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent -rotate-45" />

          {/* ── Burst flash on unlock — white intense light ── */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 100,
              height: 100,
              background: "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 25%, rgba(255,255,255,0.3) 50%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.2 }}
            animate={
              phase === 3
                ? { opacity: [0, 1, 0], scale: [0.2, 4] }
                : {}
            }
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
          {/* Secondary glow — slower white bloom */}
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 60,
              height: 60,
              background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 40%, transparent 70%)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              phase === 3
                ? { opacity: [0, 0.9, 0], scale: [0.5, 2.5] }
                : {}
            }
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.05 }}
          />
        </motion.div>

        {/* Orbiting particles — outside floating so they stay in place */}
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
              <span className="gradient-brand-text">funciona mesmo</span>{" "}
              enquanto você dorme.
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
