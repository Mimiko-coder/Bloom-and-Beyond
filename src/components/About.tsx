"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="section-padding bg-white py-24 sm:py-28 dark:bg-[#141414]">
      <div className="container-luxury grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/romantic-hotel-suite.jpeg"
                alt="Romantic hotel suite surprise with roses and champagne"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/50 to-transparent p-6">
              <p className="font-display text-2xl text-white">
                Memories, not just decorations.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sage-dark uppercase">
            About Us
          </p>
          <h2 className="font-display text-balance text-4xl text-charcoal sm:text-5xl dark:text-white">
            We create moments that feel like love.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg dark:text-white/70">
            <p>
              Bloom &amp; Beyond is a premium gifting, decoration, and surprise
              experience company. We help people express love through
              unforgettable moments—birthdays, anniversaries, proposals,
              graduations, baby showers, and everything in between.
            </p>
            <p>
              We don&apos;t simply decorate rooms or assemble gift boxes. We
              craft meaningful memories with warmth, elegance, and intention—so
              every surprise feels personal, beautiful, and lasting.
            </p>
          </div>
          <p className="mt-8 font-display text-xl text-gold italic">
            Beautiful Moments, Made with Love.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
