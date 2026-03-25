"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Clock, Users, ShieldCheck, Zap, Mic, Paperclip, Send, Phone, Video, MoreVertical, ChevronLeft } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

/* ─── Chat simulation messages ───────────────────────────── */
const CHAT_MESSAGES = [
  { from: "client", text: "Oi, vocês estão abertos?", time: "23:47" },
  { from: "bot", text: "Olá! Estamos atendendo 24h por aqui. Como posso ajudar? 😊", time: "23:47" },
  { from: "client", text: "Preciso de um orçamento para automação", time: "23:48" },
  { from: "bot", text: "Claro! Vou te fazer 3 perguntas rápidas para direcionar ao especialista certo. Qual é o seu segmento?", time: "23:48" },
  { from: "client", text: "Loja de roupas", time: "23:48" },
  { from: "bot", text: "Perfeito! Já encaminhei seus dados. Um especialista vai te chamar em até 2 minutos. 🚀", time: "23:48" },
];

/* ─── Typing indicator ───────────────────────────────────── */
function TypingDots() {
  return (
    <div className="flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-zinc-400"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

/* ─── Bot mascot SVG ─────────────────────────────────────── */
function BotMascot() {
  return (
    <motion.div
      className="absolute -left-12 bottom-16 hidden xl:block"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="relative">
        {/* Body */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20"
        >
          {/* Head */}
          <div className="relative w-16 h-14 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-300/30 flex items-center justify-center">
            {/* Eyes */}
            <div className="flex gap-2.5">
              <motion.div
                className="w-3 h-3 rounded-full bg-white"
                animate={{ scaleY: [1, 0.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-white"
                animate={{ scaleY: [1, 0.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </div>
            {/* Antenna */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <div className="w-0.5 h-3 bg-purple-400 mx-auto" />
              <motion.div
                className="w-2.5 h-2.5 rounded-full bg-pink-400 -mt-0.5 mx-auto"
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            {/* Ears/headphones */}
            <div className="absolute -left-1.5 top-3 w-3 h-5 rounded-full bg-purple-600" />
            <div className="absolute -right-1.5 top-3 w-3 h-5 rounded-full bg-purple-600" />
          </div>
          {/* Arms */}
          <div className="flex justify-between px-1 -mt-1">
            <motion.div
              className="w-3 h-6 rounded-full bg-gradient-to-b from-purple-400 to-pink-400"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="w-3 h-6 rounded-full bg-gradient-to-b from-purple-400 to-pink-400"
              animate={{ rotate: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Speech bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, type: "spring" }}
          className="absolute -top-8 -right-14 bg-white rounded-lg px-2 py-1 shadow-md text-[9px] text-zinc-600 font-medium whitespace-nowrap"
        >
          24h online! 🤖
          <div className="absolute bottom-0 left-3 -mb-1 w-2 h-2 bg-white rotate-45" />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Phone mockup with live chat ────────────────────────── */
function PhoneMockup() {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const animatingRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const clearAll = () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(fn, ms);
      timeoutsRef.current.push(id);
    };

    const runChat = () => {
      if (animatingRef.current) return;
      animatingRef.current = true;
      setVisibleMessages(0);
      setIsTyping(false);

      let current = 0;
      const showNext = () => {
        if (current >= CHAT_MESSAGES.length) {
          animatingRef.current = false;
          // Messages stay visible (visibleMessages = CHAT_MESSAGES.length)
          return;
        }

        setIsTyping(true);
        const typingTime = CHAT_MESSAGES[current].from === "bot" ? 1200 : 800;

        schedule(() => {
          setIsTyping(false);
          current++;
          setVisibleMessages(current);
          schedule(showNext, 600);
        }, typingTime);
      };

      schedule(showNext, 500);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          schedule(runChat, 400);
        } else {
          // Left view — reset so it replays next time
          clearAll();
          animatingRef.current = false;
          setVisibleMessages(0);
          setIsTyping(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearAll();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mx-auto w-[280px] sm:w-[300px]">
      {/* Colorful blob behind phone */}
      <div className="absolute -inset-12 -z-10">
        <div
          className="absolute inset-0 rounded-full blur-[50px] opacity-50"
          style={{
            background: "conic-gradient(from 180deg, #ec4899, #a855f7, #6366f1, #a855f7, #ec4899)",
          }}
        />
      </div>

      {/* Bot mascot */}
      <BotMascot />

      {/* WhatsApp verified badge — floating */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        className="absolute -top-3 -right-3 z-30"
      >
        <div className="w-12 h-12 rounded-full bg-white shadow-lg shadow-emerald-200/40 flex items-center justify-center">
          <div className="relative">
            <WhatsAppIcon size={22} className="text-[#25D366]" />
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Phone frame */}
      <div className="relative rounded-[2.2rem] border-[3px] border-zinc-800 bg-zinc-900 p-1.5 shadow-2xl shadow-purple-900/20">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-zinc-800 rounded-b-2xl z-20" />

        {/* Screen */}
        <div className="rounded-[1.8rem] overflow-hidden bg-[#efeae2]">
          {/* WhatsApp header */}
          <div className="bg-[#075E54] px-3 pt-8 pb-2.5 flex items-center gap-2">
            <ChevronLeft size={18} className="text-white/70" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-inner">
              <Bot size={15} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white text-[12px] font-semibold leading-tight">Bot Keymatic</p>
              <p className="text-emerald-200 text-[10px]">
                {isTyping ? "digitando..." : "online"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Video size={15} className="text-white/60" />
              <Phone size={14} className="text-white/60" />
              <MoreVertical size={15} className="text-white/60" />
            </div>
          </div>

          {/* Chat area */}
          <div
            className="h-[310px] sm:h-[340px] px-2.5 py-3 overflow-hidden flex flex-col justify-end gap-1"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          >
            {/* Encryption notice */}
            <div className="text-center mb-2">
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#fdf8c8] text-[8px] text-zinc-500 leading-tight">
                🔒 As mensagens são protegidas com criptografia
              </span>
            </div>

            <AnimatePresence>
              {CHAT_MESSAGES.slice(0, visibleMessages).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${msg.from === "client" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`relative max-w-[82%] px-2 py-1.5 rounded-lg text-[10.5px] leading-relaxed shadow-sm ${
                      msg.from === "client"
                        ? "bg-[#DCF8C6] text-zinc-800 rounded-tr-none"
                        : "bg-white text-zinc-800 rounded-tl-none"
                    }`}
                  >
                    {msg.from === "bot" && (
                      <p className="text-[9px] font-semibold text-purple-500 mb-0.5">Bot Keymatic</p>
                    )}
                    {msg.text}
                    <div className="flex items-center justify-end gap-0.5 mt-0.5">
                      <span className="text-[8px] text-zinc-400">{msg.time}</span>
                      {msg.from === "client" && (
                        <svg width="12" height="7" viewBox="0 0 16 10" fill="none">
                          <path d="M1.5 5.5L4.5 8.5L11 2" stroke="#53bdeb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M5.5 5.5L8.5 8.5L15 2" stroke="#53bdeb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`flex ${
                    visibleMessages < CHAT_MESSAGES.length &&
                    CHAT_MESSAGES[visibleMessages]?.from === "client"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg shadow-sm ${
                      visibleMessages < CHAT_MESSAGES.length &&
                      CHAT_MESSAGES[visibleMessages]?.from === "client"
                        ? "bg-[#DCF8C6] rounded-tr-none"
                        : "bg-white rounded-tl-none"
                    }`}
                  >
                    <TypingDots />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input bar */}
          <div className="bg-[#f0f0f0] px-2 py-1.5 flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
            </div>
            <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center gap-2">
              <span className="text-[11px] text-zinc-400 flex-1">Mensagem</span>
              <Paperclip size={13} className="text-zinc-400" />
            </div>
            <div className="w-7 h-7 rounded-full bg-[#075E54] flex items-center justify-center">
              <Mic size={13} className="text-white" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

/* ─── Benefits list ──────────────────────────────────────── */
const BENEFITS = [
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description:
      "Seu bot responde a qualquer hora — feriado, madrugada, final de semana.",
  },
  {
    icon: Zap,
    title: "Resposta em segundos",
    description:
      "Ninguém espera. O lead recebe atenção imediata antes de ir para o concorrente.",
  },
  {
    icon: Users,
    title: "Qualificação automática",
    description:
      "O bot faz as perguntas certas e direciona para o vendedor certo, com contexto.",
  },
  {
    icon: ShieldCheck,
    title: "Nenhum lead perdido",
    description:
      "Toda conversa registrada, todo follow-up agendado. Zero esquecimento.",
  },
];

/* ─── Main Section ───────────────────────────────────────── */
export default function AutoBot() {
  return (
    <section
      id="bot-auto"
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, white 0%, #fdf4ff 40%, #f5e6ff 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[13px] text-pink-500 font-medium uppercase tracking-wider mb-4">
            Chatbot Inteligente
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-zinc-900 mb-4">
            Seu melhor vendedor nunca dorme
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Um assistente virtual no seu WhatsApp que responde, qualifica e
            encaminha leads automaticamente — como se fosse alguém da sua equipe,
            mas disponível 24 horas.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <PhoneMockup />
          </motion.div>

          {/* Right: Benefits */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-2">
                Como o bot ajuda seu negócio?
              </h3>
              <p className="text-[14px] text-zinc-500 leading-relaxed">
                Imagine nunca mais perder um cliente por demora no atendimento. O
                chatbot faz o primeiro contato, entende o que a pessoa precisa e
                só passa para você quando o lead já está qualificado.
              </p>
            </motion.div>

            {BENEFITS.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-pink-100/60 bg-white/60 backdrop-blur-sm hover:border-pink-200 hover:bg-white/80 transition-all"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center group-hover:border-pink-300 group-hover:shadow-[0_0_12px_rgba(236,72,153,0.12)] transition-all duration-300">
                    <Icon size={18} className="text-pink-500" />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-zinc-900 mb-0.5">
                      {benefit.title}
                    </h4>
                    <p className="text-[13px] text-zinc-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
