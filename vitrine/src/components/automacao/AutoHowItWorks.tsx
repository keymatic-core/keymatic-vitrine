"use client";

import { motion } from "framer-motion";
import { Search, Settings, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico gratuito",
    description:
      "Mapeamos seus processos, identificamos gargalos e calculamos quanto tempo e dinheiro você perde com tarefas manuais.",
    color: "#f97316",
  },
  {
    number: "02",
    icon: Settings,
    title: "Implementação sob medida",
    description:
      "Configuramos as automações no seu ritmo. WhatsApp, processos internos, integrações — tudo personalizado pro seu negócio.",
    color: "#ec4899",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Resultado no primeiro mês",
    description:
      "Seu negócio rodando no automático. Acompanhamos os resultados e ajustamos o que for preciso. Suporte contínuo incluso.",
    color: "#a855f7",
  },
];

export default function AutoHowItWorks() {
  return (
    <section id="como-funciona-auto" className="section-padding relative"
      style={{ background: "linear-gradient(180deg, white 0%, #fdf4ff 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[13px] text-pink-500 font-medium uppercase tracking-wider mb-4">
            Como Funciona
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-zinc-900">
            3 passos para o piloto automático
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-orange-200 via-pink-200 to-purple-200" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Number circle */}
                <div className="relative z-10 mx-auto w-14 h-14 rounded-2xl bg-white border-2 flex items-center justify-center mb-5 shadow-lg"
                  style={{ borderColor: `${step.color}30`, boxShadow: `0 8px 30px ${step.color}15` }}
                >
                  <Icon size={24} style={{ color: step.color }} />
                </div>

                <span className="text-[11px] font-mono font-bold uppercase tracking-wider mb-2 block"
                  style={{ color: step.color }}
                >
                  Passo {step.number}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{step.title}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
