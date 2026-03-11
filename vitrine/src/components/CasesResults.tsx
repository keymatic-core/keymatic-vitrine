"use client";

import { motion } from "framer-motion";
import { ArrowRight, Quote, ExternalLink, Globe, TrendingUp, Users, Award } from "lucide-react";
import { CASES } from "../lib/constants";

const CASE_ICONS = [Globe, TrendingUp, Users, Award];

export default function CasesResults() {
  return (
    <section id="cases" className="section-padding relative bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Resultados
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white mb-5">
            Cases de <span className="gradient-brand-text">sucesso</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Projetos reais que mostram o que acontece quando tecnologia encontra estratégia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {CASES.map((caseItem, i) => {
            const CaseIcon = CASE_ICONS[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group card-dark p-6 hover:border-white/[0.15] hover:shadow-lg hover:shadow-white/[0.02] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-semibold text-white">{caseItem.client}</h3>
                      {caseItem.url && (
                        <a href={caseItem.url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-300 transition-colors">
                          <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                    <span className="text-[12px] text-zinc-500 font-medium">{caseItem.segment}</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-brand-orange/20 group-hover:bg-brand-orange/5 transition-all duration-300">
                    <CaseIcon size={16} className="text-zinc-400 group-hover:text-brand-orange transition-colors duration-300" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {caseItem.metrics.map((metric, j) => (
                    <div key={j} className="text-center p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] group-hover:border-white/[0.08] group-hover:bg-white/[0.03] transition-all duration-300">
                      <div className="text-[11px] text-zinc-600 mb-1">{metric.label}</div>
                      <div className="flex items-center justify-center gap-1 text-[13px]">
                        {metric.before !== "—" && (
                          <>
                            <span className="text-zinc-600 line-through text-[11px]">{metric.before}</span>
                            <ArrowRight size={9} className="text-brand-orange" />
                          </>
                        )}
                        <span className="font-semibold text-white">{metric.after}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/[0.04] pt-4 group-hover:border-white/[0.08] transition-colors duration-300">
                  <Quote size={14} className="text-zinc-700 mb-2" />
                  <p className="text-[13px] text-zinc-500 italic leading-relaxed mb-2">
                    {caseItem.testimonial}
                  </p>
                  <span className="text-[12px] text-zinc-600 font-medium">— {caseItem.author}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
