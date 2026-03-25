"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/utils";

export default function SobreCTA() {
  return (
    <section id="contato-sobre" className="section-padding relative" style={{ background: "linear-gradient(to bottom, #18181b, #27272a)" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white mb-5">
            Vamos construir{" "}
            <span className="gradient-brand-text">juntos</span>?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Conte pra gente o que o seu negócio precisa. O primeiro diagnóstico é por nossa conta.
          </p>

          <a
            href={getWhatsAppUrl("Olá! Vim pela página Quem Somos e gostaria de conhecer melhor os serviços.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-medium text-white gradient-brand hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20"
          >
            <WhatsAppIcon size={18} />
            Falar com a equipe
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
