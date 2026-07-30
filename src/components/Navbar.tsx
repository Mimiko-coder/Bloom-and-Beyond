"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { useTheme } from "@/components/ThemeProvider";
import { navLinks, WHATSAPP_URL } from "@/data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkTone =
    scrolled || open
      ? "text-charcoal/80 dark:text-white/80"
      : "text-white/90";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "py-3" : "py-5"
      }`}
    >
      <div className="section-padding">
        <nav
          className={`container-luxury flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${
            scrolled || open
              ? "glass shadow-[var(--shadow-soft)]"
              : "bg-transparent"
          }`}
          aria-label="Primary"
        >
          <a
            href="#home"
            className="transition hover:opacity-90"
            onClick={() => setOpen(false)}
            aria-label="Bloom & Beyond home"
          >
            <BrandLogo
              size="sm"
              showWordmark
              priority
              light={!scrolled && !open}
              wordmarkClassName="text-lg sm:text-xl"
            />
          </a>

          <ul className="hidden items-center gap-4 xl:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition hover:text-gold ${linkTone}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 xl:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
              className={`rounded-full p-2.5 transition ${
                scrolled || open
                  ? "text-charcoal hover:bg-white/70 dark:text-white dark:hover:bg-white/10"
                  : "text-white hover:bg-white/15"
              }`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                scrolled || open
                  ? "bg-charcoal text-white hover:bg-gold dark:bg-gold dark:text-charcoal dark:hover:bg-gold-soft"
                  : "bg-white/15 text-white backdrop-blur-md hover:bg-gold"
              }`}
            >
              Plan My Surprise
            </a>
          </div>

          <div className="flex items-center gap-1 xl:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
              className={`rounded-full p-2 transition ${
                scrolled || open
                  ? "text-charcoal hover:bg-white/70 dark:text-white dark:hover:bg-white/10"
                  : "text-white hover:bg-white/15"
              }`}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              className={`inline-flex rounded-full p-2 transition ${
                scrolled || open
                  ? "text-charcoal hover:bg-white/70 dark:text-white dark:hover:bg-white/10"
                  : "text-white hover:bg-white/15"
              }`}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="section-padding xl:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="glass container-luxury mt-2 rounded-2xl p-6 shadow-[var(--shadow-soft)]">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block text-base font-medium text-charcoal dark:text-white"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-white dark:bg-gold dark:text-charcoal"
                onClick={() => setOpen(false)}
              >
                Plan My Surprise
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
