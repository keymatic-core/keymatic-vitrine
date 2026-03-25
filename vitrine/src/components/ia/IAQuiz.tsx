"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw, Sparkles, ChevronRight } from "lucide-react";
import { getWhatsAppUrl } from "../../lib/utils";

const QUESTIONS = [
  {
    question: "Sua equipe gasta mais de 2h/dia em tarefas repetitivas?",
    options: [
      { label: "Sim, com certeza", score: 3 },
      { label: "Talvez, não sei ao certo", score: 2 },
      { label: "Não, somos eficientes", score: 1 },
    ],
  },
  {
    question: "Vocês já usam alguma ferramenta de IA?",
    options: [
      { label: "Não usamos nada", score: 3 },
      { label: "Básico (ChatGPT casual)", score: 2 },
      { label: "Sim, já usamos no dia a dia", score: 1 },
    ],
  },
  {
    question: "Quantas pessoas tem na equipe?",
    options: [
      { label: "Só eu (autônomo)", score: 2 },
      { label: "2 a 10 pessoas", score: 3 },
      { label: "Mais de 10", score: 3 },
    ],
  },
  {
    question: "Qual seu maior desafio hoje?",
    options: [
      { label: "Falta de tempo", score: 3 },
      { label: "Equipe resistente a tecnologia", score: 2 },
      { label: "Não sei onde IA pode ajudar", score: 3 },
    ],
  },
];

type Result = {
  title: string;
  description: string;
  recommendation: string;
  whatsappMessage: string;
  color: string;
};

function getResult(score: number): Result {
  if (score >= 10) {
    return {
      title: "Potencial Máximo",
      description: "Sua empresa tem muito a ganhar com IA. Cada dia sem automação é dinheiro e tempo perdido.",
      recommendation: "Recomendamos começar com um Workshop Presencial + Implantação Hands-on.",
      whatsappMessage: "Olá! Fiz o quiz de IA no site e meu resultado foi 'Potencial Máximo'. Quero agendar um diagnóstico!",
      color: "#a855f7",
    };
  }
  if (score >= 7) {
    return {
      title: "Boa Oportunidade",
      description: "Você já tem uma base, mas IA pode multiplicar seus resultados significativamente.",
      recommendation: "Recomendamos um Treinamento de Ferramentas para sua equipe.",
      whatsappMessage: "Olá! Fiz o quiz de IA no site e meu resultado foi 'Boa Oportunidade'. Quero saber mais sobre treinamentos!",
      color: "#8b5cf6",
    };
  }
  return {
    title: "Início Inteligente",
    description: "Você está num bom caminho. IA pode otimizar pontos específicos da sua operação.",
    recommendation: "Recomendamos uma Consultoria Estratégica para identificar as melhores oportunidades.",
    whatsappMessage: "Olá! Fiz o quiz de IA no site e meu resultado foi 'Início Inteligente'. Quero uma consultoria estratégica!",
    color: "#7c3aed",
  };
}

export default function IAQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const totalScore = answers.reduce((acc, s) => acc + s, 0);
  const result = getResult(totalScore);
  const progress = ((currentQuestion) / QUESTIONS.length) * 100;

  function handleAnswer(score: number) {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  }

  function handleReset() {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  }

  return (
    <section
      id="quiz-ia"
      className="section-padding relative"
      style={{ background: "linear-gradient(180deg, #ede5ff 0%, #f5f0ff 30%, #18181b 100%)" }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-[13px] text-purple-500 font-medium uppercase tracking-wider mb-4">
            Quiz Interativo
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-zinc-900 mb-4">
            Sua empresa está <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">pronta</span> para IA?
          </h2>
          <p className="text-zinc-500 text-lg">
            Responda 4 perguntas rápidas e descubra.
          </p>
        </motion.div>

        {/* Quiz card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden"
        >
          {/* Progress bar */}
          {!showResult && (
            <div className="h-1 bg-zinc-100">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-400 to-violet-500 rounded-r"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          )}

          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {!showResult ? (
                <motion.div
                  key={`q-${currentQuestion}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Question counter */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[11px] font-mono font-bold text-purple-500 uppercase tracking-wider">
                      Pergunta {currentQuestion + 1}/{QUESTIONS.length}
                    </span>
                  </div>

                  {/* Question */}
                  <h3 className="text-xl font-semibold text-zinc-900 mb-6">
                    {QUESTIONS[currentQuestion].question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3">
                    {QUESTIONS[currentQuestion].options.map((option) => (
                      <button
                        key={option.label}
                        onClick={() => handleAnswer(option.score)}
                        className="group w-full flex items-center justify-between p-4 rounded-xl border border-zinc-200 hover:border-purple-300 hover:bg-purple-50/50 transition-all text-left"
                      >
                        <span className="text-[14px] text-zinc-700 group-hover:text-zinc-900 transition-colors">
                          {option.label}
                        </span>
                        <ChevronRight size={16} className="text-zinc-300 group-hover:text-purple-400 transition-colors" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center"
                >
                  {/* Result icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: `${result.color}15` }}
                  >
                    <Sparkles size={28} style={{ color: result.color }} />
                  </div>

                  {/* Score badge */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-semibold uppercase tracking-wider mb-4"
                    style={{ background: `${result.color}10`, color: result.color, border: `1px solid ${result.color}30` }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: result.color }} />
                    {result.title}
                  </div>

                  <p className="text-zinc-600 leading-relaxed mb-3">
                    {result.description}
                  </p>
                  <p className="text-[13px] text-zinc-500 mb-8">
                    {result.recommendation}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(result.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-violet-600 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
                    >
                      Agendar Diagnóstico
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-zinc-500 hover:text-zinc-700 border border-zinc-200 hover:border-zinc-300 transition-all"
                    >
                      <RotateCcw size={14} />
                      Refazer Quiz
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
