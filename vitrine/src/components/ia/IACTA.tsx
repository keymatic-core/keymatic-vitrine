"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/utils";

export default function IACTA() {
  return (
    <section id="contato-ia" className="section-padding relative" style={{ background: "linear-gradient(to bottom, #18181b, #09090b)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* Purple glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.08) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white mb-5">
            Comece pelo{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              diagnóstico gratuito
            </span>
          </h2>
          <p className="text-zinc-400 text-lg mb-4">
            Sem compromisso. Sem enrolação. Em 15 minutos mapeamos onde IA pode transformar sua operação.
          </p>
          <p className="text-zinc-500 text-sm mb-8">
            Ou responda nossa pesquisa rápida e ganhe um e-book com dicas de IA para empresas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA — WhatsApp */}
            <a
              href={getWhatsAppUrl("Olá! Vim pela página de Consultoria em IA e quero um diagnóstico gratuito.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-medium text-white bg-gradient-to-r from-purple-500 to-violet-600 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
            >
              <WhatsAppIcon size={18} />
              Agendar Diagnóstico
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Secondary CTA — Pesquisa + E-book */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-medium text-zinc-300 border border-zinc-700 hover:border-purple-500/50 hover:text-white transition-all"
            >
              <FileText size={16} />
              Pesquisa + E-book Grátis
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <p className="mt-6 text-[13px] text-zinc-500">
            Ou se preferir:{" "}
            <a
              href="mailto:contato@keymatic.com.br"
              className="text-zinc-300 hover:text-white transition-colors underline underline-offset-2"
            >
              contato@keymatic.com.br
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
