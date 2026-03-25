"use client";

import { motion } from "framer-motion";

export default function VtsInstitutional() {
  return (
    <section className="section-padding relative" style={{ background: "#09090b" }}>
      {/* Subtle brand glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.03) 0%, transparent 60%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center font-mono font-bold text-sm text-white">
            K
          </div>
          <span className="text-zinc-600 text-lg">&times;</span>
          <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center font-mono font-bold text-sm text-zinc-400">
            V
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.02em] text-white mb-6"
        >
          Da assistência técnica à{" "}
          <span className="gradient-brand-text">automação com IA</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-zinc-400 text-lg leading-relaxed mb-12"
        >
          A VTS Informática nasceu em 2006 em São Paulo. Por 20 anos construímos
          reputação atendendo empresas e residências da região. Agora, como Keymatic, levamos
          essa mesma solidez para o digital — e-commerce, automação e inteligência artificial
          para quem quer crescer de verdade.
        </motion.p>

        {/* Data points */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "20+", label: "Anos de mercado" },
            { value: "São Paulo, SP", label: "Presença local" },
            { value: "03.477.617/0001-90", label: "CNPJ — Transparência total" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-lg sm:text-xl font-bold gradient-brand-text mb-1">
                {item.value}
              </div>
              <div className="text-[12px] text-zinc-600">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
