"use client";

import { motion } from "framer-motion";

export default function SobreHero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#f4f4f5] overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-subtle-light" />

      {/* Radial fade — grid fades out towards edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 40%, transparent 0%, #f4f4f5 100%)",
        }}
      />

      {/* Brand color glows */}
      <div
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: "rgba(249,115,22,0.045)" }}
      />
      <div
        className="absolute top-[15%] right-[5%] w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(168,85,247,0.04)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-[13px] text-orange-500 font-medium uppercase tracking-wider mb-4">
            Quem Somos
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-zinc-900 mb-6">
            De assistência técnica a{" "}
            <span className="gradient-brand-text">parceira digital</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            São 20 anos transformando tecnologia em resultado.
            Da bancada de manutenção à inteligência artificial,
            nossa história se confunde com a dos nossos clientes.
          </p>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
    </section>
  );
}
