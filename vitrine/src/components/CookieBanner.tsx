"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

const COOKIE_KEY = "keymatic-cookie-consent";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    window.dispatchEvent(new StorageEvent("storage", { key: COOKIE_KEY, newValue: "accepted" }));
    setIsVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    window.dispatchEvent(new StorageEvent("storage", { key: COOKIE_KEY, newValue: "declined" }));
    setIsVisible(false);
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-3xl mx-auto card-dark p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Cookie size={18} className="text-brand-orange shrink-0 mt-0.5 sm:mt-0" />
            <div className="flex-1">
              <p className="text-[13px] text-zinc-400 leading-relaxed">
                Utilizamos cookies para melhorar sua experiência. Ao continuar navegando,
                você concorda com nossa{" "}
                <a href="/politica-de-privacidade" className="text-zinc-200 hover:underline">
                  Política de Privacidade
                </a>{" "}
                e{" "}
                <a href="/politica-de-privacidade#6" className="text-zinc-200 hover:underline">
                  Política de Cookies
                </a>
                .
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleDecline}
                className="px-4 py-2 rounded-lg border border-white/[0.06] text-[13px] text-zinc-500 hover:text-zinc-300 hover:border-white/[0.12] transition-all"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 text-[13px] font-medium transition-colors"
              >
                Aceitar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
