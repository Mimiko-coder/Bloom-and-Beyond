"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-beige"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          aria-hidden={!visible}
        >
          <div className="flex flex-col items-center gap-5 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Bloom & Beyond"
                width={140}
                height={140}
                priority
                className="rounded-full object-cover shadow-[var(--shadow-soft)]"
              />
            </motion.div>
            <motion.p
              className="font-display text-3xl text-charcoal sm:text-4xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              Bloom &amp; Beyond
            </motion.p>
            <motion.p
              className="text-sm tracking-[0.18em] text-muted uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Beautiful Moments, Made with Love
            </motion.p>
            <div className="mt-2 h-[2px] w-40 overflow-hidden rounded-full bg-white">
              <div className="loader-shimmer h-full w-full rounded-full" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
