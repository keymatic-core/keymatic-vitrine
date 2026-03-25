"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mail, MapPin } from "lucide-react";
import { getWhatsAppUrl } from "../../lib/utils";

export default function EcomCTA() {
  return (
    <section id="contato-ecom" className="section-padding relative" style={{ background: "#09090b" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* CTA Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.06) 0%, rgba(168,85,247,0.03) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-white mb-5">
            Pronto para lançar{" "}
            <span className="gradient-brand-text">sua loja</span>?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Diagnóstico gratuito. Sem compromisso. Sem enrolação.
          </p>

          <a
            href={getWhatsAppUrl("Olá! Vim pela página de e-commerce e quero lançar minha loja.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-medium text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/10"
          >
            <MessageCircle size={18} />
            Falar com especialista
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          <p className="mt-4 text-[13px] text-zinc-600">
            Ou se preferir:{" "}
            <a
              href="mailto:contato@keymatic.com.br"
              className="text-zinc-400 hover:text-zinc-300 transition-colors underline underline-offset-2"
            >
              contato@keymatic.com.br
            </a>
          </p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 pt-8 border-t border-white/[0.04]"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[13px] text-zinc-600">
            <a
              href={getWhatsAppUrl("Olá!")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-400 transition-colors"
            >
              <MessageCircle size={13} />
              (11) 93429-4637
            </a>
            <a
              href="mailto:contato@keymatic.com.br"
              className="flex items-center gap-1.5 hover:text-zinc-400 transition-colors"
            >
              <Mail size={13} />
              contato@keymatic.com.br
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              São Paulo — SP
            </span>
          </div>

          <p className="mt-4 text-[12px] text-zinc-700">
            Uma marca VTS Informática &middot; 20 anos de história
          </p>
        </motion.div>
      </div>
    </section>
  );
}
