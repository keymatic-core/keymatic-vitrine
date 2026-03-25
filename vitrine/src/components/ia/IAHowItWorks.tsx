"use client";

import { motion } from "framer-motion";
import { Search, Cog, HeartHandshake } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description: "Entendemos sua operação, mapeamos tarefas repetitivas e identificamos onde a IA gera mais impacto no seu negócio.",
    color: "#a855f7",
  },
  {
    number: "02",
    icon: Cog,
    title: "Implantação",
    description: "Workshop + configuração das ferramentas na sua empresa. Tudo prático, com a equipe participando e aprendendo.",
    color: "#8b5cf6",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Acompanhamento",
    description: "Suporte contínuo para garantir que a equipe use de verdade. Ajustamos, otimizamos e evoluímos junto com você.",
    color: "#7c3aed",
  },
];

export default function IAHowItWorks() {
  return (
    <section
      id="como-funciona-ia"
      className="section-padding relative"
      style={{ background: "linear-gradient(180deg, #faf5ff 0%, white 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[13px] text-purple-500 font-medium uppercase tracking-wider mb-4">
            Como Funciona
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-zinc-900">
            3 passos para a IA <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">trabalhar</span> por você
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr,1.2fr] gap-10 lg:gap-16 items-center">
          {/* Left — Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-7 top-10 bottom-10 w-px bg-gradient-to-b from-purple-200 via-violet-200 to-indigo-200 hidden sm:block" />

            <div className="space-y-8">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative flex gap-5"
                  >
                    {/* Number circle */}
                    <div
                      className="relative z-10 shrink-0 w-14 h-14 rounded-2xl bg-white border-2 flex items-center justify-center shadow-lg"
                      style={{ borderColor: `${step.color}30`, boxShadow: `0 8px 30px ${step.color}15` }}
                    >
                      <Icon size={24} style={{ color: step.color }} />
                    </div>

                    <div>
                      <span
                        className="text-[11px] font-mono font-bold uppercase tracking-wider mb-1 block"
                        style={{ color: step.color }}
                      >
                        Passo {step.number}
                      </span>
                      <h3 className="text-lg font-semibold text-zinc-900 mb-1">{step.title}</h3>
                      <p className="text-[13px] text-zinc-500 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <div
              className="aspect-[4/3] bg-cover bg-center"
              style={{ backgroundImage: "url('/ia/team-ai.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-52 bg-white/90 backdrop-blur-lg rounded-xl p-3 shadow-lg border border-white/60"
            >
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Resultado médio</p>
              <p className="text-xl font-bold text-zinc-900">70% menos</p>
              <p className="text-[11px] text-zinc-500">tempo em tarefas manuais</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
