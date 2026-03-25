"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, X } from "lucide-react";
import { QUIZ_BANNER_KEY, QUIZ_BANNER_DELAY_MS } from "../lib/quiz-data";
import QuizModal from "./QuizModal";

const EXCLUDED_PATHS = ["/sobre", "/politica-de-privacidade"];

export default function QuizBanner() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const isExcluded = EXCLUDED_PATHS.some((p) => pathname.startsWith(p));

  useEffect(() => {
    if (isExcluded) return;
    const stored = localStorage.getItem(QUIZ_BANNER_KEY);
    if (stored === "completed" || stored === "dismissed") return;

    const timer = setTimeout(() => setIsVisible(true), QUIZ_BANNER_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isExcluded]);

  function handleDismiss() {
    setDismissed(true);
    setIsVisible(false);
    localStorage.setItem(QUIZ_BANNER_KEY, "dismissed");
  }

  function handleOpen() {
    setIsVisible(false);
    setIsQuizOpen(true);
  }

  function handleQuizClose() {
    setIsQuizOpen(false);
    // Don't re-show banner after closing quiz
    setDismissed(true);
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && !dismissed && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 max-w-[320px]"
          >
            <div className="relative card-dark p-4 pr-10 glow-brand">
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded text-zinc-600 hover:text-zinc-300 transition-colors"
              >
                <X size={14} />
              </button>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl gradient-brand-subtle flex items-center justify-center shrink-0">
                  <Gift size={18} className="text-brand-orange" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-white mb-0.5">
                    🎉 20 anos de VTS!
                  </p>
                  <p className="text-[12px] text-zinc-500 leading-relaxed mb-3">
                    Faça nosso quiz e ganhe um e-book exclusivo de presente.
                  </p>
                  <button
                    onClick={handleOpen}
                    className="relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 text-[12px] font-medium transition-colors"
                  >
                    <span className="absolute inset-0 rounded-lg animate-[quiz-glow_2s_ease-in-out_infinite]" />
                    <Gift size={12} className="relative z-10" />
                    <span className="relative z-10">Fazer Quiz</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <QuizModal isOpen={isQuizOpen} onClose={handleQuizClose} />
    </>
  );
}
