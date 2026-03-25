"use client";

import { motion } from "framer-motion";
import { ExternalLink, Quote } from "lucide-react";

const METRICS = [
  { label: "Tempo de carregamento", before: "~3s", after: "0.9s" },
  { label: "Taxa de conversão", before: "~2%", after: "3.8%" },
  { label: "Vendas em Drops", before: "Manual", after: "Automático" },
];

export default function EcomCase() {
  return (
    <section className="section-padding relative" style={{ background: "#09090b" }}>
      {/* Purple ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,0.04) 0%, transparent 60%)",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Case de Sucesso
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-white mb-5">
            Guaradise: de manual para{" "}
            <span className="gradient-brand-text">automático</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left — Metrics & Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-[12px] text-purple-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              CASE DE SUCESSO
            </div>

            <p className="text-zinc-400 leading-relaxed mb-8">
              A Guaradise é uma loja de moda que migrou para a plataforma Keycommerce.
              Com checkout automático, etiquetas Melhor Envio e estoque blindado, a loja
              ganhou performance e estabilidade para aguentar lançamentos sem cair.
            </p>

            {/* Before/After metrics */}
            <div className="space-y-3 mb-8">
              {METRICS.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between py-3 px-4 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                >
                  <span className="text-[13px] text-zinc-400">{metric.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] text-zinc-600 line-through">{metric.before}</span>
                    <span className="text-[13px] text-zinc-500">&rarr;</span>
                    <span className="text-sm font-semibold gradient-brand-text">{metric.after}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="relative pl-4 border-l-2 border-purple-500/30">
              <Quote size={16} className="text-purple-500/30 mb-2" />
              <p className="text-[14px] text-zinc-400 italic leading-relaxed mb-2">
                &ldquo;Com a infraestrutura da Keymatic, nossa loja de roupas ganhou performance
                e estabilidade para aguentar lançamentos sem cair.&rdquo;
              </p>
              <p className="text-[12px] text-zinc-600">&mdash; Equipe Guaradise</p>
            </div>
          </motion.div>

          {/* Right — Mobile mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="w-56 sm:w-64 rounded-[2rem] border-2 border-zinc-700 bg-zinc-900 p-2 shadow-2xl shadow-purple-500/5">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full z-10" />

                {/* Screen content */}
                <div className="rounded-[1.5rem] overflow-hidden bg-white">
                  {/* Header */}
                  <div className="bg-zinc-900 px-4 py-6 pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-3 w-16 bg-white/20 rounded" />
                      <div className="flex gap-2">
                        <div className="w-5 h-5 rounded-full bg-white/10" />
                        <div className="w-5 h-5 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded mb-1" />
                    <div className="h-2 w-2/3 bg-white/5 rounded" />
                  </div>

                  {/* Products */}
                  <div className="p-3 space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-2 p-2 rounded-lg bg-zinc-50">
                        <div className={`w-12 h-12 rounded-lg flex-shrink-0 ${
                          i === 1 ? "bg-purple-100" : i === 2 ? "bg-pink-100" : "bg-orange-100"
                        }`} />
                        <div className="flex-1 py-1">
                          <div className="h-2 w-full bg-zinc-200 rounded mb-1.5" />
                          <div className="h-2 w-1/2 bg-zinc-100 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Badge */}
              <a
                href="https://www.guaradise.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-[11px] text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
              >
                guaradise.com.br
                <ExternalLink size={10} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
