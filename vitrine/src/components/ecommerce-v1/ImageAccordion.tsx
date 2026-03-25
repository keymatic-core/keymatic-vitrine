"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  CreditCard,
  Sparkles,
  LayoutDashboard,
  Mail,
} from "lucide-react";

const PANELS = [
  {
    id: "vitrine",
    title: "Vitrine Inteligente",
    icon: ShoppingBag,
    color: "#f97316",
    gradient: "from-orange-500/20 to-orange-600/5",
    description:
      "Homepage com produtos em destaque, badges de lançamento, countdown de drops e categorias inteligentes.",
    badges: ["Drops com countdown", "Badges automáticos", "SEO otimizado"],
    mockup: "vitrine",
  },
  {
    id: "checkout",
    title: "Checkout Blindado",
    icon: CreditCard,
    color: "#22c55e",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    description:
      "Checkout em etapa única com PIX QR code, timer de expiração, cartão e boleto. Zero overselling.",
    badges: ["PIX instantâneo", "Anti-fraude", "Estoque blindado"],
    mockup: "checkout",
  },
  {
    id: "ia",
    title: "Recomendações IA",
    icon: Sparkles,
    color: "#a855f7",
    gradient: "from-purple-500/20 to-purple-600/5",
    description:
      'Motor de recomendação com 14 sinais de IA. "Você também vai gostar" que realmente converte.',
    badges: ["14 sinais", "Cross-sell", "Personalizado"],
    mockup: "ia",
  },
  {
    id: "admin",
    title: "Painel Admin",
    icon: LayoutDashboard,
    color: "#3b82f6",
    gradient: "from-blue-500/20 to-blue-600/5",
    description:
      "Dashboard completo com métricas em tempo real, pedidos recentes, controle de estoque e relatórios.",
    badges: ["Tempo real", "Relatórios", "Multi-usuário"],
    mockup: "admin",
  },
  {
    id: "email",
    title: "Email Automático",
    icon: Mail,
    color: "#ec4899",
    gradient: "from-pink-500/20 to-pink-600/5",
    description:
      "Emails transacionais white-label: confirmação de pedido, rastreio, carrinho abandonado e recuperação.",
    badges: ["White-label", "Carrinho abandonado", "Rastreio"],
    mockup: "email",
  },
];

/* ─── Abstract Mockup Illustrations ────────────────────── */
function MockupIllustration({ type, color }: { type: string; color: string }) {
  const lines = {
    vitrine: (
      <div className="space-y-3 p-4">
        <div className="flex gap-2">
          {[1, 2].map((i) => (
            <div key={i} className="flex-1 rounded-lg bg-white/10 p-2">
              <div className="h-16 rounded bg-white/5 mb-2" />
              <div className="h-2 w-3/4 bg-white/10 rounded mb-1" />
              <div className="h-2 w-1/2 bg-white/5 rounded" />
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 h-8 rounded bg-white/5 border border-white/10" />
          ))}
        </div>
      </div>
    ),
    checkout: (
      <div className="p-4 space-y-3">
        <div className="rounded-lg bg-white/10 p-3">
          <div className="h-2 w-1/3 bg-white/20 rounded mb-3" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-8 rounded bg-white/5 border border-white/10" />
            <div className="h-8 rounded bg-white/5 border border-white/10" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-20 h-20 rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center">
            <span className="text-[10px] text-white/40 font-mono">QR PIX</span>
          </div>
        </div>
        <div className="h-3 w-2/3 mx-auto rounded-full" style={{ background: color }} />
      </div>
    ),
    ia: (
      <div className="p-4 space-y-3">
        <div className="h-2 w-2/3 bg-white/10 rounded" />
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 rounded-lg bg-white/10 p-2">
              <div className="h-12 rounded bg-white/5 mb-1" />
              <div className="h-1.5 w-full bg-white/10 rounded mb-1" />
              <div className="h-1.5 w-1/2 rounded" style={{ background: `${color}40` }} />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 px-2">
          <Sparkles size={12} style={{ color }} />
          <div className="h-1.5 flex-1 bg-white/5 rounded" />
        </div>
      </div>
    ),
    admin: (
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded bg-white/10 p-2">
              <div className="h-1.5 w-1/2 bg-white/20 rounded mb-1" />
              <div className="h-4 w-full bg-white/5 rounded" />
            </div>
          ))}
        </div>
        <div className="rounded bg-white/10 p-2 h-20">
          <div className="flex h-full items-end gap-1 px-1">
            {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{ height: `${h}%`, background: `${color}60` }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    email: (
      <div className="p-4 space-y-3">
        <div className="rounded-lg bg-white/10 p-3 space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded" style={{ background: `${color}40` }} />
            <div className="h-2 w-20 bg-white/20 rounded" />
          </div>
          <div className="h-px bg-white/10" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full bg-white/10 rounded" />
            <div className="h-1.5 w-4/5 bg-white/10 rounded" />
            <div className="h-1.5 w-3/5 bg-white/5 rounded" />
          </div>
          <div className="h-8 w-1/2 rounded" style={{ background: `${color}30` }} />
        </div>
      </div>
    ),
  };

  return (lines as Record<string, React.ReactNode>)[type] || null;
}

