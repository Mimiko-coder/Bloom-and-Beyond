"use client";

import { Camera, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { reasons } from "@/data/content";
import { Reveal } from "@/components/Reveal";

const icons = {
  Heart,
  Sparkles,
  ShieldCheck,
  Camera,
} as const;

export function WhyChoose() {
  return (
    <section className="section-padding relative overflow-hidden bg-white py-24 sm:py-28 dark:bg-[#141414]">
      <div
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-sage/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />

      <div className="container-luxury relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sage-dark uppercase">
            Why Choose Us
          </p>
          <h2 className="font-display text-balance text-4xl text-charcoal sm:text-5xl dark:text-white">
            Why Choose Bloom &amp; Beyond?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = icons[reason.icon as keyof typeof icons];
            return (
              <Reveal key={reason.title} delay={index * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-white/70 bg-beige/80 p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] dark:border-white/10 dark:bg-white/5">
                  <div className="mb-5 inline-flex rounded-2xl bg-white p-3 text-gold shadow-sm dark:bg-white/10">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="font-display text-xl text-charcoal dark:text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted dark:text-white/65">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
