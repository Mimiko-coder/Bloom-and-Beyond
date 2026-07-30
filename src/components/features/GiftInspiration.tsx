"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import {
  inspirationBudgets,
  inspirationItems,
  inspirationOccasions,
} from "@/data/features";
import { WHATSAPP_NUMBER } from "@/data/content";
import { EmptyState, OptionChip, SectionHeader, inputClassName } from "@/components/ui/FeatureUI";
import { Reveal } from "@/components/Reveal";

export function GiftInspiration() {
  const [query, setQuery] = useState("");
  const [occasion, setOccasion] =
    useState<(typeof inspirationOccasions)[number]>("All");
  const [budget, setBudget] =
    useState<(typeof inspirationBudgets)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return inspirationItems.filter((item) => {
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.occasion.toLowerCase().includes(q);
      const matchesOccasion =
        occasion === "All" || item.occasion === occasion;
      const matchesBudget = budget === "All" || item.budget === budget;
      return matchesQuery && matchesOccasion && matchesBudget;
    });
  }, [query, occasion, budget]);

  return (
    <section
      id="inspiration"
      className="section-padding bg-white py-24 sm:py-28 dark:bg-[#141414]"
    >
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Inspiration"
          title="Gift Inspiration"
          description="Browse curated surprise ideas and customize the one that feels right."
        />

        <Reveal className="mt-10 space-y-5">
          <div className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted dark:text-white/45"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search romantic dinners, proposals, gift boxes..."
              className={`${inputClassName} pl-11`}
              aria-label="Search gift inspiration"
            />
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase dark:text-white/50">
              Occasion
            </p>
            <div className="flex flex-wrap gap-2">
              {inspirationOccasions.map((item) => (
                <OptionChip
                  key={item}
                  label={item}
                  selected={occasion === item}
                  onClick={() => setOccasion(item)}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-muted uppercase dark:text-white/50">
              Budget
            </p>
            <div className="flex flex-wrap gap-2">
              {inspirationBudgets.map((item) => (
                <OptionChip
                  key={item}
                  label={item}
                  selected={budget === item}
                  onClick={() => setBudget(item)}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <EmptyState
                  title="No inspiration found"
                  description="Try another occasion, budget, or search term. Beautiful ideas are waiting."
                  action={
                    <button
                      type="button"
                      onClick={() => {
                        setQuery("");
                        setOccasion("All");
                        setBudget("All");
                      }}
                      className="rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-white dark:bg-gold dark:text-charcoal"
                    >
                      Clear Filters
                    </button>
                  }
                />
              </motion.div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((item, index) => {
                  const customizeUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hi Bloom & Beyond! I'd love to customize this idea: ${item.title} (${item.priceLabel}).`,
                  )}`;

                  return (
                    <Reveal key={item.id} delay={(index % 3) * 0.06}>
                      <motion.article
                        layout
                        whileHover={{ y: -8 }}
                        transition={{ type: "spring", stiffness: 280, damping: 22 }}
                        className="group overflow-hidden rounded-[1.75rem] bg-beige/70 shadow-[var(--shadow-soft)] dark:bg-white/5"
                      >
                        <div className="relative aspect-[5/4] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                            className="object-cover transition duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent opacity-80" />
                          <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-charcoal backdrop-blur">
                            {item.occasion}
                          </span>
                        </div>
                        <div className="p-6">
                          <h3 className="font-display text-2xl text-charcoal dark:text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted dark:text-white/65">
                            {item.description}
                          </p>
                          <p className="mt-4 text-sm font-semibold text-gold">
                            {item.priceLabel}
                          </p>
                          <a
                            href={customizeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gold dark:bg-gold dark:text-charcoal dark:hover:bg-gold-soft"
                          >
                            Customize This Idea
                          </a>
                        </div>
                      </motion.article>
                    </Reveal>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
