"use client";

import { motion } from "framer-motion";

/* ─── Tool logos as clean SVG icons ────────────────────────── */

function ChatGPTLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#10A37F" fillOpacity="0.1" />
      <path d="M25.7 14.2c.3-1.5 0-3.1-.9-4.4a5.8 5.8 0 00-6.3-2.7 5.7 5.7 0 00-4.3-1.9 5.8 5.8 0 00-5.5 4 5.7 5.7 0 00-3.8 2.8 5.8 5.8 0 00.7 6.8c-.3 1.5 0 3.1.9 4.4a5.8 5.8 0 006.3 2.7 5.7 5.7 0 004.3 1.9 5.8 5.8 0 005.5-4 5.7 5.7 0 003.8-2.8 5.8 5.8 0 00-.7-6.8z" fill="#10A37F" />
      <path d="M14.5 23.5v-5.3l4.6-2.6m-9.2 5.3l4.6-2.7V13m0 0l4.6 2.6M14.5 13l-4.6 2.6m9.2 0v5.3l-4.6 2.6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClaudeLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#D97706" fillOpacity="0.1" />
      <path d="M20.4 10.5L16 21.5l-2-5-5-2L20.4 10.5z" fill="#D97706" />
      <path d="M20.4 10.5L16 21.5l2-5 5-2-2.6-4z" fill="#B45309" />
    </svg>
  );
}

function GeminiLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#4285F4" fillOpacity="0.1" />
      <path d="M16 6c0 5.5 4.5 10 10 10-5.5 0-10 4.5-10 10 0-5.5-4.5-10-10-10 5.5 0 10-4.5 10-10z" fill="url(#gemini-grad)" />
      <defs>
        <linearGradient id="gemini-grad" x1="6" y1="6" x2="26" y2="26">
          <stop stopColor="#4285F4" />
          <stop offset="1" stopColor="#9B72CB" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CopilotLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#0078D4" fillOpacity="0.1" />
      <path d="M16 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" fill="#0078D4" fillOpacity="0.15" />
      <path d="M12 17.5c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#0078D4" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="13.5" cy="14.5" r="1.5" fill="#0078D4" />
      <circle cx="18.5" cy="14.5" r="1.5" fill="#0078D4" />
    </svg>
  );
}

function N8NLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#EA4B71" fillOpacity="0.1" />
      <text x="16" y="20" textAnchor="middle" fontSize="11" fontWeight="700" fill="#EA4B71" fontFamily="system-ui">n8n</text>
    </svg>
  );
}

function PerplexityLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#20808D" fillOpacity="0.1" />
      <path d="M16 7v18M9 12l7-5 7 5M9 20l7 5 7-5M9 12v8M23 12v8" stroke="#20808D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const TOOLS = [
  { name: "ChatGPT", description: "Textos, análises e automação", Logo: ChatGPTLogo },
  { name: "Claude", description: "Documentos e escrita avançada", Logo: ClaudeLogo },
  { name: "Gemini", description: "Pesquisa e multimodal", Logo: GeminiLogo },
  { name: "Copilot", description: "Produtividade no Office", Logo: CopilotLogo },
  { name: "n8n + IA", description: "Fluxos automatizados", Logo: N8NLogo },
  { name: "Perplexity", description: "Pesquisa inteligente", Logo: PerplexityLogo },
];

/* ─── Infinite Scroll Slider ───────────────────────────────── */
function ToolCard({ tool }: { tool: (typeof TOOLS)[number] }) {
  const Logo = tool.Logo;
  return (
    <div className="group gradient-border-hover flex items-center gap-3 px-5 py-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:shadow-sm hover:shadow-purple-100/30 transition-all shrink-0">
      <div className="shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300">
        <Logo />
      </div>
      <div>
        <p className="text-[13px] font-semibold text-zinc-700 group-hover:text-zinc-900 transition-colors leading-tight whitespace-nowrap">
          {tool.name}
        </p>
        <p className="text-[11px] text-zinc-400 leading-tight whitespace-nowrap">{tool.description}</p>
      </div>
    </div>
  );
}

export default function IAToolkit() {
  // Triple the items to ensure seamless loop
  const tripled = [...TOOLS, ...TOOLS, ...TOOLS];

  return (
    <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(180deg, white 0%, #f5f0ff 50%, #ede5ff 100%)" }}>
      {/* Neural network pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="neural" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#000" />
              <circle cx="80" cy="20" r="2" fill="#000" />
              <circle cx="50" cy="50" r="3" fill="#000" />
              <circle cx="20" cy="80" r="2" fill="#000" />
              <circle cx="80" cy="80" r="2" fill="#000" />
              <line x1="20" y1="20" x2="50" y2="50" stroke="#000" strokeWidth="0.5" />
              <line x1="80" y1="20" x2="50" y2="50" stroke="#000" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="20" y2="80" stroke="#000" strokeWidth="0.5" />
              <line x1="50" y1="50" x2="80" y2="80" stroke="#000" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      {/* Top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 px-4 sm:px-6"
        >
          <p className="text-[13px] text-purple-500 font-medium uppercase tracking-wider mb-2">
            Ferramentas
          </p>
          <h3 className="text-lg sm:text-xl font-semibold text-zinc-800">
            As IAs que ensinamos e <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">implantamos</span>
          </h3>
        </motion.div>

        {/* Infinite scroll slider */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #f5f0ff, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #ede5ff, transparent)" }} />

          <div className="flex gap-4 sm:gap-6 animate-infinite-scroll hover:[animation-play-state:paused]">
            {tripled.map((tool, i) => (
              <ToolCard key={`${tool.name}-${i}`} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
