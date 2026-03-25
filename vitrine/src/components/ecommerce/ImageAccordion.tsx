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
      <div className="relative p-3">
        {/* AI spark badge */}
        <div
          className="absolute -top-1 -right-1 z-10 w-7 h-7 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: color, boxShadow: `0 4px 12px ${color}50` }}
        >
          <Sparkles size={13} className="text-white" />
        </div>

        {/* Product card being analyzed */}
        <div className="rounded-lg bg-white/[0.07] border border-white/10 overflow-hidden">
          {/* Store header */}
          <div className="px-3 py-2 border-b border-white/[0.06] flex items-center justify-between">
            <span className="text-[9px] font-bold text-white/70 tracking-wide">HOLYC WEAR</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
              <span className="text-[7px] text-white/40">IA Ativa</span>
            </div>
          </div>

          {/* Product area */}
          <div className="px-3 py-3 space-y-2.5">
            {/* Sneaker silhouette */}
            <div className="relative h-20 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center overflow-hidden">
              {/* Scan lines overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 3px, ${color}30 3px, ${color}30 4px)`,
              }} />
              {/* Minimalist sneaker SVG */}
              <svg viewBox="0 0 80 40" className="w-20 h-10 opacity-50">
                <path d="M10 30 L10 18 C10 14 14 10 18 10 L35 10 L40 6 L45 10 L55 10 C60 10 65 14 65 18 L70 28 L72 30 Z" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.15" strokeWidth="0.5" />
                <path d="M25 10 L25 18 M35 10 L35 16 M45 10 L45 18" stroke={color} strokeOpacity="0.4" strokeWidth="0.5" />
                <circle cx="55" cy="20" r="3" fill={color} fillOpacity="0.3" />
              </svg>
              {/* Category label */}
              <div className="absolute bottom-1.5 left-2 text-[6px] text-white/25 font-medium uppercase tracking-wider">Sneaker Minimalista</div>
            </div>

            {/* Product info */}
            <div className="space-y-1.5">
              <div className="text-[9px] text-white/60 font-medium">Tênis Urban Pro HC</div>
              {/* Price transition */}
              <div className="flex items-center gap-2">
                <span className="text-[8px] text-white/20 line-through">R$ 299</span>
                <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 opacity-40"><path d="M2 6h8M6 2l4 4-4 4" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" /></svg>
                <span className="text-[10px] font-bold" style={{ color }}>R$ 249</span>
              </div>
              <div className="text-[7px] font-medium" style={{ color: `${color}90` }}>✦ Oferta Personalizada</div>
            </div>

            {/* AI analysis progress bar */}
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-[7px] text-white/30">Analisando Probabilidade de Compra</span>
                <span className="text-[7px] font-mono font-bold" style={{ color }}>87%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: "87%", background: `linear-gradient(90deg, ${color}60, ${color})` }}
                />
              </div>
            </div>

            {/* Bottom tags */}
            <div className="flex gap-1.5 pt-0.5">
              {["Drop Ativo", "Alta Demanda", "Último par"].map((tag) => (
                <span key={tag} className="px-1.5 py-0.5 rounded text-[6px] font-medium text-white/40 border border-white/[0.06] bg-white/[0.03]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    checkout: (
      <div className="relative p-3">
        {/* Shield badge */}
        <div
          className="absolute -top-1 -right-1 z-10 w-7 h-7 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: color, boxShadow: `0 4px 12px ${color}50` }}
        >
          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-white" fill="currentColor">
            <path d="M8 1L2 4v4c0 3.5 2.6 6.8 6 7.5 3.4-.7 6-4 6-7.5V4L8 1zm0 7.5h4.5C12 11.5 10.2 13.8 8 14.4V8.5H3.5V4.7L8 2.5v6z" />
          </svg>
        </div>

        <div className="rounded-lg bg-white/[0.07] border border-white/10 overflow-hidden">
          {/* Payment header */}
          <div className="px-3 py-2 border-b border-white/[0.06] flex items-center justify-between">
            <span className="text-[9px] font-bold text-white/70 tracking-wide">PAGAMENTO SEGURO</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
              <span className="text-[7px] text-white/40">Criptografado</span>
            </div>
          </div>

          <div className="px-3 py-3 space-y-2.5">
            {/* Payment method tabs */}
            <div className="flex gap-1">
              {["PIX", "Cartão", "Boleto"].map((m, i) => (
                <div
                  key={m}
                  className="flex-1 py-1 rounded text-center text-[7px] font-bold"
                  style={i === 0
                    ? { background: `${color}20`, color, border: `1px solid ${color}40` }
                    : { background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.06)" }
                  }
                >
                  {m}
                </div>
              ))}
            </div>

            {/* QR Code PIX */}
            <div className="flex items-center justify-center py-1">
              <div
                className="w-[72px] h-[72px] rounded-lg border flex items-center justify-center relative"
                style={{ borderColor: `${color}40`, boxShadow: `0 0 20px ${color}15` }}
              >
                {/* QR code pattern */}
                <svg viewBox="0 0 48 48" className="w-14 h-14 opacity-60">
                  {/* Corner markers */}
                  <rect x="4" y="4" width="12" height="12" rx="2" fill="white" fillOpacity="0.3" />
                  <rect x="6" y="6" width="8" height="8" rx="1" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
                  <rect x="7.5" y="7.5" width="5" height="5" rx="0.5" fill={color} fillOpacity="0.5" />

                  <rect x="32" y="4" width="12" height="12" rx="2" fill="white" fillOpacity="0.3" />
                  <rect x="34" y="6" width="8" height="8" rx="1" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
                  <rect x="35.5" y="7.5" width="5" height="5" rx="0.5" fill={color} fillOpacity="0.5" />

                  <rect x="4" y="32" width="12" height="12" rx="2" fill="white" fillOpacity="0.3" />
                  <rect x="6" y="34" width="8" height="8" rx="1" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
                  <rect x="7.5" y="35.5" width="5" height="5" rx="0.5" fill={color} fillOpacity="0.5" />

                  {/* Data modules */}
                  {[
                    [20,4],[24,4],[20,8],[28,8],[20,12],[24,12],[28,12],
                    [4,20],[8,20],[12,20],[4,24],[8,24],[12,24],[4,28],
                    [20,20],[24,20],[28,20],[20,24],[24,24],[28,24],[20,28],[24,28],
                    [32,20],[36,20],[40,20],[32,24],[36,24],[40,24],[32,28],[36,28],[40,28],
                    [32,32],[36,32],[40,32],[32,36],[36,36],[40,36],[32,40],[36,40],
                  ].map(([x, y], i) => (
                    <rect key={i} x={x} y={y} width="3" height="3" rx="0.5" fill="white" fillOpacity={i % 3 === 0 ? 0.25 : 0.12} />
                  ))}
                </svg>
                {/* Pulsing glow ring */}
                <div className="absolute inset-0 rounded-lg animate-pulse opacity-30" style={{ boxShadow: `inset 0 0 12px ${color}` }} />
              </div>
            </div>

            {/* Timer */}
            <div className="flex items-center justify-center gap-1.5">
              <div className="w-1 h-1 rounded-full animate-pulse" style={{ background: color }} />
              <span className="text-[8px] text-white/40 font-mono">Expira em 14:32</span>
            </div>

            {/* Security strength bar */}
            <div className="space-y-1 pt-0.5">
              <div className="flex items-center justify-between">
                <span className="text-[7px] text-white/30">Zero Overselling Garantido</span>
                <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill={color}><path d="M6 1L1.5 3.5v3c0 2.4 1.8 4.7 4.5 5.2 2.7-.5 4.5-2.8 4.5-5.2v-3L6 1z" /></svg>
              </div>
              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <div className="h-full w-full rounded-full" style={{ background: `linear-gradient(90deg, ${color}60, ${color})` }} />
              </div>
              <div className="flex justify-between">
                {["Estoque", "Fraude", "Criptografia", "LGPD"].map((s) => (
                  <span key={s} className="text-[5px] font-medium" style={{ color: `${color}70` }}>✓ {s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    ia: (
      <div className="relative p-3">
        {/* AI badge */}
        <div
          className="absolute -top-1 -right-1 z-10 px-2 py-1 rounded-md text-[9px] font-bold tracking-wide text-white shadow-lg"
          style={{ background: color, boxShadow: `0 4px 12px ${color}50` }}
        >
          14 Sinais
        </div>

        <div className="rounded-lg bg-white/[0.07] border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="px-3 py-2 border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Sparkles size={10} style={{ color }} />
              <span className="text-[9px] font-bold text-white/70 tracking-wide">RECOMENDAÇÕES IA</span>
            </div>
            <span className="text-[7px] text-white/30 font-mono">Tempo real</span>
          </div>

          <div className="px-3 py-3 space-y-2">
            {/* Neural network visualization (SVG connecting products) */}
            <div className="relative">
              {/* Products grid */}
              <div className="flex gap-2 relative z-10">
                {[
                  { label: "Boné HC", match: "92%", icon: "M8 4C8 4 6 8 6 10C6 12 10 12 10 10C10 8 8 4 8 4Z M4 10h8" },
                  { label: "Camiseta HC", match: "98%", icon: "M6 2L2 5l2 2 1-1v10h6V6l1 1 2-2L10 2 9 3C8.5 3.5 7.5 3.5 7 3Z" },
                  { label: "Calça HC", match: "85%", icon: "M5 3h6v4l-1 9h-1.5l-.5-6-.5 6H6L5 7V3z" },
                ].map((product, i) => (
                  <div key={i} className="flex-1 rounded-md bg-white/[0.05] border border-white/[0.08] p-1.5 text-center relative">
                    {/* Match badge */}
                    <div
                      className="absolute -top-1.5 -right-1 px-1 py-0.5 rounded text-[6px] font-bold text-white z-10"
                      style={{ background: color, boxShadow: `0 2px 8px ${color}40` }}
                    >
                      {product.match}
                    </div>
                    {/* Product silhouette */}
                    <div className="h-10 flex items-center justify-center mb-1">
                      <svg viewBox="0 0 16 16" className="w-6 h-6 opacity-40">
                        <path d={product.icon} fill="white" />
                      </svg>
                    </div>
                    <div className="text-[7px] text-white/40 font-medium">{product.label}</div>
                    {/* Connection dot */}
                    <div
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border"
                      style={{ background: `${color}30`, borderColor: `${color}60` }}
                    />
                  </div>
                ))}
              </div>

              {/* Neural network lines (SVG overlay) */}
              <svg className="w-full h-6 mt-0.5" viewBox="0 0 200 20" preserveAspectRatio="none">
                {/* Lines from center product to others */}
                <line x1="33" y1="2" x2="100" y2="16" stroke={color} strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 2" />
                <line x1="100" y1="16" x2="167" y2="2" stroke={color} strokeOpacity="0.25" strokeWidth="0.8" strokeDasharray="3 2" />
                <line x1="33" y1="2" x2="167" y2="2" stroke={color} strokeOpacity="0.12" strokeWidth="0.5" strokeDasharray="2 3" />
                {/* Central node */}
                <circle cx="100" cy="16" r="3" fill={color} fillOpacity="0.4" />
                <circle cx="100" cy="16" r="1.5" fill={color} fillOpacity="0.8" />
                {/* Side nodes */}
                <circle cx="33" cy="2" r="2" fill={color} fillOpacity="0.3" />
                <circle cx="167" cy="2" r="2" fill={color} fillOpacity="0.3" />
              </svg>
            </div>

            {/* Label */}
            <div className="flex items-center justify-center gap-1.5 py-1">
              <Sparkles size={8} style={{ color }} />
              <span className="text-[7px] font-medium" style={{ color: `${color}90` }}>Motor de recomendação ativo</span>
            </div>

            {/* Signal indicators */}
            <div className="grid grid-cols-4 gap-1">
              {["Histórico", "Perfil", "Tendência", "Contexto"].map((s) => (
                <div key={s} className="text-center py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
                  <span className="text-[5px] text-white/30 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    admin: (
      <div className="relative p-3">
        {/* Live badge */}
        <div
          className="absolute -top-1 -right-1 z-10 flex items-center gap-1 px-2 py-1 rounded-md text-[8px] font-bold tracking-wide text-white shadow-lg"
          style={{ background: color, boxShadow: `0 4px 12px ${color}50` }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          LIVE
        </div>

        <div className="rounded-lg bg-white/[0.07] border border-white/10 overflow-hidden">
          {/* Dashboard header */}
          <div className="px-3 py-2 border-b border-white/[0.06] flex items-center justify-between">
            <span className="text-[9px] font-bold text-white/70 tracking-wide">PAINEL ADMIN</span>
            <span className="text-[7px] text-white/30 font-mono">Hoje, 14:32</span>
          </div>

          <div className="px-3 py-3 space-y-2.5">
            {/* Revenue metric */}
            <div className="space-y-0.5">
              <div className="text-[7px] text-white/30 uppercase tracking-wider">Receita Hoje</div>
              <div className="text-[16px] font-bold tracking-tight" style={{ color }}>R$ 8.420<span className="text-[10px] text-white/30">,00</span></div>
            </div>

            {/* Line chart */}
            <div className="relative h-16 rounded-md bg-white/[0.03] border border-white/[0.06] overflow-hidden p-1">
              {/* Grid lines */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "25% 33%",
              }} />
              {/* Chart line */}
              <svg viewBox="0 0 200 60" className="w-full h-full relative z-10" preserveAspectRatio="none">
                {/* Area fill */}
                <path
                  d="M0 55 L25 48 L50 50 L75 40 L100 35 L125 28 L150 18 L175 12 L200 5 L200 60 L0 60 Z"
                  fill={`url(#adminGrad)`}
                />
                <defs>
                  <linearGradient id="adminGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {/* Line */}
                <polyline
                  points="0,55 25,48 50,50 75,40 100,35 125,28 150,18 175,12 200,5"
                  fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                />
                {/* Peak dot */}
                <circle cx="200" cy="5" r="3" fill={color} />
                <circle cx="200" cy="5" r="6" fill={color} fillOpacity="0.2" />
              </svg>
            </div>

            {/* Status cards */}
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { label: "Novos Pedidos", value: "+22%", icon: "M12 4L4 8v8l8 4 8-4V8l-8-4z" },
                { label: "Estoque", value: "OK", icon: "M9 12l2 2 4-4M3 6h18v12H3z" },
                { label: "Worker", value: "Ativo", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
              ].map((card) => (
                <div key={card.label} className="rounded-md bg-white/[0.04] border border-white/[0.06] p-1.5 text-center">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 mx-auto mb-0.5 opacity-50" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={card.icon} />
                  </svg>
                  <div className="text-[8px] font-bold" style={{ color }}>{card.value}</div>
                  <div className="text-[5px] text-white/30 font-medium mt-0.5">{card.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    email: (
      <div className="relative p-3">
        {/* Floating discount badge */}
        <div
          className="absolute -top-1 -right-1 z-10 px-2 py-1 rounded-md text-[9px] font-bold tracking-wide text-white shadow-lg"
          style={{ background: color, boxShadow: `0 4px 12px ${color}50` }}
        >
          -5% OFF
        </div>

        {/* Email envelope */}
        <div className="rounded-lg bg-white/[0.07] border border-white/10 overflow-hidden">
          {/* Email header */}
          <div className="px-3 py-2 border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded" style={{ background: `${color}35` }} />
              <span className="text-[9px] font-bold text-white/70 tracking-wide">HOLYC WEAR</span>
            </div>
            <div className="flex gap-0.5">
              {[1, 2, 3].map((d) => (
                <div key={d} className="w-1 h-1 rounded-full bg-white/20" />
              ))}
            </div>
          </div>

          {/* Subject line */}
          <div className="px-3 pt-2.5 pb-1.5">
            <div className="text-[8px] text-white/30 mb-0.5">Assunto:</div>
            <div className="text-[9px] text-white/60 font-medium">
              Ei, você esqueceu algo no carrinho 👀
            </div>
          </div>

          <div className="h-px mx-3 bg-white/[0.06]" />

          {/* Email body */}
          <div className="px-3 py-3 space-y-2.5">
            {/* Greeting text lines */}
            <div className="space-y-1">
              <div className="h-1 w-3/4 bg-white/10 rounded" />
              <div className="h-1 w-full bg-white/[0.06] rounded" />
            </div>

            {/* Product card */}
            <div className="flex gap-2 p-2 rounded-md bg-white/[0.04] border border-white/[0.06]">
              {/* T-shirt silhouette */}
              <div className="w-12 h-14 rounded bg-zinc-700 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                {/* Simple t-shirt shape */}
                <svg viewBox="0 0 40 44" className="w-8 h-9 opacity-60">
                  <path d="M12 4 L4 10 L8 14 L10 12 L10 38 L30 38 L30 12 L32 14 L36 10 L28 4 L24 8 C22 10 18 10 16 8 Z" fill="white" fillOpacity="0.25" />
                  <text x="20" y="25" textAnchor="middle" fill={color} fontSize="5" fontWeight="bold" opacity="0.7">HC</text>
                </svg>
              </div>
              {/* Product info */}
              <div className="flex-1 flex flex-col justify-center gap-1">
                <div className="text-[8px] text-white/50 font-medium">Camiseta Oversized</div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[8px] text-white/25 line-through">R$ 189</span>
                  <span className="text-[10px] font-bold" style={{ color }}>R$ 179</span>
                </div>
                <div className="text-[7px] text-white/20">Tam: G · Cor: Off-white</div>
              </div>
            </div>

            {/* Coupon code */}
            <div className="flex items-center justify-center gap-1.5 py-1 rounded border border-dashed border-white/10">
              <span className="text-[7px] text-white/30">Cupom:</span>
              <span className="text-[9px] font-mono font-bold tracking-wider" style={{ color }}>RECOVERY5</span>
            </div>

            {/* CTA Button */}
            <button
              className="w-full py-2 rounded-md text-[10px] font-bold text-white tracking-wide flex items-center justify-center gap-1.5"
              style={{ background: color }}
            >
              Finalizar Compra
              <svg viewBox="0 0 16 16" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
          </div>

          {/* Email footer */}
          <div className="px-3 py-1.5 border-t border-white/[0.04]">
            <div className="h-0.5 w-1/2 mx-auto bg-white/[0.06] rounded" />
          </div>
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
        background: "linear-gradient(to bottom, #f4f4f5 0%, #27272a 100%)",
      }}
    >
      {/* Orange ambient glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-orange-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[13px] text-orange-500 font-medium uppercase tracking-wider mb-4 mx-auto">
            Showcase
          </div>
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
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-orange-500/5 text-[12px] font-semibold uppercase tracking-wider mb-4"
                  style={{ borderColor: `${activePanel.color}40` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: activePanel.color }} />
                  <span className="text-zinc-900">{activePanel.title}</span>
                </div>

                <p className="text-lg text-zinc-600 leading-relaxed mb-5">
                  {activePanel.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {activePanel.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium text-zinc-700 border"
                      style={{ borderColor: `${activePanel.color}25`, background: `${activePanel.color}08` }}
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
