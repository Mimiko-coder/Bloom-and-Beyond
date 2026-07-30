"use client";

import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <Reveal
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-sage-dark uppercase dark:text-sage">
        {eyebrow}
      </p>
      <h2 className="font-display text-balance text-4xl text-charcoal sm:text-5xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted dark:text-white/70">{description}</p>
      )}
    </Reveal>
  );
}

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-charcoal/15 bg-white/60 px-6 py-14 text-center shadow-[var(--shadow-soft)] backdrop-blur dark:border-white/15 dark:bg-white/5">
      <p className="font-display text-2xl text-charcoal dark:text-white">
        {title}
      </p>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted dark:text-white/65">
        {description}
      </p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

type OptionChipProps = {
  label: string;
  selected?: boolean;
  onClick?: () => void;
};

export function OptionChip({ label, selected, onClick }: OptionChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
        selected
          ? "bg-charcoal text-white shadow-[var(--shadow-soft)] dark:bg-gold dark:text-charcoal"
          : "bg-white text-charcoal hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)] dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
      }`}
    >
      {label}
    </button>
  );
}

type FieldProps = {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  required?: boolean;
};

export function Field({ label, htmlFor, error, children, required }: FieldProps) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-semibold text-charcoal dark:text-white">
        {label}
        {required && <span className="text-gold"> *</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs font-medium text-red-600 dark:text-red-400">
          {error}
        </span>
      )}
    </label>
  );
}

export const inputClassName =
  "w-full rounded-2xl border border-charcoal/10 bg-white/90 px-4 py-3 text-sm text-charcoal outline-none transition placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40";
