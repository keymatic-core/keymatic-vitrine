"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, Link2 } from "lucide-react";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const SERVICES = [
  {
    icon: () => <WhatsAppIcon size={22} className="text-emerald-500" />,
    title: "WhatsApp Automatizado",
    description:
      "Chatbot inteligente que responde, qualifica e encaminha. Atendimento 24h, disparos segmentados e follow-up automático.",
    features: ["Respostas automáticas 24h", "Qualificação de leads", "Disparos segmentados", "WhatsApp Business API"],
    color: "#25D366",
    gradient: "from-emerald-50 to-green-50",
    borderColor: "border-emerald-100 hover:border-emerald-200",
  },
  {
    icon: () => <Workflow size={22} className="text-pink-500" />,
    title: "Automação de Processos",
    description:
      "Fluxos que rodam sozinhos: emissão de NF, controle de estoque, follow-up com cliente, onboarding automático.",
    features: ["Emissão de NF automática", "Controle de estoque", "Follow-up inteligente", "Onboarding de clientes"],
    color: "#ec4899",
    gradient: "from-pink-50 to-fuchsia-50",
    borderColor: "border-pink-100 hover:border-pink-200",
  },
  {
    icon: () => <Link2 size={22} className="text-violet-500" />,
    title: "Integrações entre Sistemas",
    description:
      "Conectamos tudo: ERP, planilhas, marketplaces, e-commerce e financeiro. Seus dados fluem sem retrabalho.",
    features: ["ERPs e planilhas", "Marketplaces", "E-commerce", "Financeiro e fiscal"],
    color: "#8b5cf6",
    gradient: "from-violet-50 to-purple-50",
    borderColor: "border-violet-100 hover:border-violet-200",
  },
];

export default function AutoServices() {
  return (
    <section id="servicos-auto" className="section-padding relative"
      style={{ background: "linear-gradient(180deg, #fdf4ff 0%, #f5f0ff 50%, #18181b 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[13px] text-pink-500 font-medium uppercase tracking-wider mb-4">
            Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-zinc-900 mb-4">
            O que automatizamos para você
          </h2>
          <p className="text-zinc-500 text-lg max-w-lg mx-auto">
            Soluções sob medida para o tamanho do seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group p-6 rounded-2xl bg-gradient-to-br ${service.gradient} border ${service.borderColor} transition-all hover:shadow-lg hover:-translate-y-1`}
                style={{ boxShadow: `0 0 0 0 transparent` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px ${service.color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 transparent`;
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/80 border border-white flex items-center justify-center mb-4 shadow-sm">
                  <Icon />
                </div>

                <h3 className="text-lg font-semibold text-zinc-900 mb-2">{service.title}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed mb-4">{service.description}</p>

                <div className="space-y-1.5">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-[12px] text-zinc-600">
                      <div className="w-1 h-1 rounded-full" style={{ background: service.color }} />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
