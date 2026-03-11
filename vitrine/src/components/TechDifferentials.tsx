"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Shield, Lock, Truck, Activity, Database } from "lucide-react";
import { TECH_STACK } from "../lib/constants";

function StatusDot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
    </span>
  );
}

function UptimeCounter({ inView }: { inView: boolean }) {
  const [uptime, setUptime] = useState("000d 00:00:00");

  useEffect(() => {
    if (!inView) return;
    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1);

    function update() {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setUptime(`${d.toString().padStart(3, "0")}d ${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`);
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [inView]);

  return <span className="tabular-nums">{uptime}</span>;
}

const SECURITY_CARDS = [
  { icon: Shield, title: "LGPD Compliant", desc: "Consentimento granular, direito ao esquecimento e exportação de dados." },
  { icon: Lock, title: "2FA Ativo", desc: "Autenticação de dois fatores em todos os painéis." },
  { icon: Truck, title: "Melhor Envio", desc: "Logística automatizada com cálculo de frete integrado." },
  { icon: Database, title: "Backup Diário", desc: "PostgreSQL com backup automático e retenção de 30 dias." },
];

export default function TechDifferentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diferenciais" ref={ref} className="section-padding relative">
      {/* Subtle background shift */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Infraestrutura
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white mb-5">
            Diferenciais <span className="gradient-brand-text">técnicos</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Transparência total. Você sabe exatamente o que sustenta seu negócio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Health Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-dark p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <Activity size={16} className="text-emerald-400" />
                <span className="font-mono text-[13px] text-zinc-400">/healthz/</span>
              </div>
              <div className="flex items-center gap-2">
                <StatusDot />
                <span className="text-[11px] font-mono text-emerald-400">OPERATIONAL</span>
              </div>
            </div>

            <div className="space-y-1.5">
              {TECH_STACK.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/[0.02]"
                >
                  <div className="flex items-center gap-2.5">
                    <StatusDot />
                    <span className="font-mono text-[13px] text-zinc-300">{tech.name}</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-600 bg-white/[0.03] px-2 py-0.5 rounded">{tech.category}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-600">UPTIME</span>
              <span className="font-mono text-[13px] text-emerald-400">
                <UptimeCounter inView={inView} />
              </span>
            </div>
          </motion.div>

          {/* Security Cards */}
          <div className="grid grid-cols-2 gap-3">
            {SECURITY_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card-gradient-border p-5 flex flex-col"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-3">
                    <Icon size={18} className="text-zinc-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{card.title}</h4>
                  <p className="text-[12px] text-zinc-500 leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
