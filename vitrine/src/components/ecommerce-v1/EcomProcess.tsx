"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    step: "01",
    title: "Briefing",
    description:
      "Entendemos seu negócio, público e objetivos. Definimos identidade visual e funcionalidades.",
    time: "Dia 1",
  },
  {
    step: "02",
    title: "Setup & Identidade",
    description:
      "Configuramos a plataforma: logo, cores, SMTP, gateway de pagamento. Tudo pelo painel admin — zero código.",
    time: "Dias 2-3",
  },
  {
    step: "03",
    title: "Produtos & Teste",
    description:
      "Você cadastra produtos, configura frete e cupons. Testamos todo o fluxo: compra, pagamento, etiqueta.",
    time: "Dias 4-7",
  },
  {
    step: "04",
    title: "Lançamento",
    description:
      "Deploy na VPS, domínio configurado, SSL automático. Sua loja está no ar.",
    time: "Dia 7-14",
  },
];

export default function EcomProcess() {
  return (
    <section className="section-padding relative" style={{ background: "linear-gradient(to bottom, #09090b, #18181b)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

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
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-white mb-5">
            Do zero à loja <span className="gradient-brand-text">no ar</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Um processo enxuto que respeita seu tempo.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px">
            <div className="h-full gradient-brand opacity-20" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                {/* Step number */}
                <div className="relative z-10 w-[52px] h-[52px] rounded-xl bg-zinc-900 border border-white/[0.06] flex items-center justify-center mb-5">
                  <span className="text-xl font-bold gradient-brand-text">{step.step}</span>
                </div>

                {/* Vertical connector (mobile) */}
                {i < STEPS.length - 1 && (
                  <div className="lg:hidden absolute left-[25px] top-[52px] w-px h-6 gradient-brand opacity-20" />
                )}

                <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed mb-3">{step.description}</p>
                <span className="text-[11px] font-mono text-zinc-600 bg-white/[0.03] px-2 py-0.5 rounded">
                  {step.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
