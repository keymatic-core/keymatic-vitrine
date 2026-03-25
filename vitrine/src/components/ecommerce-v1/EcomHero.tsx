"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, CreditCard, Tag, ShieldCheck } from "lucide-react";
import { getWhatsAppUrl } from "../../lib/utils";

/* ─── Notebook Mockup with Parallax ─────────────────────── */
function NotebookMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), {
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
      className="relative w-full max-w-md mx-auto lg:mx-0"
      style={{ perspective: "1200px" }}
    >
      {/* Aura glow behind notebook */}
      <div
        className="absolute inset-0 -m-8 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.15) 0%, rgba(236,72,153,0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        {/* Notebook frame */}
        <div className="relative rounded-xl overflow-hidden border border-zinc-300/40 bg-white shadow-2xl shadow-zinc-400/20">
          {/* Browser top bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-zinc-100 border-b border-zinc-200/80">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <div className="flex-1 mx-3">
              <div className="h-5 rounded-md bg-zinc-200/80 flex items-center justify-center">
                <span className="text-[10px] text-zinc-400 font-mono">keycommerce.app</span>
              </div>
            </div>
          </div>

          {/* Screen content — abstract dashboard mockup */}
          <div className="p-4 bg-white min-h-[220px] sm:min-h-[260px]">
            {/* Top nav mock */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-orange-400 to-pink-500" />
                <div className="h-2.5 w-20 bg-zinc-200 rounded" />
              </div>
              <div className="flex gap-2">
                <div className="h-2.5 w-12 bg-zinc-100 rounded" />
                <div className="h-2.5 w-12 bg-zinc-100 rounded" />
                <div className="h-2.5 w-12 bg-zinc-100 rounded" />
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: "Vendas", value: "R$ 12.4k", color: "from-orange-400 to-pink-400" },
                { label: "Pedidos", value: "127", color: "from-pink-400 to-purple-400" },
                { label: "Conversão", value: "3.8%", color: "from-purple-400 to-blue-400" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg bg-zinc-50 p-2.5 border border-zinc-100">
                  <div className="text-[9px] text-zinc-400 mb-1">{stat.label}</div>
                  <div className={`text-sm font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-lg bg-zinc-50 border border-zinc-100 overflow-hidden">
                  <div className={`h-14 bg-gradient-to-br ${
                    i === 1 ? "from-orange-100 to-orange-50" :
                    i === 2 ? "from-pink-100 to-pink-50" :
                    "from-purple-100 to-purple-50"
                  }`} />
                  <div className="p-1.5">
                    <div className="h-1.5 w-full bg-zinc-200 rounded mb-1" />
                    <div className="h-1.5 w-2/3 bg-zinc-100 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notebook base/chin */}
        <div className="relative h-3 bg-gradient-to-b from-zinc-200 to-zinc-300 rounded-b-xl mx-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-zinc-300 rounded-b" />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Trust Badges ────────────────────────────────────────── */
const TRUST_BADGES = [
  { icon: CreditCard, label: "PIX + Cartão + Boleto" },
  { icon: Tag, label: "Etiqueta automática" },
  { icon: ShieldCheck, label: "LGPD Compliant" },
];

/* ─── Hero Section ────────────────────────────────────────── */
export default function EcomHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] via-white to-white" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-300/60 bg-white/80 text-[13px] text-zinc-500 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-purple-500" />
              PRODUTO PRONTO &bull; DEPLOY EM 48H
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-[-0.02em] text-zinc-900 mb-6"
            >
              Lojas virtuais que{" "}
              <span className="gradient-brand-text">vendem</span> enquanto
              voc&ecirc; dorme.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-zinc-500 max-w-lg mb-8 leading-relaxed"
            >
              Plataforma e-commerce completa com checkout inteligente, estoque
              blindado contra overselling e recomenda&ccedil;&otilde;es personalizadas por IA.
              Pronta para o seu pr&oacute;ximo grande drop.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a
                href={getWhatsAppUrl("Olá! Vim pelo site e quero minha loja virtual.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 hover:shadow-lg transition-all duration-200"
              >
                Quero minha loja
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#accordion-showcase"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-zinc-600 border border-zinc-300 hover:border-zinc-400 hover:bg-zinc-50 transition-all duration-150"
              >
                Ver demonstra&ccedil;&atilde;o
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {TRUST_BADGES.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-1.5 text-[12px] text-zinc-400"
                  >
                    <Icon size={13} className="text-zinc-400" />
                    {badge.label}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Notebook */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <NotebookMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
