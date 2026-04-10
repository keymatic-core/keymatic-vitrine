"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowLeft,
  ArrowRight,
  Send,
  Gift,
  Sparkles,
  PartyPopper,
  Download,
} from "lucide-react";
import {
  QUIZ_STEPS,
  QUIZ_BANNER_KEY,
  getQuizProfile,
  type QuizAnswers,
  type QuizContactData,
  type DeliveryPreference,
} from "../lib/quiz-data";
import { getWhatsAppUrl } from "../lib/utils";

type QuizModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Screen = "intro" | "questions" | "contact" | "result";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [screen, setScreen] = useState<Screen>("intro");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [contact, setContact] = useState<QuizContactData>({
    name: "",
    whatsapp: "",
    email: "",
    delivery: "whatsapp",
  });
  const [submitting, setSubmitting] = useState(false);
  const [saveError, setSaveError] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const profile = getQuizProfile(answers);
  const totalSteps = QUIZ_STEPS.length;

  const handleReset = useCallback(() => {
    setScreen("intro");
    setCurrentStep(0);
    setAnswers({});
    setContact({ name: "", whatsapp: "", email: "", delivery: "whatsapp" });
    setSubmitting(false);
    setSaveError(false);
    setEmailError(null);
  }, []);

  function handleClose() {
    onClose();
    setTimeout(handleReset, 300);
  }

  function handleAnswer(stepId: string, optionId: string) {
    setAnswers((prev) => ({ ...prev, [stepId]: optionId }));
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setScreen("contact");
    }
  }

  function handleBack() {
    if (screen === "contact") {
      setScreen("questions");
      return;
    }
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      setScreen("intro");
    }
  }

  async function handleSubmit() {
    if (!contact.name || !contact.whatsapp) return;
    setSubmitting(true);
    setEmailError(null);

    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers,
          contact,
          consent: localStorage.getItem("keymatic-cookie-consent") === "accepted",
        }),
      });

      if (!res.ok) {
        // If it's an email validation error, show inline and block submission
        if (res.status === 400) {
          const data = await res.json().catch(() => ({}));
          if (data?.reason && ["format", "disposable", "mx"].includes(data.reason)) {
            setEmailError(data.error || "E-mail inválido");
            setSubmitting(false);
            return;
          }
        }
        console.warn("[Quiz] Falha ao salvar lead — status:", res.status);
        setSaveError(true);
      }
    } catch (err) {
      console.warn("[Quiz] Falha ao salvar lead:", err);
      setSaveError(true);
    }

    localStorage.setItem(QUIZ_BANNER_KEY, "completed");
    setScreen("result");
    setSubmitting(false);
  }

  function handleWhatsApp() {
    window.open(getWhatsAppUrl(profile.whatsappMessage), "_blank");
  }

  const progress = screen === "questions"
    ? ((currentStep + 1) / totalSteps) * 100
    : screen === "contact"
      ? 100
      : 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-zinc-900 border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.06] transition-all"
            >
              <X size={18} />
            </button>

            {/* Progress bar */}
            {(screen === "questions" || screen === "contact") && (
              <div className="h-1 bg-white/[0.04]">
                <motion.div
                  className="h-full gradient-brand rounded-r"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            )}

            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {/* ═══ INTRO SCREEN ═══ */}
                {screen === "intro" && (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl gradient-brand-subtle flex items-center justify-center mx-auto mb-5">
                      <PartyPopper size={28} className="text-brand-orange" />
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-[11px] font-semibold text-brand-orange uppercase tracking-wider mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      20 anos de VTS
                    </div>

                    <h3 className="text-2xl font-semibold text-white mb-3 tracking-[-0.02em]">
                      Quiz: Tecnologia e{" "}
                      <span className="gradient-brand-text">Negócios 2026</span>
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-2">
                      Em comemoração aos 20 anos da VTS Informática e o
                      nascimento da Keymatic, preparamos um quiz especial.
                    </p>
                    <p className="text-zinc-500 text-[13px] mb-6">
                      Responda 5 perguntas rápidas, descubra seu perfil digital
                      e ganhe um <strong className="text-zinc-300">e-book exclusivo</strong> de presente.
                    </p>

                    <div className="flex items-center justify-center gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[13px] font-bold uppercase tracking-wide">
                        <Gift size={14} />
                        E-book Grátis!
                      </span>
                      <span className="text-zinc-600 text-[12px]">~1 minuto</span>
                    </div>

                    <button
                      onClick={() => setScreen("questions")}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 font-medium text-sm transition-colors duration-150"
                    >
                      Começar Quiz
                      <ArrowRight size={15} />
                    </button>
                  </motion.div>
                )}

                {/* ═══ QUESTIONS SCREEN ═══ */}
                {screen === "questions" && (
                  <motion.div
                    key={`q-${currentStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <span className="text-[11px] font-mono font-bold text-brand-orange uppercase tracking-wider">
                        Pergunta {currentStep + 1}/{totalSteps}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold gradient-brand-text mb-1.5">
                      {QUIZ_STEPS[currentStep].question}
                    </h3>
                    {QUIZ_STEPS[currentStep].subtitle && (
                      <p className="text-[13px] text-zinc-500 mb-6">
                        {QUIZ_STEPS[currentStep].subtitle}
                      </p>
                    )}

                    <div className="space-y-2.5">
                      {QUIZ_STEPS[currentStep].options.map((option) => {
                        const isSelected =
                          answers[QUIZ_STEPS[currentStep].id] === option.id;
                        return (
                          <button
                            key={option.id}
                            onClick={() =>
                              handleAnswer(QUIZ_STEPS[currentStep].id, option.id)
                            }
                            className={`w-full flex items-center gap-3.5 p-4 rounded-xl border transition-all duration-200 text-left ${
                              isSelected
                                ? "border-brand-orange/40 bg-brand-orange/5"
                                : "border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02]"
                            }`}
                          >
                            <span className="text-lg shrink-0">{option.emoji}</span>
                            <span className="text-sm font-medium text-zinc-200">
                              {option.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={handleBack}
                      className="mt-5 flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      <ArrowLeft size={16} /> Voltar
                    </button>
                  </motion.div>
                )}

                {/* ═══ CONTACT SCREEN ═══ */}
                {screen === "contact" && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="w-12 h-12 rounded-xl gradient-brand-subtle flex items-center justify-center mb-5">
                      <Gift size={22} className="text-brand-purple" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-1.5">
                      Quase lá! Onde enviamos seu resultado?
                    </h3>
                    <p className="text-[13px] text-zinc-500 mb-6">
                      Seus dados estão protegidos pela LGPD. Prometemos: zero spam.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-zinc-300 mb-1.5 font-medium">
                          Seu nome
                        </label>
                        <input
                          type="text"
                          value={contact.name}
                          onChange={(e) =>
                            setContact({ ...contact, name: e.target.value })
                          }
                          placeholder="Como prefere ser chamado?"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] focus:border-brand-orange/40 focus:ring-2 focus:ring-brand-orange/10 text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-zinc-300 mb-1.5 font-medium">
                          WhatsApp
                        </label>
                        <input
                          type="tel"
                          value={contact.whatsapp}
                          onChange={(e) =>
                            setContact({ ...contact, whatsapp: formatPhone(e.target.value) })
                          }
                          placeholder="(11) 98765-4321"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] focus:border-brand-orange/40 focus:ring-2 focus:ring-brand-orange/10 text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-zinc-300 mb-1.5 font-medium">
                          E-mail
                        </label>
                        <input
                          type="email"
                          value={contact.email}
                          onChange={(e) => {
                            setContact({ ...contact, email: e.target.value });
                            if (emailError) setEmailError(null);
                          }}
                          placeholder="seu@email.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder:text-zinc-600 outline-none transition-all ${
                            emailError
                              ? "border-red-500/40 focus:border-red-500/60 focus:ring-2 focus:ring-red-500/10"
                              : "border-white/[0.06] focus:border-brand-orange/40 focus:ring-2 focus:ring-brand-orange/10"
                          }`}
                        />
                        {emailError && (
                          <p className="mt-1.5 text-[12px] text-red-400 leading-relaxed">
                            {emailError}
                          </p>
                        )}
                      </div>

                      <button
                        onClick={handleSubmit}
                        disabled={!contact.name || !contact.whatsapp || submitting}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white disabled:opacity-40 text-zinc-900 font-medium text-sm transition-colors duration-150"
                      >
                        <Send size={15} />
                        {submitting ? "Enviando..." : "Ver meu resultado"}
                      </button>
                    </div>

                    <button
                      onClick={handleBack}
                      className="mt-5 flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      <ArrowLeft size={16} /> Voltar
                    </button>
                  </motion.div>
                )}

                {/* ═══ RESULT SCREEN ═══ */}
                {screen === "result" && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                      style={{ background: `${profile.color}15` }}
                    >
                      <Sparkles size={28} style={{ color: profile.color }} />
                    </div>

                    <div
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-semibold uppercase tracking-wider mb-3"
                      style={{
                        background: `${profile.color}10`,
                        color: profile.color,
                        border: `1px solid ${profile.color}30`,
                      }}
                    >
                      <span>{profile.emoji}</span>
                      {profile.title}
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">
                      {contact.name}, seu perfil é:{" "}
                      <span style={{ color: profile.color }}>
                        {profile.title}
                      </span>
                    </h3>

                    <p className="text-zinc-200 text-sm leading-relaxed mb-4">
                      {profile.description}
                    </p>

                    <div
                      className="mb-6 px-4 py-3 rounded-xl text-[13px] font-medium leading-relaxed text-left"
                      style={{
                        background: `${profile.color}10`,
                        border: `1px solid ${profile.color}25`,
                        color: profile.color,
                      }}
                    >
                      💡 {profile.recommendation}
                    </div>

                    {saveError && (
                      <div className="mb-4 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[13px] text-left leading-relaxed">
                        Seu resultado está aqui, mas houve uma instabilidade ao registrar seus dados.
                        Fale conosco pelo WhatsApp para garantir seu e-book!
                      </div>
                    )}

                    <div className="space-y-3">
                      <button
                        onClick={handleWhatsApp}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${profile.color}, ${profile.color}cc)`,
                          boxShadow: `0 8px 24px ${profile.color}30`,
                        }}
                      >
                        {profile.ctaLabel}
                        <ArrowRight size={14} />
                      </button>

                      <a
                        href="/downloads/guia-tecnologia-negocios-2026.pdf"
                        download="Guia-IA-Keymatic-2026.pdf"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/15 text-emerald-400 text-sm font-medium transition-colors"
                      >
                        <Download size={15} />
                        Baixar E-book Grátis
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
