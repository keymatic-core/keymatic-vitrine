"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const TEAM = [
  {
    name: "Valéria Barboza",
    role: "Co-fundadora & Diretora de Operações (COO)",
    bio: "Lidera a Gestão de Projetos e a Implantação Hands-on, garantindo que sua tecnologia saia do papel e gere lucro. Especialista em Automação de processos e Treinamento de IA para Negócios, focada em transformar horas de trabalho manual em minutos de produtividade. Traz o legado de 20 anos de confiança da VTS Informática para o atendimento consultivo e próximo ao cliente.",
    avatar: "/team/valeria.jpg",
    initials: "VB",
    tags: ["Gestão & Projetos", "Automação de Processos", "Treinamento de IA"],
  },
  {
    name: "Tércio Rigonati",
    role: "Co-fundador & Diretor de Tecnologia (CTO)",
    bio: "Arquiteta e constrói a infraestrutura técnica que sustenta sua operação, utilizando Django e PostgreSQL. Especialista em Desenvolvimento & Arquitetura de IA de alta performance, garantindo que seu sistema seja seguro, escalável e tecnicamente impecável. O \"motor\" por trás da Keymatic, focado em transformar complexidade técnica em interfaces fluidas e robustas.",
    avatar: "/team/tercio.jpg",
    initials: "TR",
    tags: ["Arquitetura & IA", "Django & PostgreSQL", "Infraestrutura"],
  },
  {
    name: "Matheus Barboza",
    role: "Co-fundador & Estrategista de Inovação",
    bio: "Atua na vanguarda da empresa, realizando pesquisas contínuas de inovações globais para manter nossas soluções atualizadas. Define estratégias de longo prazo e faz curadoria de novas tecnologias para o ecossistema Keymatic, garantindo que os projetos utilizem sempre as metodologias mais modernas do mercado.",
    avatar: "/team/matheus.jpg",
    initials: "MB",
    tags: ["Estratégia & Inovação", "Pesquisa de Tecnologias", "Visão de Longo Prazo"],
  },
];

function Avatar({ src, initials, name }: { src: string; initials: string; name: string }) {
  return (
    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-zinc-800 border border-white/[0.06]">
      {/* Fallback with initials — shown when image doesn't load */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold gradient-brand-text">{initials}</span>
      </div>
      {/* Actual photo — place JPG in /public/team/ */}
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover relative z-10"
        sizes="128px"
        onError={(e) => {
          // Hide broken image to show initials fallback
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

export default function SobreTeam() {
  return (
    <section id="time" className="section-padding relative bg-[#f4f4f5]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[13px] text-orange-500 font-medium uppercase tracking-wider mb-4">
            Liderança
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-zinc-900 mb-4">
            Quem está à frente
          </h2>
          <p className="text-zinc-500 text-lg max-w-lg mx-auto">
            Fundadores e gestão com décadas de experiência combinada,
            entusiasmo por inovação e compromisso com cada cliente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group text-center"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-5">
                <Avatar src={member.avatar} initials={member.initials} name={member.name} />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-zinc-900 mb-1">{member.name}</h3>
              <p className="text-[13px] text-orange-600 font-medium mb-3">{member.role}</p>
              <p className="text-[13px] text-zinc-500 leading-relaxed mb-4">{member.bio}</p>

              {/* Tags */}
              <div className="flex flex-wrap justify-center gap-1.5">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[11px] font-medium text-zinc-500 bg-zinc-200/60 border border-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
