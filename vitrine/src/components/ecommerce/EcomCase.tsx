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
    <section id="case-ecom" className="section-padding relative bg-[#f4f4f5]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.04] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[13px] text-orange-500 font-medium uppercase tracking-wider mb-4 mx-auto">
            Case de Sucesso
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-zinc-900 mb-5">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/25 bg-orange-500/10 text-[12px] text-orange-600 font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              CASE DE SUCESSO
            </div>

            <p className="text-zinc-600 leading-relaxed mb-8">
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
                  className="flex items-center justify-between py-3 px-4 rounded-lg bg-zinc-800/90 border border-white/[0.06]"
                >
                  <span className="text-[13px] text-zinc-300">{metric.label}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] text-zinc-500 line-through">{metric.before}</span>
                    <span className="text-[13px] text-zinc-500">&rarr;</span>
                    <span className="text-sm font-semibold text-zinc-300">{metric.after}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="relative pl-4 border-l-2 border-purple-500/40">
              <Quote size={16} className="text-purple-500/40 mb-2" />
              <p className="text-[14px] text-zinc-600 italic leading-relaxed mb-2">
                &ldquo;Com a infraestrutura da Keymatic, nossa loja de roupas ganhou performance
                e estabilidade para aguentar lançamentos sem cair.&rdquo;
              </p>
              <p className="text-[12px] text-zinc-500">&mdash; Equipe Guaradise</p>
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
              {/* Phone frame — Hero notebook style applied to mobile */}
              <div className="w-56 sm:w-64 rounded-[2rem] border border-zinc-300/40 bg-white p-2 shadow-2xl shadow-zinc-400/20">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-white rounded-full z-10" />

                {/* Screen content */}
                <div className="rounded-[1.5rem] overflow-hidden bg-white">
                  {/* Header */}
                  <div className="bg-zinc-900 px-4 py-6 pt-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-400 to-pink-500" />
                        <div className="h-2.5 w-14 bg-white/20 rounded" />
                      </div>
                      <div className="flex gap-2">
                        <div className="w-5 h-5 rounded-full bg-white/10" />
                        <div className="w-5 h-5 rounded-full bg-white/10" />
                      </div>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded mb-1" />
                    <div className="h-2 w-2/3 bg-white/10 rounded" />
                  </div>

                  {/* Products */}
                  <div className="p-3 space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-2 p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                        <div className={`w-12 h-12 rounded-lg flex-shrink-0 bg-gradient-to-br ${
                          i === 1 ? "from-purple-100 to-purple-50" :
                          i === 2 ? "from-pink-100 to-pink-50" :
                          "from-orange-100 to-orange-50"
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
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-[11px] text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 shadow-sm transition-colors"
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
