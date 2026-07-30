"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import { galleryItems } from "@/data/content";
import { Reveal } from "@/components/Reveal";

const filters = [
  "All",
  "Proposal",
  "Birthday",
  "Anniversary",
  "Romantic",
  "Gift Boxes",
  "Apology",
  "Just Because",
] as const;

export function Gallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const items = useMemo(() => {
    if (active === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === active);
  }, [active]);

  return (
    <section
      id="gallery"
      className="section-padding bg-white/85 py-24 backdrop-blur-sm sm:py-28 dark:bg-[#141414]/90"
    >
      <div className="container-luxury">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sage-dark uppercase">
            Gallery
          </p>
          <h2 className="font-display text-balance text-4xl text-charcoal sm:text-5xl dark:text-white">
            A glimpse of the magic we create
          </h2>
          <p className="mt-4 text-muted dark:text-white/70">
            Real setups, gift boxes, and surprise videos crafted with love.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === filter
                  ? "bg-charcoal text-white dark:bg-gold dark:text-charcoal"
                  : "bg-beige text-charcoal hover:bg-sage/30 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              }`}
              aria-pressed={active === filter}
            >
              {filter}
            </button>
          ))}
        </Reveal>

        <div className="masonry mt-12">
          <AnimatePresence mode="popLayout">
            {items.map((item) => {
              const isVideo = item.mediaType === "video";

              return (
                <motion.figure
                  key={`${active}-${item.src}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="masonry-item group overflow-hidden rounded-[1.5rem] shadow-[var(--shadow-soft)]"
                >
                  <div
                    className={`relative overflow-hidden ${
                      item.tall ? "aspect-[3/4]" : "aspect-[4/5]"
                    }`}
                  >
                    {isVideo ? (
                      <>
                        <video
                          src={item.src}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          muted
                          loop
                          playsInline
                          autoPlay
                          controls
                          aria-label={item.alt}
                        />
                        <span className="pointer-events-none absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-charcoal/70 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
                          <Play size={12} fill="currentColor" />
                          Video
                        </span>
                      </>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    )}
                    <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-charcoal/70 to-transparent p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="text-xs font-semibold tracking-[0.16em] text-gold-soft uppercase">
                        {item.category}
                      </span>
                      <p className="mt-1 text-sm text-white">{item.alt}</p>
                    </figcaption>
                  </div>
                </motion.figure>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