export default function ImageAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePanel = PANELS[activeIndex];

  return (
    <section
      id="accordion-showcase"
      className="relative section-padding overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff 0%, #27272a 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Showcase
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-zinc-900 mb-5">
            Cada detalhe pensado para{" "}
            <span className="gradient-brand-text">converter</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.4fr] gap-8 lg:gap-12 items-start">
          {/* Left — Description (changes with active panel) */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePanel.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-300/50 text-[12px] text-zinc-500 mb-4"
                  style={{
                    borderColor: `${activePanel.color}30`,
                    background: `${activePanel.color}08`,
                  }}
                >
                  <activePanel.icon size={13} style={{ color: activePanel.color }} />
                  {activePanel.title}
                </div>

                <p className="text-lg text-zinc-600 leading-relaxed mb-5">
                  {activePanel.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activePanel.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium text-zinc-500 bg-zinc-100 border border-zinc-200/80"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — Accordion */}
          <div className="flex gap-2 h-[340px] sm:h-[400px]">
            {PANELS.map((panel, i) => {
              const isActive = i === activeIndex;
              const Icon = panel.icon;
              return (
                <motion.div
                  key={panel.id}
                  onMouseEnter={() => setActiveIndex(i)}
                  className="relative rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    flex: isActive ? "1 1 400px" : "0 0 60px",
                    transition: "flex 700ms cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${panel.gradient}`}
                    style={{ background: `linear-gradient(180deg, ${panel.color}15 0%, ${panel.color}05 100%)` }}
                  />
                  <div className="absolute inset-0 bg-zinc-900/80" />

                  {/* Glow on active */}
                  {isActive && (
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(ellipse at 50% 0%, ${panel.color} 0%, transparent 60%)`,
                      }}
                    />
                  )}

                  {/* Collapsed: rotated title */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                      isActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3" style={{ writingMode: "vertical-rl" }}>
                      <Icon size={16} style={{ color: panel.color }} />
                      <span className="text-[12px] font-medium text-zinc-400 tracking-wider">
                        {panel.title}
                      </span>
                    </div>
                  </div>

                  {/* Expanded: content */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {/* Top label */}
                    <div className="p-4 flex items-center gap-2">
                      <Icon size={16} style={{ color: panel.color }} />
                      <span className="text-sm font-semibold text-white">{panel.title}</span>
                    </div>

                    {/* Mockup illustration */}
                    <MockupIllustration type={panel.mockup} color={panel.color} />
                  </div>

                  {/* Bottom border glow */}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: panel.color }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: card carousel alternative */}
        <div className="lg:hidden mt-8">
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {PANELS.map((panel, i) => {
              const Icon = panel.icon;
              return (
                <div
                  key={panel.id}
                  className={`snap-center shrink-0 w-[85vw] rounded-xl p-4 border transition-colors ${
                    i === activeIndex
                      ? "border-white/20 bg-zinc-800/60"
                      : "border-white/5 bg-zinc-900/60"
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={16} style={{ color: panel.color }} />
                    <span className="text-sm font-semibold text-white">{panel.title}</span>
                  </div>
                  <p className="text-[13px] text-zinc-400 leading-relaxed">{panel.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
