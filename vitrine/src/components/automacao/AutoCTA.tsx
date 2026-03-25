"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/utils";

export default function AutoCTA() {
  return (
    <section id="contato-auto" className="section-padding relative" style={{ background: "linear-gradient(to bottom, #18181b, #27272a)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(236,72,153,0.06) 0%, rgba(168,85,247,0.03) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white mb-5">
            Pronto para colocar no{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              automático
            </span>
            ?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Diagnóstico gratuito. Sem compromisso. Sem enrolação.
          </p>

          <a
            href={getWhatsAppUrl("Olá! Vim pela página de automação e quero um diagnóstico gratuito.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/20"
          >
            <WhatsAppIcon size={18} />
            Falar com especialista
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          <p className="mt-4 text-[13px] text-zinc-300">
            Ou se preferir:{" "}
            <a
              href="mailto:contato@keymatic.com.br"
              className="text-white hover:text-zinc-200 transition-colors underline underline-offset-2"
            >
              contato@keymatic.com.br
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
