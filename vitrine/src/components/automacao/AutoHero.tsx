"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Bot } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/utils";

/* ─── Typing dots animation ──────────────────────────────── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-zinc-400"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Double-check (read) icon ───────────────────────────── */
function DoubleCheck({ color = "#34B7F1" }: { color?: string }) {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
      <path d="M1.5 5.5L4.5 8.5L11 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 5.5L8.5 8.5L15 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Chat bubble phases: idle → typing → visible ────────── */
type Phase = "idle" | "typing" | "visible";

function ChatBubble({
  children,
  time,
  autoDelay,
  typingDuration = 1200,
  position,
  isBot = false,
}: {
  children: React.ReactNode;
  time: string;
  autoDelay: number;
  typingDuration?: number;
  position: string;
  isBot?: boolean;
}) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [showChecks, setShowChecks] = useState(false);

  const startAnimation = useCallback(() => {
    if (phase !== "idle") return;
    setPhase("typing");
    setTimeout(() => {
      setPhase("visible");
      setTimeout(() => setShowChecks(true), 400);
    }, typingDuration);
  }, [phase, typingDuration]);

  // Auto-play on page load with delay
  useEffect(() => {
    const timer = setTimeout(startAnimation, autoDelay);
    return () => clearTimeout(timer);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Hover restarts from idle
  const handleHover = () => {
    if (phase === "visible") {
      setShowChecks(false);
      setPhase("idle");
      // Small delay then re-trigger
      setTimeout(() => {
        setPhase("typing");
        setTimeout(() => {
          setPhase("visible");
          setTimeout(() => setShowChecks(true), 400);
        }, typingDuration);
      }, 100);
    } else if (phase === "idle") {
      startAnimation();
    }
  };

  return (
    <div
      className={`absolute hidden lg:block cursor-default ${position}`}
      onMouseEnter={handleHover}
    >
      <AnimatePresence mode="wait">
        {/* Phase: idle — small dot hint */}
        {phase === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-2xl backdrop-blur-lg border shadow-lg ${
              isBot
                ? "bg-white/70 border-white/60 shadow-purple-200/20"
                : "bg-emerald-50/80 border-emerald-100/60 shadow-emerald-200/20"
            }`}>
              <div className={`w-2 h-2 rounded-full ${isBot ? "bg-purple-400" : "bg-emerald-400"}`} />
              <span className="text-[10px] text-zinc-400 font-medium">nova mensagem</span>
            </div>
          </motion.div>
        )}

        {/* Phase: typing */}
        {phase === "typing" && (
          <motion.div
            key="typing"
            initial={{ opacity: 0, scale: 0.8, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div className={`inline-flex rounded-2xl backdrop-blur-lg border shadow-lg ${
              isBot
                ? "bg-white/80 border-white/60 shadow-purple-200/20"
                : "bg-emerald-50/90 border-emerald-100/60 shadow-emerald-200/20"
            }`}>
              <TypingDots />
            </div>
          </motion.div>
        )}

        {/* Phase: visible — full message */}
        {phase === "visible" && (
          <motion.div
            key="visible"
            initial={{ opacity: 0, scale: 0.85, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div
              className={`relative px-3.5 py-2.5 rounded-2xl backdrop-blur-lg border shadow-lg ${
                isBot
                  ? "bg-white/80 border-white/60 shadow-purple-200/20"
                  : "bg-emerald-50/90 border-emerald-100/60 shadow-emerald-200/20"
              }`}
            >
              {/* WhatsApp tail */}
              <div
                className={`absolute top-3 w-2 h-2 rotate-45 ${
                  isBot
                    ? "-left-1 bg-white/80 border-l border-b border-white/60"
                    : "-right-1 bg-emerald-50/90 border-r border-t border-emerald-100/60"
                }`}
              />

              <div className="relative">{children}</div>

              {/* Time + checks */}
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className="text-[10px] text-zinc-400">{time}</span>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={showChecks ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <DoubleCheck color={isBot ? "#a1a1aa" : "#34B7F1"} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Hero Section ───────────────────────────────────────── */
export default function AutoHero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #fdf4ff 0%, #f0e4ff 30%, #e8d5f5 60%, #f5e6ff 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, #ec4899 0%, #a855f7 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 left-[5%] w-[300px] h-[300px] rounded-full opacity-20 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, #f97316 0%, #ec4899 60%, transparent 70%)",
        }}
      />

      {/* Chat bubble: Bot notification (top-right) */}
      <ChatBubble
        autoDelay={800}
        typingDuration={1000}
        time="14:32"
        position="top-32 right-[7%]"
        isBot
      >
        <div className="flex items-center gap-2 mb-0.5">
          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
            <WhatsAppIcon size={11} className="text-emerald-600" />
          </div>
          <span className="text-[11px] font-semibold text-zinc-700">Bot Keymatic</span>
        </div>
        <p className="text-[12px] text-zinc-600 leading-snug">
          <span className="text-emerald-600 font-semibold">247</span> mensagens respondidas hoje
        </p>
      </ChatBubble>

      {/* Chat bubble: Client message (left) */}
      <ChatBubble
        autoDelay={2200}
        typingDuration={1400}
        time="14:33"
        position="top-52 left-[4%]"
      >
        <p className="text-[12px] text-zinc-700 leading-snug max-w-[180px]">
          Oi, preciso de um orçamento para loja virtual
        </p>
      </ChatBubble>

      {/* Chat bubble: Bot auto-reply (bottom-left) */}
      <ChatBubble
        autoDelay={4500}
        typingDuration={1200}
        time="14:33"
        position="top-[280px] left-[4%]"
        isBot
      >
        <p className="text-[12px] text-zinc-700 leading-snug max-w-[200px]">
          Olá! Que bom ter você aqui. Vou te encaminhar para um especialista agora mesmo.
        </p>
      </ChatBubble>

      {/* Chat bubble: Response time (bottom-right) */}
      <ChatBubble
        autoDelay={3200}
        typingDuration={800}
        time="14:32"
        position="bottom-44 right-[12%]"
        isBot
      >
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
            <Check size={11} className="text-purple-600" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-500 leading-none">Tempo de resposta</p>
            <p className="text-sm font-bold text-zinc-800 leading-tight">&lt; 3 segundos</p>
          </div>
        </div>
      </ChatBubble>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Animated icons */}
          <div className="flex items-center justify-center gap-5 mb-8">
            {/* WhatsApp icon — pulse */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-emerald-300/30">
                <WhatsAppIcon size={24} className="text-white" />
              </div>
              {/* Pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#25D366]"
                animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
            </motion.div>

            {/* Connection line with dots */}
            <div className="flex items-center gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-purple-300"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.25 }}
                />
              ))}
            </div>

            {/* Bot icon — floating */}
            <motion.div
              animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-300/30">
                <Bot size={24} className="text-white" />
              </div>
              {/* Status dot */}
              <motion.div
                className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-zinc-900 mb-6 leading-[1.1]">
            Seu negócio no{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
              piloto automático
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto mb-10">
            WhatsApp respondendo sozinho, processos que rodam sem você e sistemas
            que conversam entre si. Automação feita para quem não tem tempo a
            perder.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppUrl(
                "Olá! Vim pela página de automação e quero saber como automatizar meu negócio."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-pink-500/20"
            >
              <WhatsAppIcon size={18} />
              Quero automatizar
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
