"use client";

import { motion } from "framer-motion";
import { Heart, Target, Lightbulb } from "lucide-react";
import Image from "next/image";
import { KeymaticIcon } from "../icons/KeymaticLogo";

const VALUES = [
  {
    icon: Heart,
    title: "Proximidade",
    description:
      "Atendemos cada cliente como parceiro. Não somos um SAC — somos a equipe de tecnologia que você gostaria de ter dentro da sua empresa.",
  },
  {
    icon: Target,
    title: "Resultado",
    description:
      "Tecnologia bonita que não vende é só custo. Tudo que fazemos tem um objetivo mensurável: mais vendas, menos trabalho manual, mais tempo livre.",
  },
  {
    icon: Lightbulb,
    title: "Evolução constante",
    description:
      "De COBOL a IA generativa. 20 anos nos ensinaram que parar de aprender é parar de ser útil. Estamos sempre um passo à frente.",
  },
];

export default function SobreMission() {
  return (
    <section id="valores" className="section-padding relative" style={{ background: "#18181b" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[13px] text-orange-400 font-medium uppercase tracking-wider mb-4">
            Nossos Valores
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white mb-4">
            O que nos move
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Nascemos para transformar negócios locais com tecnologia de ponta.
            Essa é a nossa missão desde o dia 1.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group card-gradient-border p-6 text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:border-orange-500/30 group-hover:shadow-[0_0_16px_rgba(249,115,22,0.12)]">
                  <Icon size={20} className="text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* VTS + Keymatic relationship */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-white/[0.06] text-center"
        >
          <div className="flex items-center justify-center gap-6 mb-6">
            {/* VTS */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center overflow-hidden">
                <Image src="/logo-vts.png" alt="VTS" width={28} height={28} className="object-contain" />
              </div>
              <span className="text-base font-semibold text-white">VTS</span>
            </div>
            <div className="text-zinc-600 text-lg">+</div>
            {/* Keymatic */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                <KeymaticIcon size={26} />
              </div>
              <span className="text-base font-semibold text-white">Keymatic</span>
            </div>
          </div>
          <p className="text-[14px] text-zinc-400 leading-relaxed max-w-xl mx-auto">
            A VTS Informática continua atendendo seus clientes com assistência técnica
            e infraestrutura. A Keymatic nasce como seu braço digital:
            e-commerce, automação e IA para levar os negócios ao próximo nível.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
