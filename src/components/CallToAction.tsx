"use client";

import Image from "next/image";
import { WHATSAPP_URL } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function CallToAction() {
  return (
    <section id="contact" className="section-padding py-24 sm:py-28">
      <div className="container-luxury">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
            <div className="absolute inset-0">
              <Image
                src="/images/i-love-u-4.jpeg"
                alt="Romantic surprise setup with roses and champagne"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/65" />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-transparent to-sage/20" />
            </div>

            <div className="relative px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16">
              <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-gold-soft uppercase">
                Let&apos;s Begin
              </p>
              <h2 className="font-display text-balance text-4xl text-white sm:text-5xl">
                Who Deserves to Smile Today?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                Whether you&apos;re celebrating, saying &ldquo;I&apos;m
                sorry,&rdquo; or simply reminding someone they&apos;re loved,
                Bloom &amp; Beyond is here to help create a moment they&apos;ll
                never forget.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gold-soft"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
