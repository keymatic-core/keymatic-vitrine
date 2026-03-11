"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Zap,
  Brain,
  ArrowRight,
  Check,
  CheckCircle,
  ShieldCheck,
  MessageCircle,
  Settings,
  CheckCheck,
} from "lucide-react";
import { SOLUTIONS } from "../lib/constants";
import { getWhatsAppUrl } from "../lib/utils";

/* ═══════════════════════════════════════════════════════════════
   Visual Illustration: E-commerce — Phone Mockup with Carousel
   ═══════════════════════════════════════════════════════════════ */
function EcommerceVisual() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [showSold, setShowSold] = useState(false);

  const products = [
    { name: "Tênis Air", price: "R$ 599", color: "from-violet-500/30 to-violet-600/10" },
    { name: "Relógio Pro", price: "R$ 1.290", color: "from-brand-purple/30 to-brand-pink/10" },
    { name: "Headphone X", price: "R$ 449", color: "from-brand-orange/30 to-amber-500/10" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSold(true);
      setTimeout(() => {
        setShowSold(false);
        setCurrentProduct((p) => (p + 1) % products.length);
      }, 1200);
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="relative flex items-center justify-center h-full min-h-[220px]">
      {/* Purple ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-brand-purple/[0.12] blur-[60px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Phone frame */}
      <div className="relative w-[140px] h-[260px] rounded-[24px] border-2 border-white/[0.1] bg-zinc-900/80 shadow-2xl shadow-brand-purple/10 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-zinc-800 z-10" />

        {/* Screen content */}
        <div className="absolute inset-[3px] rounded-[21px] overflow-hidden bg-zinc-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center p-3"
            >
              {/* Product visual */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${products[currentProduct].color} border border-white/[0.08] flex items-center justify-center mb-2`}>
                <ShoppingCart size={22} className="text-white/60" />
              </div>
              <span className="text-[10px] font-medium text-zinc-300 mb-0.5">
                {products[currentProduct].name}
              </span>
              <span className="text-[11px] font-bold text-white">
                {products[currentProduct].price}
              </span>

              {/* Buy button */}
              <div className="mt-2 px-4 py-1 rounded-full bg-white/10 border border-white/[0.08]">
                <span className="text-[8px] font-semibold text-zinc-300 uppercase tracking-wider">
                  Comprar
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Sold overlay */}
          <AnimatePresence>
            {showSold && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950/90 z-20"
              >
                <CheckCircle size={28} className="text-emerald-400 mb-1" />
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                  Vendido!
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Home bar */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-white/20" />
      </div>

      {/* Floating badges */}
      <motion.div
        className="absolute -right-1 top-8 px-2.5 py-1 rounded-lg bg-zinc-800/90 border border-white/[0.06] flex items-center gap-1.5"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <ShieldCheck size={10} className="text-emerald-400" />
        <span className="text-[9px] font-medium text-zinc-400">Checkout Seguro</span>
      </motion.div>

      <motion.div
        className="absolute -left-2 bottom-12 px-2.5 py-1 rounded-lg bg-zinc-800/90 border border-white/[0.06] flex items-center gap-1.5"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
      >
        <Zap size={10} className="text-brand-orange" />
        <span className="text-[9px] font-medium text-zinc-400">0.9s load</span>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Visual Illustration: Automação — Chat Bubbles
   ═══════════════════════════════════════════════════════════════ */
function AutomacaoVisual() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full min-h-[220px] gap-3">
      {/* Orange ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-brand-orange/[0.1] blur-[60px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Chat bubble 1 — Question */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative self-start ml-4 max-w-[180px]"
      >
        <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-zinc-800 border border-white/[0.06]">
          <div className="flex items-center gap-2 mb-1">
            <MessageCircle size={11} className="text-zinc-500" />
            <span className="text-[9px] text-zinc-600 font-medium">Cliente • 03:14</span>
          </div>
          <p className="text-[11px] text-zinc-300 leading-relaxed">
            Oi, meu pedido #4521 já foi enviado?
          </p>
        </div>
      </motion.div>

      {/* Lightning connector */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-1.5"
      >
        <div className="w-6 h-px bg-gradient-to-r from-transparent to-brand-orange/40" />
        <div className="w-7 h-7 rounded-full bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
          <Settings size={13} className="text-brand-orange animate-[spin_4s_linear_infinite]" />
        </div>
        <div className="w-6 h-px bg-gradient-to-r from-brand-orange/40 to-transparent" />
      </motion.div>

      {/* Chat bubble 2 — Bot response */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="relative self-end mr-4 max-w-[190px]"
      >
        <div className="px-3.5 py-2.5 rounded-2xl rounded-br-sm bg-brand-orange/10 border border-brand-orange/20">
          <div className="flex items-center gap-2 mb-1">
            <Zap size={11} className="text-brand-orange" />
            <span className="text-[9px] text-brand-orange/70 font-medium">Bot • 03:14</span>
          </div>
          <p className="text-[11px] text-zinc-300 leading-relaxed">
            Sim! Pedido enviado via Sedex. Rastreio: <span className="text-brand-orange font-mono text-[10px]">BR4521X</span>
          </p>
          <div className="flex items-center gap-1 mt-1.5">
            <CheckCheck size={11} className="text-emerald-400" />
            <span className="text-[9px] text-emerald-400 font-medium">Resolvido em 2s</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Visual Illustration: IA — Neural Network Particles
   ═══════════════════════════════════════════════════════════════ */
function IAVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  // Node positions (fixed grid)
  const nodes = [
    { x: 20, y: 20 }, { x: 50, y: 15 }, { x: 80, y: 22 },
    { x: 12, y: 50 }, { x: 35, y: 45 }, { x: 60, y: 50 }, { x: 85, y: 48 },
    { x: 25, y: 75 }, { x: 50, y: 80 }, { x: 75, y: 78 },
    { x: 42, y: 60 }, { x: 65, y: 35 },
  ];

  // Connections between nodes
  const connections = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 6],
    [3, 4], [4, 5], [5, 6], [3, 7], [4, 8],
    [5, 9], [7, 8], [8, 9], [4, 10], [5, 11],
    [10, 8], [11, 2], [10, 7], [11, 6],
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => { setIsHovering(false); setMousePos({ x: 0.5, y: 0.5 }); }}
      className="relative h-full min-h-[220px] w-full cursor-crosshair"
    >
      {/* Gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-44 h-44 rounded-full blur-[70px]"
          style={{
            background: "radial-gradient(circle, rgba(249,115,22,0.12) 0%, rgba(168,85,247,0.08) 60%, transparent 100%)",
            left: `${mousePos.x * 100}%`,
            top: `${mousePos.y * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{ scale: isHovering ? 1.3 : 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* SVG connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {connections.map(([a, b], i) => {
          const from = nodes[a];
          const to = nodes[b];
          // Distance from mouse to midpoint for brightness
          const midX = (from.x + to.x) / 2 / 100;
          const midY = (from.y + to.y) / 2 / 100;
          const dist = Math.sqrt((mousePos.x - midX) ** 2 + (mousePos.y - midY) ** 2);
          const brightness = isHovering ? Math.max(0.03, 0.2 - dist * 0.4) : 0.04;

          return (
            <motion.line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="white"
              strokeWidth="0.3"
              animate={{ opacity: brightness }}
              transition={{ duration: 0.3 }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, i) => {
        const dx = mousePos.x - node.x / 100;
        const dy = mousePos.y - node.y / 100;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const pull = isHovering ? Math.min(0.08, 0.15 / (dist + 0.3)) : 0;
        const attractX = node.x + dx * pull * 100;
        const attractY = node.y + dy * pull * 100;
        const nodeScale = isHovering && dist < 0.3 ? 1.5 : 1;
        const isOrange = i % 3 === 0;
        const isPurple = i % 3 === 1;

        return (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isOrange
                ? "bg-brand-orange/60"
                : isPurple
                  ? "bg-brand-purple/60"
                  : "bg-white/40"
            }`}
            animate={{
              left: `${attractX}%`,
              top: `${attractY}%`,
              scale: nodeScale,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ transform: "translate(-50%, -50%)" }}
          />
        );
      })}

      {/* Center brain icon */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange/20 to-brand-purple/20 border border-white/[0.08] flex items-center justify-center"
        animate={{
          scale: isHovering ? 1.1 : 1,
          boxShadow: isHovering
            ? "0 0 30px rgba(249,115,22,0.15), 0 0 60px rgba(168,85,247,0.1)"
            : "0 0 0px transparent",
        }}
        transition={{ duration: 0.4 }}
      >
        <Brain size={18} className="text-white/70" />
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Card Glow Wrapper — Mouse-following glow on each card
   ═══════════════════════════════════════════════════════════════ */
function BentoCard({
  children,
  glowColor,
  index,
}: {
  children: React.ReactNode;
  glowColor: string;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative rounded-2xl border border-white/[0.06] bg-zinc-900 overflow-hidden group transition-all duration-300 hover:border-white/[0.12]"
    >
      {/* Card glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 70%)`,
        }}
      />

      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   Main Section
   ═══════════════════════════════════════════════════════════════ */
const VISUALS = [EcommerceVisual, AutomacaoVisual, IAVisual];
const GLOW_COLORS = [
  "rgba(168,85,247,0.06)",  // Purple for E-commerce
  "rgba(249,115,22,0.06)",  // Orange for Automação
  "rgba(249,115,22,0.04)",  // Gradient mix for IA
];
const SHORT_TITLES = [
  "Lojas que Convertem",
  "Atendimento 24/7",
  "IA sob Medida",
];

export default function SolutionsShowcase() {
  return (
    <section id="solucoes" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Soluções
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white mb-5">
            Três caminhos para{" "}
            <span className="gradient-brand-text">crescer</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Cada negócio tem uma dor diferente. Identifique a sua e descubra como resolver.
          </p>
        </motion.div>

        {/* Bento Cards */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {SOLUTIONS.map((solution, i) => {
            const Visual = VISUALS[i];

            return (
              <BentoCard key={solution.id} glowColor={GLOW_COLORS[i]} index={i}>
                {/* Visual area — 60% */}
                <div className="relative h-[260px] sm:h-[280px] border-b border-white/[0.04] overflow-hidden">
                  <Visual />
                </div>

                {/* Text area — 40% */}
                <div className="relative p-5 lg:p-6">
                  <h3 className="text-lg font-semibold text-white mb-1.5">
                    {SHORT_TITLES[i]}
                  </h3>

                  <p className="text-[12px] font-medium text-zinc-600 mb-3 uppercase tracking-wider">
                    {solution.title}
                  </p>

                  <p className="text-[13px] text-zinc-500 leading-relaxed mb-4">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {solution.features.slice(0, 3).map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-[12px] text-zinc-400">
                        <Check size={12} className="text-brand-orange shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={getWhatsAppUrl(`Olá! Tenho interesse em ${solution.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    {solution.cta}
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
