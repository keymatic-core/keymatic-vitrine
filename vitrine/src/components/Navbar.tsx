"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ShoppingCart, Bot, Brain, ChevronDown } from "lucide-react";
import { getWhatsAppUrl } from "../lib/utils";

const SIMPLE_LINKS = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Cases", href: "#cases" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

const SOLUTIONS_DROPDOWN = [
  {
    icon: ShoppingCart,
    title: "E-commerce de Elite",
    desc: "Lojas para grandes lançamentos e drops.",
    href: "#solucoes",
  },
  {
    icon: Bot,
    title: "Automação Inteligente",
    desc: "WhatsApp + Evolution API e processos automáticos.",
    href: "#solucoes",
  },
  {
    icon: Brain,
    title: "Consultoria em IA",
    desc: "IA para produtividade e treinamento de equipes.",
    href: "#solucoes",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverRect, setHoverRect] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterLink = useCallback((index: number) => {
    setHoveredIndex(index);
    const el = linkRefs.current[index];
    const nav = navRef.current;
    if (el && nav) {
      const navRect = nav.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setHoverRect({
        left: elRect.left - navRect.left,
        width: elRect.width,
      });
    }
  }, []);

  const handleMouseLeaveNav = useCallback(() => {
    setHoveredIndex(null);
    setHoverRect(null);
  }, []);

  const openDropdown = useCallback(() => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setShowSolutions(true);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => setShowSolutions(false), 150);
  }, []);

  const keepDropdown = useCallback(() => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
  }, []);

  // "Soluções" is index 0, then simple links start at index 1
  const allLabels = ["Soluções", ...SIMPLE_LINKS.map((l) => l.label)];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-zinc-950/50 backdrop-blur-xl border-b border-zinc-800/50"
            : "bg-transparent"
        }`}
      >
        {/* Progressive Glow Line — visible on scroll */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, #f97316 30%, #ec4899 50%, #a855f7 70%, transparent 100%)",
              }}
            />
          )}
        </AnimatePresence>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg gradient-brand flex items-center justify-center font-mono font-bold text-xs text-white">
                K
              </div>
              <span className="text-sm font-semibold tracking-tight text-zinc-50">
                Keymatic
              </span>
            </a>

            {/* Desktop Nav — Magnetic Menu */}
            <nav
              ref={navRef}
              className="hidden lg:flex items-center gap-0.5 relative"
              onMouseLeave={handleMouseLeaveNav}
            >
              {/* Floating highlight background */}
              <AnimatePresence>
                {hoverRect && hoveredIndex !== null && (
                  <motion.div
                    layoutId="nav-highlight"
                    className="absolute top-1/2 -translate-y-1/2 h-8 rounded-md bg-white/[0.08] border border-white/[0.06]"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      left: hoverRect.left,
                      width: hoverRect.width,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      opacity: { duration: 0.15 },
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Soluções (dropdown trigger) */}
              <div className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                <button
                  ref={(el) => { linkRefs.current[0] = el; }}
                  onMouseEnter={() => handleMouseEnterLink(0)}
                  className="relative z-10 flex items-center gap-1 px-3 py-1.5 text-[13px] text-zinc-400 hover:text-zinc-50 transition-colors duration-150 rounded-md"
                >
                  Soluções
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${showSolutions ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {showSolutions && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -4 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -4 }}
                      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={keepDropdown}
                      onMouseLeave={closeDropdown}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[360px] rounded-2xl bg-zinc-900/95 backdrop-blur-2xl border border-zinc-800/60 shadow-2xl shadow-black/40 p-2 overflow-hidden"
                    >
                      {SOLUTIONS_DROPDOWN.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.title}
                            href={item.href}
                            onClick={() => setShowSolutions(false)}
                            className="group flex items-start gap-3.5 px-3.5 py-3 rounded-xl hover:bg-white/[0.04] transition-colors duration-150"
                          >
                            <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-brand-orange/20 group-hover:shadow-[0_0_12px_rgba(249,115,22,0.08)] transition-all duration-200">
                              <Icon size={17} className="text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                            </div>
                            <div>
                              <span className="block text-[13px] font-semibold text-zinc-200 group-hover:text-white transition-colors">
                                {item.title}
                              </span>
                              <span className="block text-[12px] text-zinc-500 leading-relaxed mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Simple links */}
              {SIMPLE_LINKS.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  ref={(el) => { linkRefs.current[i + 1] = el; }}
                  onMouseEnter={() => handleMouseEnterLink(i + 1)}
                  className="relative z-10 px-3 py-1.5 text-[13px] text-zinc-400 hover:text-zinc-50 transition-colors duration-150 rounded-md"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-2">
              <a
                href={getWhatsAppUrl("Olá! Vim pelo site e gostaria de falar com um especialista.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-[13px] font-medium text-zinc-950 bg-zinc-50 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-200"
              >
                Falar com Especialista
                <ArrowRight size={13} />
              </a>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-1.5 text-zinc-400 hover:text-zinc-50 transition-colors"
                aria-label="Menu"
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-14 z-40 bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800/50 p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {/* Soluções section */}
              <div className="px-3 py-2 text-[11px] font-semibold text-zinc-600 uppercase tracking-wider">
                Soluções
              </div>
              {SOLUTIONS_DROPDOWN.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-colors"
                  >
                    <Icon size={16} className="text-zinc-500" />
                    <div>
                      <span className="block text-sm text-zinc-300 font-medium">{item.title}</span>
                      <span className="block text-[12px] text-zinc-600">{item.desc}</span>
                    </div>
                  </a>
                );
              })}

              <div className="h-px bg-white/[0.04] my-2" />

              {SIMPLE_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="px-3 py-2.5 text-sm text-zinc-300 hover:text-zinc-50 hover:bg-white/[0.04] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-2 pt-2 border-t border-white/[0.06]">
                <a
                  href={getWhatsAppUrl("Olá! Vim pelo site.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-zinc-950 bg-zinc-50"
                >
                  Falar com Especialista
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
