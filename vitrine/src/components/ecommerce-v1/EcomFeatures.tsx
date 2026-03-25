"use client";

import { motion } from "framer-motion";
import {
  CreditCard,
  ShoppingCart,
  Sparkles,
  Package,
  Truck,
  Timer,
  ShieldCheck,
  Lock,
  Database,
} from "lucide-react";

const FEATURE_GROUPS = [
  {
    category: "Vendas & Conversão",
    features: [
      {
        icon: CreditCard,
        title: "Checkout inteligente",
        description: "PIX + Cartão + Boleto com detecção automática de melhor opção.",
      },
      {
        icon: ShoppingCart,
        title: "Recuperação de carrinho",
        description: "Email + cupom automático para recuperar vendas abandonadas.",
      },
      {
        icon: Sparkles,
        title: "Recomendação por IA",
        description: "Motor com 14 sinais de comportamento para cross-sell personalizado.",
      },
    ],
  },
  {
    category: "Gestão & Operação",
    features: [
      {
        icon: Package,
        title: "Estoque 3-pool",
        description: "Blindado contra overselling com lock pessimista por transação.",
      },
      {
        icon: Truck,
        title: "Etiqueta automática",
        description: "Integração Melhor Envio com cálculo de frete e rastreio em tempo real.",
      },
      {
        icon: Timer,
        title: "Drops automáticos",
        description: "Countdown + lançamento automático com fila inteligente.",
      },
    ],
  },
  {
    category: "Segurança & Confiança",
    features: [
      {
        icon: ShieldCheck,
        title: "2FA + CSP",
        description: "Autenticação de dois fatores e Content Security Policy com nonces.",
      },
      {
        icon: Lock,
        title: "Admin stealth",
        description: "Painel admin retorna 404 para não-staff. Rate limiting por IP.",
      },
      {
        icon: Database,
        title: "Backup diário",
        description: "PostgreSQL com backup automático e LGPD compliance nativa.",
      },
    ],
  },
];

export default function EcomFeatures() {
  return (
    <section className="section-padding relative" style={{ background: "#09090b" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Features
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-white mb-5">
            O que vem <span className="gradient-brand-text">incluso</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Tudo que seu e-commerce precisa, pronto para usar desde o dia 1.
          </p>
        </motion.div>

        <div className="space-y-12">
          {FEATURE_GROUPS.map((group) => (
            <div key={group.category}>
              <h3 className="text-[11px] font-semibold text-zinc-600 uppercase tracking-wider mb-4 px-1">
                {group.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.features.map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="card-gradient-border p-5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-3">
                        <Icon size={18} className="text-zinc-400" />
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-[12px] text-zinc-500 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
