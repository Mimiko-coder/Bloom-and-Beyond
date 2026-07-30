"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/content";
import { Reveal } from "@/components/Reveal";

export function Services() {
  return (
    <section id="services" className="section-padding bg-beige/80 py-24 backdrop-blur-sm sm:py-28 dark:bg-[#1a1a1a]/88">
      <div className="container-luxury">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sage-dark uppercase">
            Services
          </p>
          <h2 className="font-display text-balance text-4xl text-charcoal sm:text-5xl">
            Experiences designed to move the heart
          </h2>
          <p className="mt-4 text-muted">
            From intimate room surprises to custom gift hampers, every service
            is styled with luxury and care.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-soft)] dark:bg-white/5"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent opacity-70" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-charcoal dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-white/65">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
