"use client";

import { motion } from "framer-motion";
import { Search, FileText, Rocket, TrendingUp } from "lucide-react";
import { PROCESS_STEPS } from "../lib/constants";

const STEP_ICONS = [Search, FileText, Rocket, TrendingUp];
const STEP_COLORS = [
  "text-brand-orange",
  "text-brand-purple",
  "text-brand-pink",
  "text-emerald-500",
];
const STEP_BG_COLORS = [
  "bg-brand-orange/10 border-brand-orange/20",
  "bg-brand-purple/10 border-brand-purple/20",
  "bg-brand-pink/10 border-brand-pink/20",
  "bg-emerald-500/10 border-emerald-500/20",
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-light section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Processo
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-zinc-900 mb-5">
            Como funciona
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">
            Do diagnóstico à evolução contínua, em 4 etapas claras.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Gradient connection line */}
          <div
            className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-px"
            style={{
              background: "linear-gradient(90deg, #f97316, #a855f7, #ec4899, #22c55e)",
              opacity: 0.25,
            }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex flex-col items-center mb-5">
                    <div className={`relative z-10 w-14 h-14 rounded-2xl border shadow-sm flex items-center justify-center mb-3 bg-white ${STEP_BG_COLORS[i].split(" ").slice(1).join(" ")}`}
                      style={{ background: "white" }}
                    >
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${STEP_BG_COLORS[i]}`}>
                        <Icon size={24} className={STEP_COLORS[i]} />
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold font-mono text-zinc-400 tracking-widest uppercase">
                      Etapa {step.step.toString().padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
