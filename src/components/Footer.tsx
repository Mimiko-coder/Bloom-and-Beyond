import { MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/data/content";

function InstagramGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-padding border-t border-charcoal/5 bg-white py-14 dark:border-white/10 dark:bg-[#141414]">
      <div className="container-luxury grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <BrandLogo size="md" showWordmark wordmarkClassName="text-2xl sm:text-3xl" />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Beautiful Moments, Made with Love.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-sage-dark uppercase">
            Contact
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-charcoal transition hover:text-gold"
          >
            <MessageCircle size={16} aria-hidden />
            WhatsApp: {WHATSAPP_DISPLAY}
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.16em] text-sage-dark uppercase">
            Social
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
            <InstagramGlyph />
            Instagram: Coming Soon
          </p>
        </div>
      </div>

      <div className="container-luxury mt-12 space-y-2 border-t border-charcoal/5 pt-6 dark:border-white/10">
        <p className="text-center text-xs text-muted dark:text-white/55">
          © {year} Bloom &amp; Beyond. All rights reserved.
        </p>
        <p className="text-center text-xs text-muted dark:text-white/55">
          Designed by Mercy.S © 2026
        </p>
      </div>
    </footer>
  );
}
