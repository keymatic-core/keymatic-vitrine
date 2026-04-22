"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Calculator, Clock, Users, ArrowRight, Zap } from "lucide-react";
import { getWhatsAppUrl } from "../lib/utils";

export default function AIConsulting() {
  const [employees, setEmployees] = useState(5);
  const [hoursPerDay, setHoursPerDay] = useState(3);

  const hoursSavedMonth = Math.round(employees * hoursPerDay * 22 * 0.7);
  const costSaved = hoursSavedMonth * 25;

  return (
    <section className="section-light section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-200 text-[13px] font-medium text-zinc-600 mb-6">
              <Zap size={13} className="text-brand-orange" />
              Porta de entrada
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] text-zinc-900 mb-6 leading-[1.1]">
              Descubra quanto{" "}
              <span className="gradient-brand-text">tempo</span>{" "}
              sua equipe pode economizar
            </h2>

            <p className="text-zinc-500 text-lg mb-10 leading-relaxed">
              A consultoria de IA é gratuita na primeira etapa. Analisamos seus
              processos e mostramos exatamente onde a IA pode transformar horas em minutos.
            </p>

            <a
              href={getWhatsAppUrl(`Olá! Gostaria de um diagnóstico gratuito de IA. Tenho ${employees} funcionários gastando ~${hoursPerDay}h/dia em tarefas repetitivas.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition-colors duration-150"
            >
              <Brain size={17} />
              Quero meu diagnóstico gratuito
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 lg:p-8 border border-zinc-200 shadow-xl shadow-zinc-200/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center">
                <Calculator size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 text-base">Calculadora de ROI</h3>
                <p className="text-[13px] text-zinc-500">Estimativa com 70% de automação</p>
              </div>
            </div>

            {/* Employees */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-base text-zinc-600 font-medium">
                  <Users size={14} />
                  Funcionários
                </label>
                <span className="font-mono text-sm font-semibold text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded">{employees}</span>
              </div>
              <input
                type="range" min="1" max="50" value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-brand-orange"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 mt-1"><span>1</span><span>50</span></div>
            </div>

            {/* Hours */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center gap-2 text-base text-zinc-600 font-medium">
                  <Clock size={14} />
                  Horas/dia em tarefas repetitivas
                </label>
                <span className="font-mono text-sm font-semibold text-zinc-900 bg-zinc-100 px-2 py-0.5 rounded">{hoursPerDay}h</span>
              </div>
              <input
                type="range" min="1" max="8" value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
                className="w-full h-1.5 bg-zinc-200 rounded-full appearance-none cursor-pointer accent-brand-orange"
              />
              <div className="flex justify-between text-[11px] text-zinc-400 mt-1"><span>1h</span><span>8h</span></div>
            </div>

            {/* Results */}
            <div className="border-t border-zinc-100 pt-5 space-y-2.5">
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                <span className="text-sm text-zinc-600">Horas economizadas/mês</span>
                <span className="font-mono font-bold text-emerald-600 text-lg">{hoursSavedMonth}h</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl gradient-brand-subtle border border-orange-100">
                <span className="text-sm text-zinc-600">Economia estimada/mês</span>
                <span className="font-mono font-bold text-zinc-900 text-lg">R$ {costSaved.toLocaleString("pt-BR")}</span>
              </div>
              <p className="text-[13px] text-zinc-400 text-center pt-1">
                * Estimativa baseada em R$ 25/hora e 70% de automação
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
