"use client";

import { motion } from "framer-motion";
import { HelpCircle, ShieldX, Clock4, TrendingDown } from "lucide-react";

const PAINS = [
  {
    icon: HelpCircle,
    title: "\"Não sei por onde começar\"",
    description: "Sua equipe ouve falar de IA todo dia, mas ninguém sabe como aplicar no trabalho. Ferramentas existem — falta direcionamento.",
    color: "#a855f7",
  },
  {
    icon: ShieldX,
    title: "\"Minha equipe não vai usar\"",
    description: "Medo de tecnologia, resistência a mudança, falta de tempo para aprender. O treinamento errado gera frustração, não resultado.",
    color: "#8b5cf6",
  },
  {
    icon: Clock4,
    title: "Horas em tarefas manuais",
    description: "Relatórios, e-mails, análises, propostas... Tudo feito na mão. A IA resolve em minutos o que sua equipe leva horas.",
    color: "#7c3aed",
  },
  {
    icon: TrendingDown,
    title: "Concorrente já está usando",
    description: "Enquanto você espera, seu concorrente já automatizou processos com IA. A diferença de produtividade só aumenta com o tempo.",
    color: "#6d28d9",
  },
];

export default function IAPain() {
  return (
    <section className="section-padding relative bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-[13px] text-purple-500 font-medium uppercase tracking-wider mb-4">
            O Cenário
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-zinc-900 mb-4">
            Reconhece algum <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">desses</span>?
          </h2>
          <p className="text-zinc-500 text-lg max-w-lg mx-auto">
            Se o seu dia é assim, consultoria de IA não é luxo — é necessidade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {PAINS.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group gradient-border-hover p-5 rounded-xl bg-zinc-50/50 hover:bg-purple-50/30 transition-colors"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors"
                  style={{ background: `${pain.color}10`, border: `1px solid ${pain.color}20` }}
                >
                  <Icon size={20} style={{ color: pain.color }} className="transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-1 transition-transform duration-200 origin-left group-hover:scale-105">
                  {pain.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">{pain.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
