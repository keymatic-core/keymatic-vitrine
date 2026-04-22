"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Bot,
  Brain,
  ArrowLeft,
  Send,
  CheckCircle2,
} from "lucide-react";
import { getWhatsAppUrl } from "../lib/utils";

const CHALLENGES = [
  {
    id: "ecommerce",
    icon: ShoppingCart,
    label: "Preciso vender mais online",
    whatsappContext: "E-commerce de Elite",
  },
  {
    id: "automacao",
    icon: Bot,
    label: "Quero automatizar processos",
    whatsappContext: "Automação Inteligente",
  },
  {
    id: "ia",
    icon: Brain,
    label: "Quero implementar IA na empresa",
    whatsappContext: "Consultoria em IA",
  },
];

const SIZES = [
  { id: "iniciante", label: "Até R$ 5k/mês (MEI / autônomo)" },
  { id: "micro", label: "R$ 5k — R$ 30k/mês" },
  { id: "pequena", label: "R$ 30k — R$ 100k/mês" },
  { id: "media", label: "R$ 100k — R$ 500k/mês" },
  { id: "grande", label: "Acima de R$ 500k/mês" },
];

type FormData = {
  challenge: string;
  size: string;
  name: string;
  whatsapp: string;
};

export default function InteractiveTriage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    challenge: "",
    size: "",
    name: "",
    whatsapp: "",
  });

  const selectedChallenge = CHALLENGES.find((c) => c.id === form.challenge);

  function handleSubmit() {
    if (!form.name || !form.whatsapp) return;
    setSubmitted(true);

    const message = `Olá! Sou ${form.name}. Fiz o diagnóstico no site e meu interesse é: ${selectedChallenge?.whatsappContext}. Faturamento: ${SIZES.find((s) => s.id === form.size)?.label}. Meu WhatsApp: ${form.whatsapp}`;

    setTimeout(() => {
      window.open(getWhatsAppUrl(message), "_blank");
    }, 1500);
  }

  return (
    <section id="contato" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-zinc-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-purple/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[13px] font-medium text-zinc-500 uppercase tracking-wider mb-4">
            Diagnóstico
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-white mb-5">
            Qual é o seu maior{" "}
            <span className="gradient-brand-text">desafio</span>?
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Responda 3 perguntas e receba um atendimento personalizado.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex-1 h-1 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  className="h-full gradient-brand rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: step >= s ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-dark p-8 text-center"
              >
                <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Diagnóstico enviado!</h3>
                <p className="text-sm text-zinc-400">
                  Você será redirecionado ao WhatsApp para falar com um especialista.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="card-dark p-6 lg:p-8"
              >
                {step === 1 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Qual é o seu maior desafio hoje?
                    </h3>
                    <p className="text-[13px] text-zinc-500 mb-6">Escolha a opção mais próxima da sua realidade.</p>
                    <div className="space-y-2.5">
                      {CHALLENGES.map((c) => {
                        const Icon = c.icon;
                        return (
                          <button
                            key={c.id}
                            onClick={() => {
                              setForm({ ...form, challenge: c.id });
                              setStep(2);
                            }}
                            className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                              form.challenge === c.id
                                ? "border-brand-orange/40 bg-brand-orange/5"
                                : "border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02]"
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                              form.challenge === c.id ? "bg-brand-orange/10" : "bg-white/[0.04]"
                            }`}>
                              <Icon size={20} className="text-zinc-300" />
                            </div>
                            <span className="text-sm font-medium text-zinc-200">{c.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Qual o tamanho da sua operação?
                    </h3>
                    <p className="text-[13px] text-zinc-500 mb-6">Isso nos ajuda a personalizar a proposta.</p>
                    <div className="space-y-2.5">
                      {SIZES.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => {
                            setForm({ ...form, size: s.id });
                            setStep(3);
                          }}
                          className={`w-full p-4 rounded-xl border transition-all duration-200 text-left text-sm font-medium ${
                            form.size === s.id
                              ? "border-brand-orange/40 bg-brand-orange/5 text-white"
                              : "border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02] text-zinc-300"
                          }`}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setStep(1)}
                      className="mt-5 flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      <ArrowLeft size={16} /> Voltar
                    </button>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Como podemos te encontrar?
                    </h3>
                    <p className="text-[13px] text-zinc-500 mb-6">Seus dados estão protegidos pela LGPD.</p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm text-zinc-300 mb-1.5 font-medium">Seu nome</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Como prefere ser chamado?"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] focus:border-brand-orange/40 focus:ring-2 focus:ring-brand-orange/10 text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-zinc-300 mb-1.5 font-medium">WhatsApp</label>
                        <input
                          type="tel"
                          value={form.whatsapp}
                          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                          placeholder="(00) 00000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] focus:border-brand-orange/40 focus:ring-2 focus:ring-brand-orange/10 text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                        />
                      </div>
                      <button
                        onClick={handleSubmit}
                        disabled={!form.name || !form.whatsapp}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white disabled:opacity-40 text-zinc-900 font-medium text-sm transition-colors duration-150"
                      >
                        <Send size={15} />
                        Enviar e falar com especialista
                      </button>
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      className="mt-5 flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      <ArrowLeft size={16} /> Voltar
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
