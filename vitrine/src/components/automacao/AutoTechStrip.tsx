"use client";

import { motion } from "framer-motion";

/* ─── Tech logos as clean SVG icons ──────────────────────── */

function N8NLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#EA4B71" fillOpacity="0.1" />
      <text x="16" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="#EA4B71" fontFamily="system-ui">n8n</text>
    </svg>
  );
}

function PythonLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M15.9 4C10.3 4 10.8 6.5 10.8 6.5V9.2h5.3v.8H8.5S4 9.5 4 15.9s3.9 6.2 3.9 6.2h2.3v-3s-.1-3.9 3.8-3.9h5.3s3.7.1 3.7-3.6V7.3S23.6 4 16 4zm-2.9 1.9c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z" fill="#3776AB" />
      <path d="M16.1 28c5.6 0 5.1-2.5 5.1-2.5v-2.7h-5.3v-.8h7.6s4.5.5 4.5-5.9-3.9-6.2-3.9-6.2h-2.3v3s.1 3.9-3.8 3.9h-5.3s-3.7-.1-3.7 3.6v4.3S8.4 28 16 28zm2.9-1.9c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z" fill="#FFD43B" />
    </svg>
  );
}

function PostgresLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M23.5 8.2c-1.2-1.6-3-2.5-5.2-2.7-.4 0-.8 0-1.2.1-1.1-.5-2.3-.7-3.5-.6-1.8.1-3.3.9-4.3 2.1-1.3.3-2.3 1-3 2.1-1 1.6-1 3.7-.1 6.2.6 1.6 1.5 3.4 2.4 4.5.9 1 1.7 1.3 2.4 1.1.3.5.8.8 1.4.9h.3c.6 0 1.2-.3 1.6-.9.4.1.8.1 1.2.1h.3c1.5-.1 2.7-.8 3.4-1.8.6.1 1.1.1 1.5 0 .7-.2 1.2-.6 1.6-1.2.7-1.1.9-2.8.7-5.1-.1-1.9-.4-3.3-1.5-4.8z" fill="#336791" />
      <path d="M21.6 12c.1 1.9.1 3.6-.4 4.4-.3.5-.6.6-.8.6-.3.1-.7.1-1.3-.1l-.4-.1v.5c0 .2-.1.3-.1.5-.5.9-1.5 1.5-2.8 1.5h-.3c-.4 0-.7-.1-1.1-.2l-.5-.2-.2.5c-.3.7-.7 1-1.2 1h-.2c-.4-.1-.9-.3-1.7-1.3-.8-1-1.7-2.7-2.2-4.2-.8-2.2-.8-4 0-5.2.5-.8 1.3-1.3 2.4-1.5l.3-.1.2-.3c.7-1 1.9-1.6 3.5-1.7 1-.1 2.1.1 3 .6l.3.2.4-.1c.3-.1.7-.1 1 0 1.7.2 3.2.9 4.1 2.3.8 1.2 1.1 2.4 1.2 3.9z" fill="white" />
    </svg>
  );
}

function GitHubLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4C9.4 4 4 9.4 4 16c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C24.6 25.8 28 21.3 28 16c0-6.6-5.4-12-12-12z" fill="#6b7280" />
    </svg>
  );
}

function EvolutionAPILogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" fill="#25D366" fillOpacity="0.1" />
      <path d="M16 8c-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1.1 4l-1.2 4.3 4.4-1.1c1.1.6 2.4 1 3.7 1 4.4 0 8-3.6 8-8s-3.6-8.2-8-8.2z" fill="#25D366" />
      <path d="M21.1 18.9c-.3-.1-1.6-.8-1.8-.9-.3-.1-.4-.1-.6.2-.2.2-.6.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.8-.8-1.4-1.7-1.6-2-.1-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.5.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.1 0 1.3.9 2.5 1 2.7.1.2 1.8 2.7 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3z" fill="white" />
    </svg>
  );
}

