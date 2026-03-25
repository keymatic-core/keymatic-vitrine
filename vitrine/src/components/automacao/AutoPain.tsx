"use client";

import { motion } from "framer-motion";
import { Clock, AlertTriangle, Unplug, MessageCircleX } from "lucide-react";

const PAINS = [
  {
    icon: MessageCircleX,
    title: "WhatsApp caótico",
    description: "Clientes esperando resposta, mensagens perdidas, horário comercial limitado.",
  },
  {
    icon: Clock,
    title: "Tarefas repetitivas",
    description: "Emitir nota, atualizar planilha, enviar follow-up... tudo manual, tudo demorado.",
  },
  {
    icon: Unplug,
    title: "Sistemas desconectados",
    description: "Estoque num lugar, vendas no outro, financeiro na planilha. Nada conversa.",
  },
  {
    icon: AlertTriangle,
    title: "Erros humanos",
    description: "Pedido duplicado, cliente esquecido, dados errados. O manual cobra seu preço.",
  },
];

export default function AutoPain() {
  return (
    <section className="section-padding relative bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-[13px] text-pink-500 font-medium uppercase tracking-wider mb-4">
            O Problema
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-zinc-900 mb-4">
            Reconhece algum desses?
          </h2>
          <p className="text-zinc-500 text-lg max-w-lg mx-auto">
            Se o seu dia é assim, automação não é luxo — é sobrevivência.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {PAINS.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={pain.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group gradient-border-hover p-5 rounded-xl bg-zinc-50/50 hover:bg-pink-50/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-50 border border-pink-100 flex items-center justify-center mb-3 group-hover:border-pink-200 transition-colors">
                  <Icon size={20} className="text-pink-400 group-hover:text-pink-500 transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 mb-1 transition-transform duration-200 origin-left group-hover:scale-105">{pain.title}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">{pain.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
