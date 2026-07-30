import type { LoveReminder } from "@/data/features";

const STORAGE_KEY = "bloom-love-calendar";
const THEME_KEY = "bloom-theme";

export function loadReminders(): LoveReminder[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as LoveReminder[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveReminders(reminders: LoveReminder[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
}

export type ThemeMode = "light" | "dark";

export function loadTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem(THEME_KEY);
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function saveTheme(theme: ThemeMode) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_KEY, theme);
}

export function daysUntil(dateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);

  const thisYear = new Date(today.getFullYear(), target.getMonth(), target.getDate());
  if (thisYear < today) {
    thisYear.setFullYear(today.getFullYear() + 1);
  }

  return Math.round((thisYear.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

export function formatDisplayDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}
