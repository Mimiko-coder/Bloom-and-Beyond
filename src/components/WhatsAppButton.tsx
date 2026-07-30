"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/data/content";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bloom & Beyond on WhatsApp"
      className="animate-float fixed right-5 bottom-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-lift)] transition hover:scale-105 sm:right-7 sm:bottom-7"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.45 }}
    >
      <MessageCircle size={26} aria-hidden />
    </motion.a>
  );
}
