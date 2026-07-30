"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarHeart, Pencil, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  calendarOccasions,
  reminderOptions,
  type LoveReminder,
} from "@/data/features";
import {
  daysUntil,
  formatDisplayDate,
  loadReminders,
  saveReminders,
} from "@/lib/storage";
import {
  EmptyState,
  Field,
  SectionHeader,
  inputClassName,
} from "@/components/ui/FeatureUI";

type FormState = {
  personName: string;
  occasion: (typeof calendarOccasions)[number] | "";
  date: string;
  reminder: (typeof reminderOptions)[number] | "";
};

const emptyForm: FormState = {
  personName: "",
  occasion: "",
  date: "",
  reminder: "",
};

export function LoveCalendar() {
  const [reminders, setReminders] = useState<LoveReminder[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setReminders(loadReminders());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveReminders(reminders);
  }, [reminders, hydrated]);

  const upcoming = useMemo(
    () =>
      [...reminders].sort(
        (a, b) => daysUntil(a.date) - daysUntil(b.date),
      ),
    [reminders],
  );

  const reset = () => {
    setForm(emptyForm);
    setEditingId(null);
    setError("");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.personName.trim() || !form.occasion || !form.date || !form.reminder) {
      setError("Please complete all fields to save this date.");
      return;
    }

    if (editingId) {
      setReminders((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                personName: form.personName.trim(),
                occasion: form.occasion as LoveReminder["occasion"],
                date: form.date,
                reminder: form.reminder as LoveReminder["reminder"],
              }
            : item,
        ),
      );
    } else {
      const next: LoveReminder = {
        id: crypto.randomUUID(),
        personName: form.personName.trim(),
        occasion: form.occasion as LoveReminder["occasion"],
        date: form.date,
        reminder: form.reminder as LoveReminder["reminder"],
        createdAt: new Date().toISOString(),
      };
      setReminders((prev) => [next, ...prev]);
    }

    reset();
  };

  const startEdit = (item: LoveReminder) => {
    setEditingId(item.id);
    setForm({
      personName: item.personName,
      occasion: item.occasion,
      date: item.date,
      reminder: item.reminder,
    });
    setError("");
  };

  const remove = (id: string) => {
    setReminders((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) reset();
  };

  return (
    <section
      id="calendar"
      className="section-padding bg-white py-24 sm:py-28 dark:bg-[#141414]"
    >
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Love Calendar"
          title="Never Miss a Beautiful Moment"
          description="Save important dates and gentle reminders. Stored privately on this device for now—accounts and email reminders coming later."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/60 bg-beige/60 p-6 shadow-[var(--shadow-soft)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex rounded-2xl bg-white p-3 text-gold shadow-sm dark:bg-white/10">
                <CalendarHeart size={20} />
              </span>
              <div>
                <h3 className="font-display text-2xl text-charcoal dark:text-white">
                  {editingId ? "Edit Reminder" : "Add a Date"}
                </h3>
                <p className="text-sm text-muted dark:text-white/60">
                  Keep celebrations close to your heart.
                </p>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-4" noValidate>
              <Field label="Person's Name" htmlFor="personName" required>
                <input
                  id="personName"
                  className={inputClassName}
                  value={form.personName}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, personName: e.target.value }))
                  }
                />
              </Field>

              <Field label="Occasion" htmlFor="calOccasion" required>
                <select
                  id="calOccasion"
                  className={inputClassName}
                  value={form.occasion}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      occasion: e.target.value as FormState["occasion"],
                    }))
                  }
                >
                  <option value="">Select occasion</option>
                  {calendarOccasions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Date" htmlFor="calDate" required>
                <input
                  id="calDate"
                  type="date"
                  className={inputClassName}
                  value={form.date}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, date: e.target.value }))
                  }
                />
              </Field>

              <Field label="Reminder" htmlFor="calReminder" required>
                <select
                  id="calReminder"
                  className={inputClassName}
                  value={form.reminder}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      reminder: e.target.value as FormState["reminder"],
                    }))
                  }
                >
                  <option value="">Select reminder</option>
                  {reminderOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Field>

              {error && (
                <p
                  role="alert"
                  className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-300"
                >
                  {error}
                </p>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold-soft"
                >
                  {editingId ? "Save Changes" : "Save Reminder"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={reset}
                    className="rounded-full border border-charcoal/15 px-6 py-3 text-sm font-semibold text-charcoal dark:border-white/20 dark:text-white"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <div>
            <h3 className="mb-5 font-display text-2xl text-charcoal dark:text-white">
              Upcoming Celebrations
            </h3>

            {!hydrated ? (
              <div className="space-y-3">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="h-28 animate-pulse rounded-[1.5rem] bg-beige dark:bg-white/5"
                  />
                ))}
              </div>
            ) : upcoming.length === 0 ? (
              <EmptyState
                title="No dates saved yet"
                description="Add a birthday, anniversary, or special day and we’ll keep it ready for you."
              />
            ) : (
              <div className="space-y-3">
                <AnimatePresence initial={false}>
                  {upcoming.map((item) => {
                    const days = daysUntil(item.date);
                    return (
                      <motion.article
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="rounded-[1.5rem] border border-charcoal/5 bg-beige/50 p-5 shadow-[var(--shadow-soft)] dark:border-white/10 dark:bg-white/5"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <p className="font-display text-xl text-charcoal dark:text-white">
                              {item.personName}
                            </p>
                            <p className="mt-1 text-sm text-muted dark:text-white/65">
                              {item.occasion} · {formatDisplayDate(item.date)}
                            </p>
                            <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-gold uppercase">
                              Reminder: {item.reminder}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-charcoal dark:bg-white/10 dark:text-white">
                              {days === 0
                                ? "Today"
                                : days === 1
                                  ? "Tomorrow"
                                  : `${days} days`}
                            </span>
                            <button
                              type="button"
                              aria-label={`Edit ${item.personName}`}
                              onClick={() => startEdit(item)}
                              className="rounded-full p-2 text-charcoal transition hover:bg-white dark:text-white dark:hover:bg-white/10"
                            >
                              <Pencil size={16} />
                            </button>
                            <button
                              type="button"
                              aria-label={`Delete ${item.personName}`}
                              onClick={() => remove(item.id)}
                              className="rounded-full p-2 text-charcoal transition hover:bg-white dark:text-white dark:hover:bg-white/10"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </motion.article>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
