"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress fixed top-0 left-0 right-0 h-[2px] z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
