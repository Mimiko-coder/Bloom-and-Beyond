"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { WHATSAPP_URL } from "@/data/content";


export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      aria-label="Hero"
    >
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Image
          src="/images/proposal-beach.jpeg"
          alt="Luxury beach proposal setup by Bloom & Beyond"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/35 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 via-transparent to-transparent" />
      </motion.div>

      <div className="section-padding relative z-10 w-full pb-16 pt-32 sm:pb-20 lg:pb-24">
        <div className="container-luxury max-w-3xl">
          <motion.div
            className="mb-5 flex items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/images/logo.jpg"
              alt="Bloom & Beyond logo"
              width={72}
              height={72}
              priority
              className="rounded-full object-cover shadow-[var(--shadow-soft)] ring-2 ring-white/40"
            />
            <p className="font-display text-3xl text-white sm:text-4xl md:text-5xl">
              Bloom &amp; Beyond
            </p>
          </motion.div>

          <motion.h1
            className="font-display text-balance text-4xl leading-[1.15] text-white sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Every Gift Has a Story.
            <span className="mt-2 block text-gold-soft">
              Every Surprise Creates a Memory.
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            Bloom &amp; Beyond creates beautiful gifts, elegant décor, and
            unforgettable surprises for every special occasion.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.36 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:bg-gold-soft"
            >
              Plan My Surprise
            </a>
            <a
              href="#gallery"
              className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20"
            >
              View Gallery
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
