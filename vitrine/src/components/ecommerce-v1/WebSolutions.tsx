"use client";

import { motion } from "framer-motion";
import { Globe, Rocket, LayoutDashboard, ShoppingBag } from "lucide-react";

const CARDS = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    subtitle: "Presença digital profissional",
    description:
      "Sites rápidos, responsivos e otimizados para SEO. Do institucional ao portal completo.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    subtitle: "Páginas que convertem",
    description:
      "Landing pages para lançamentos, campanhas e captação de leads. Foco em conversão e velocidade.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS & Dashboards",
    subtitle: "Produtos digitais sob medida",
    description:
      "Painéis administrativos, sistemas internos e produtos SaaS com autenticação, billing e analytics.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Personalizado",
    subtitle: "Para quem precisa de mais",
    description:
      "Quando a plataforma padrão não basta: integrações custom, marketplaces e funcionalidades sob medida.",
  },
];

export default function WebSolutions() {
  return (
    <section className="section-padding relative" style={{ background: "#18181b" }}>
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Soluções Web
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-white mb-5">
            Além do <span className="gradient-brand-text">e-commerce</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Desenvolvemos qualquer produto digital que o seu negócio precisar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-gradient-border p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-zinc-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{card.title}</h3>
                <p className="text-[13px] text-zinc-500 mb-3">{card.subtitle}</p>
                <p className="text-[13px] text-zinc-400 leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
