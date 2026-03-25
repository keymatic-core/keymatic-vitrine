"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const STATS = [
  { value: 0.9, prefix: "<", suffix: "s", label: "Tempo de carregamento", decimals: 1 },
  { value: 99.9, prefix: "", suffix: "%", label: "Uptime garantido", decimals: 1 },
  { value: 2, prefix: "", suffix: "+", label: "Gateways de pagamento", decimals: 0 },
  { value: 85.8, prefix: "", suffix: "", label: "Score técnico", decimals: 1 },
];

function AnimatedNumber({
  value,
  decimals,
  inView,
}: {
  value: number;
  decimals: number;
  inView: boolean;
}) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const duration = 1500;
    const startTime = Date.now();

    function tick() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;
      setDisplay(current.toFixed(decimals));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, value, decimals]);

  return <>{display}</>;
}

export default function EcomStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-16 bg-[#f4f4f5] border-t border-b border-zinc-200/60">

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-bold gradient-brand-text mb-2 tabular-nums">
                {stat.prefix}
                <AnimatedNumber value={stat.value} decimals={stat.decimals} inView={inView} />
                {stat.suffix}
              </div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
