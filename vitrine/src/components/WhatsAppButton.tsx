"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "../lib/utils";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const tooltipTimer = setTimeout(() => setShowTooltip(true), 8000);
    return () => clearTimeout(tooltipTimer);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="card-dark px-4 py-3 max-w-[200px] relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-zinc-800 border border-white/[0.06] flex items-center justify-center"
              aria-label="Fechar"
            >
              <X size={10} className="text-zinc-400" />
            </button>
            <p className="text-[12px] text-zinc-300 leading-relaxed">
              Precisa de ajuda? Fale com um especialista agora!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        href={getWhatsAppUrl("Olá! Vim pelo site da Keymatic e gostaria de mais informações.")}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/20 transition-colors duration-200"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
}
