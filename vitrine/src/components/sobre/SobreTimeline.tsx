"use client";

import { motion } from "framer-motion";
import { Wrench, Monitor, Globe, Cpu, Sparkles } from "lucide-react";

const TIMELINE = [
  {
    year: "2006",
    icon: Wrench,
    title: "VTS Informática nasce",
    description:
      "Fundada por Tercio Rigonati em São Paulo. Assistência técnica, manutenção de computadores e redes para o comércio local.",
    color: "#3b82f6",
  },
  {
    year: "2010s",
    icon: Monitor,
    title: "Expansão para redes e infraestrutura",
    description:
      "A VTS se consolida como referência em infraestrutura de TI na região. Redes, servidores, cabeamento estruturado e suporte para dezenas de empresas.",
    color: "#22c55e",
  },
  {
    year: "2018",
    icon: Globe,
    title: "Primeiros passos no digital",
    description:
      "A demanda dos clientes por presença online leva a VTS a explorar desenvolvimento web. Sites, landing pages e os primeiros e-commerces começam a surgir.",
    color: "#f97316",
  },
  {
    year: "2024",
    icon: Cpu,
    title: "Automação e inteligência artificial",
    description:
      "A equipe mergulha em automações (WhatsApp, processos internos) e IA aplicada. A visão de um novo braço de negócios começa a tomar forma.",
    color: "#ec4899",
  },
  {
    year: "2026",
    icon: Sparkles,
    title: "Keymatic é lançada",
    description:
      "Nasce a Keymatic: e-commerce de elite, automação inteligente e consultoria em IA. Uma nova marca para um novo capítulo, com a solidez de 20 anos da VTS.",
    color: "#a855f7",
  },
];

export default function SobreTimeline() {
  return (
    <section id="historia" className="section-padding relative bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[13px] text-orange-500 font-medium uppercase tracking-wider mb-4">
            Nossa Trajetória
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-zinc-900">
            20 anos de evolução
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-zinc-200 sm:-translate-x-px" />

          <div className="space-y-12">
            {TIMELINE.map((item, i) => {
              const Icon = item.icon;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-white z-10"
                    style={{ background: item.color }}
                  />

                  {/* Spacer for mobile */}
                  <div className="w-12 shrink-0 sm:hidden" />

                  {/* Content */}
                  <div className={`flex-1 sm:w-1/2 ${isEven ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                    <div
                      className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[12px] font-mono font-semibold mb-2"
                      style={{ color: item.color, background: `${item.color}10` }}
                    >
                      <Icon size={13} />
                      {item.year}
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 mb-1">{item.title}</h3>
                    <p className="text-[14px] text-zinc-500 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden sm:block sm:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
