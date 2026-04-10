"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import QuizModal from "./QuizModal";

export default function QuizAutoOpen() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the quiz modal automatically on mount
    setIsOpen(true);
  }, []);

  function handleClose() {
    setIsOpen(false);
    // Redirect to home so user is not stuck on /quiz with no content
    router.push("/");
  }

  return <QuizModal isOpen={isOpen} onClose={handleClose} />;
}