const TECHS = [
  { name: "N8N", description: "Orquestração de fluxos", Logo: N8NLogo },
  { name: "Python", description: "Scripts & IA", Logo: PythonLogo },
  { name: "Evolution API", description: "WhatsApp Business", Logo: EvolutionAPILogo },
  { name: "PostgreSQL", description: "Banco de dados", Logo: PostgresLogo },
  { name: "GitHub", description: "Versionamento", Logo: GitHubLogo },
];

/* ─── Main Section ───────────────────────────────────────── */
export default function AutoTechStrip() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(180deg, #f9f5ff 0%, #f3eaff 50%, #f0e4ff 100%)" }}>
      {/* Subtle mechanical pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="gears" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Gear 1 */}
              <circle cx="30" cy="30" r="14" stroke="#000" strokeWidth="1" fill="none" />
              <circle cx="30" cy="30" r="8" stroke="#000" strokeWidth="0.5" fill="none" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line
                  key={angle}
                  x1={30 + 12 * Math.cos((angle * Math.PI) / 180)}
                  y1={30 + 12 * Math.sin((angle * Math.PI) / 180)}
                  x2={30 + 18 * Math.cos((angle * Math.PI) / 180)}
                  y2={30 + 18 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#000"
                  strokeWidth="2"
                />
              ))}
              {/* Gear 2 */}
              <circle cx="90" cy="80" r="10" stroke="#000" strokeWidth="1" fill="none" />
              <circle cx="90" cy="80" r="5" stroke="#000" strokeWidth="0.5" fill="none" />
              {[0, 60, 120, 180, 240, 300].map((angle) => (
                <line
                  key={`g2-${angle}`}
                  x1={90 + 8 * Math.cos((angle * Math.PI) / 180)}
                  y1={80 + 8 * Math.sin((angle * Math.PI) / 180)}
                  x2={90 + 13 * Math.cos((angle * Math.PI) / 180)}
                  y2={80 + 13 * Math.sin((angle * Math.PI) / 180)}
                  stroke="#000"
                  strokeWidth="2"
                />
              ))}
              {/* Connecting arm */}
              <line x1="44" y1="30" x2="78" y2="75" stroke="#000" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gears)" />
        </svg>
      </div>

      {/* Top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[13px] text-pink-500 font-medium uppercase tracking-wider mb-2">
            Infraestrutura
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-zinc-800">
            Ferramentas que sustentam sua automação
          </h3>
        </motion.div>

        {/* Tech cards */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {TECHS.map((tech, i) => {
            const Logo = tech.Logo;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group gradient-border-hover flex items-center gap-3 px-5 py-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-sm hover:shadow-pink-100/30 transition-all"
              >
                <div className="shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Logo />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-zinc-700 group-hover:text-zinc-900 transition-colors leading-tight">
                    {tech.name}
                  </p>
                  <p className="text-[11px] text-zinc-400 leading-tight">{tech.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Robotic arm decorative element */}
        <div className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none hidden lg:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            {/* Base */}
            <rect x="80" y="170" width="40" height="20" rx="4" fill="#000" />
            <rect x="90" y="150" width="20" height="25" rx="3" fill="#000" />
            {/* Arm segment 1 */}
            <rect x="85" y="100" width="12" height="55" rx="6" fill="#000" transform="rotate(-10 91 127)" />
            {/* Joint */}
            <circle cx="88" cy="100" r="8" fill="#000" />
            {/* Arm segment 2 */}
            <rect x="70" y="50" width="10" height="55" rx="5" fill="#000" transform="rotate(15 75 77)" />
            {/* Joint */}
            <circle cx="82" cy="52" r="7" fill="#000" />
            {/* Gripper */}
            <path d="M75 35 L68 20 L72 18 L80 32Z" fill="#000" />
            <path d="M85 35 L92 20 L88 18 L80 32Z" fill="#000" />
            {/* Wires detail */}
            <path d="M95 155 Q 110 130 100 105" stroke="#000" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
}
