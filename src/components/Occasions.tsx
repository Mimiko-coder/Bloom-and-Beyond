"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { occasions } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Occasions() {
  return (
    <section id="occasions" className="section-padding bg-beige py-24 sm:py-28 dark:bg-[#1a1a1a]">
      <div className="container-luxury">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sage-dark uppercase">
            Occasions
          </p>
          <h2 className="font-display text-balance text-4xl text-charcoal sm:text-5xl">
            Celebrate every beautiful reason
          </h2>
          <p className="mt-4 text-muted">
            Whatever the moment, we help you make it unforgettable.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {occasions.map((occasion, index) => (
            <Reveal key={occasion.title} delay={(index % 4) * 0.06}>
              <motion.a
                href="#contact"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative block overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-soft)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={occasion.image}
                    alt={occasion.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3 className="font-display text-lg text-white sm:text-xl">
                      {occasion.title}
                    </h3>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
