"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-beige py-24 sm:py-28 dark:bg-[#1a1a1a]"
    >
      <div className="container-luxury">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sage-dark uppercase">
            Love Notes
          </p>
          <h2 className="font-display text-balance text-4xl text-charcoal sm:text-5xl">
            Stories from hearts we&apos;ve touched
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <blockquote className="h-full rounded-[1.75rem] bg-white p-8 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] dark:bg-white/5">
                <Quote className="mb-4 text-gold" size={28} aria-hidden />
                <p className="font-display text-xl leading-relaxed text-charcoal dark:text-white">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="block text-sm font-semibold text-charcoal dark:text-white">
                      {item.name}
                    </span>
                    <span className="mt-1 block text-sm text-muted dark:text-white/60">
                      {item.occasion}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
