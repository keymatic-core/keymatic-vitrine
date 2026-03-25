"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Wrench, Bot } from "lucide-react";

const SERVICES = [
  {
    icon: Users,
    title: "Workshop Presencial",
    description: "Sua equipe usando IA em 1 dia. Treinamento prático, com exercícios reais baseados na rotina da sua empresa.",
    features: ["Turmas de até 20 pessoas", "Material didático incluso", "Exercícios práticos reais", "Certificado de participação"],
    image: "/ia/workshop.jpg",
    color: "#a855f7",
    gradient: "from-purple-50 to-violet-50",
    borderColor: "border-purple-100 hover:border-purple-200",
  },
  {
    icon: GraduationCap,
    title: "Treinamento de Ferramentas",
    description: "ChatGPT, Claude, Gemini e Copilot na rotina da sua equipe. Cada ferramenta aplicada ao seu contexto de trabalho.",
    features: ["ChatGPT & Claude avançado", "Copilot para produtividade", "Prompts personalizados", "Sessões online ou presencial"],
    image: "/ia/training.jpg",
    color: "#8b5cf6",
    gradient: "from-violet-50 to-indigo-50",
    borderColor: "border-violet-100 hover:border-violet-200",
  },
  {
    icon: Wrench,
    title: "Implantação Hands-on",
    description: "Montamos os fluxos de IA dentro da sua operação. Não é teoria — é a ferramenta funcionando no seu dia a dia.",
    features: ["Mapeamento de processos", "Configuração personalizada", "Integração com n8n + IA", "Suporte pós-implantação"],
    image: "/ia/team-ai.jpg",
    color: "#7c3aed",
    gradient: "from-fuchsia-50 to-purple-50",
    borderColor: "border-fuchsia-100 hover:border-fuchsia-200",
  },
  {
    icon: Bot,
    title: "Agentes Customizados",
    description: "Assistentes de IA treinados com os dados do seu negócio. Atendem, analisam e executam tarefas por você.",
    features: ["Treinado com seus dados", "Integração via API", "Atendimento automatizado", "Evolução contínua"],
    image: null,
    color: "#6d28d9",
    gradient: "from-indigo-50 to-violet-50",
    borderColor: "border-indigo-100 hover:border-indigo-200",
  },
];

export default function IAServices() {
  return (
    <section
      id="servicos-ia"
      className="section-padding relative"
      style={{ background: "linear-gradient(180deg, white 0%, #f5f0ff 50%, #faf5ff 100%)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[13px] text-purple-500 font-medium uppercase tracking-wider mb-4">
            Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-zinc-900 mb-4">
            O que fazemos por <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">você</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-lg mx-auto">
            Da primeira conversa ao resultado. Tudo personalizado para o seu negócio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} border ${service.borderColor} transition-all hover:shadow-lg hover:-translate-y-1`}
                style={{ boxShadow: "0 0 0 0 transparent" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px ${service.color}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 0 transparent";
                }}
              >
                {/* Image */}
                {service.image && (
                  <div className="relative h-40 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-white/80 border border-white flex items-center justify-center mb-4 shadow-sm">
                    <Icon size={22} style={{ color: service.color }} />
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
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
