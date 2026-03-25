"use client";

import { motion } from "framer-motion";
import { Users, Brain, Banknote } from "lucide-react";

const DIFFS = [
  {
    icon: Users,
    title: "Atendimento próximo",
    description:
      "Não somos um SaaS genérico. Conhecemos seu negócio pelo nome, implementamos junto e ajustamos até funcionar.",
  },
  {
    icon: Brain,
    title: "IA integrada",
    description:
      "Não é só automação: tem inteligência artificial analisando padrões, tomando decisões e otimizando seus processos.",
  },
  {
    icon: Banknote,
    title: "Preço justo para PMEs",
    description:
      "Soluções que empresas grandes pagam fortunas, adaptadas para o bolso do pequeno empresário. Sem mensalidades abusivas.",
  },
];

export default function AutoDifferentials() {
  return (
    <section id="diferenciais-auto" className="section-padding relative" style={{ background: "#18181b" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[13px] text-pink-400 font-medium uppercase tracking-wider mb-4">
            Diferenciais
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white mb-4">
            Por que a Keymatic?
          </h2>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto">
            Automação com quem entende de gente, não só de código.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {DIFFS.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group card-gradient-border p-6 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:border-pink-500/30 group-hover:shadow-[0_0_16px_rgba(236,72,153,0.12)]">
                  <Icon size={20} className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{diff.title}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">{diff.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
