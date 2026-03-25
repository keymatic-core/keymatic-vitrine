"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Package, Webhook, Cpu, Container } from "lucide-react";

const STACK_ITEMS = [
  { name: "Django 6.0", status: "RUNNING" },
  { name: "PostgreSQL 15", status: "HEALTHY" },
  { name: "Redis 7", status: "CONNECTED" },
  { name: "Worker (django-q2)", status: "2 WORKERS ACTIVE" },
  { name: "Docker Compose", status: "4 CONTAINERS" },
  { name: "Gunicorn", status: "3 WORKERS" },
];

const TECH_CARDS = [
  {
    icon: Package,
    title: "Inventário 3-Pool",
    description: "select_for_update() + lock pessimista. Overselling é impossível.",
    detail: "Available → Reserved → Sold",
  },
  {
    icon: Webhook,
    title: "Webhook Dedup",
    description: "Duas fases de deduplicação. Pagamento nunca é processado 2x.",
    badge: "Score 85.8/100",
  },
  {
    icon: Cpu,
    title: "Task Queue",
    description: "Emails, etiquetas e rastreio em background. Se o worker cair, fallback síncrono.",
    badge: "Uptime 99.9%",
  },
  {
    icon: Container,
    title: "Deploy Docker",
    description: "4 containers orquestrados. Coolify + VPS. Zero downtime nas migrations.",
    badge: "1 comando",
  },
];

function StatusDot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
    </span>
  );
}

export default function TechInfra() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="infra-ecom" ref={ref} className="section-padding relative" style={{ background: "#09090b" }}>
      <div className="absolute inset-0 bg-grid-subtle" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[13px] text-orange-400 font-medium uppercase tracking-wider mb-4 mx-auto">
            Infraestrutura
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-white mb-5">
            Deep <span className="gradient-brand-text">Infrastructure</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Transparência total sobre o que sustenta a sua loja.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Stack Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-dark p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <Activity size={16} className="text-emerald-400" />
                <span className="font-mono text-[13px] text-zinc-400">STACK DE PRODUÇÃO</span>
              </div>
              <div className="flex items-center gap-2">
                <StatusDot />
                <span className="text-[11px] font-mono text-emerald-400">ALL SYSTEMS GO</span>
              </div>
            </div>

            <div className="space-y-1.5">
              {STACK_ITEMS.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/[0.02]"
                >
                  <div className="flex items-center gap-2.5">
                    <StatusDot />
                    <span className="font-mono text-[13px] text-zinc-300">{item.name}</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-600 bg-white/[0.03] px-2 py-0.5 rounded">
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Cards */}
          <div className="grid grid-cols-2 gap-3">
            {TECH_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group card-gradient-border p-5 flex flex-col"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-3 transition-all duration-300 group-hover:border-orange-500/30 group-hover:shadow-[0_0_16px_rgba(249,115,22,0.12)]">
                    <Icon size={18} className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{card.title}</h4>
                  <p className="text-[12px] text-zinc-500 leading-relaxed mb-2">{card.description}</p>
                  {card.badge && (
                    <span className="mt-auto inline-flex self-start px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20">
                      {card.badge}
                    </span>
                  )}
                  {card.detail && (
                    <span className="mt-auto inline-flex self-start px-2 py-0.5 rounded text-[10px] font-mono text-zinc-500 bg-white/[0.03]">
                      {card.detail}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
