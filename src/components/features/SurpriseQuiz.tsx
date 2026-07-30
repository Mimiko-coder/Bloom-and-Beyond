"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import {
  getRecommendation,
  quizBudgets,
  quizOccasions,
  quizRecipients,
  quizStyles,
  type QuizAnswers,
} from "@/data/features";
import { WHATSAPP_NUMBER } from "@/data/content";
import { OptionChip, SectionHeader } from "@/components/ui/FeatureUI";

const steps = [
  { key: "occasion", title: "What are you celebrating?" },
  { key: "recipient", title: "Who is it for?" },
  { key: "budget", title: "Choose your budget" },
  { key: "style", title: "Preferred style" },
] as const;

const emptyAnswers: QuizAnswers = {
  occasion: "",
  recipient: "",
  budget: "",
  style: "",
};

export function SurpriseQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>(emptyAnswers);
  const [finished, setFinished] = useState(false);

  const options = useMemo(() => {
    if (step === 0) return quizOccasions;
    if (step === 1) return quizRecipients;
    if (step === 2) return quizBudgets;
    return quizStyles;
  }, [step]);

  const currentKey = steps[step].key;
  const selected = answers[currentKey];
  const recommendation = finished ? getRecommendation(answers) : null;

  const selectOption = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentKey]: value }));
  };

  const next = () => {
    if (!selected) return;
    if (step < steps.length - 1) {
      setStep((s) => s + 1);
      return;
    }
    setFinished(true);
  };

  const back = () => {
    if (finished) {
      setFinished(false);
      return;
    }
    setStep((s) => Math.max(0, s - 1));
  };

  const reset = () => {
    setAnswers(emptyAnswers);
    setStep(0);
    setFinished(false);
  };

  const requestUrl = recommendation
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hi Bloom & Beyond! I'd love to request: ${recommendation.title} (${recommendation.priceRange}). Occasion: ${answers.occasion}. For: ${answers.recipient}. Style: ${answers.style}.`,
      )}`
    : "#";

  return (
    <section
      id="quiz"
      className="section-padding bg-beige/80 py-24 backdrop-blur-sm sm:py-28 dark:bg-[#1a1a1a]/88"
    >
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Personalized"
          title="Find Your Perfect Surprise"
          description="Answer a few elegant questions and we’ll recommend a package made for your moment."
        />

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-[var(--shadow-lift)] backdrop-blur-xl sm:p-10 dark:border-white/10 dark:bg-white/5">
          {!finished && (
            <div className="mb-8">
              <div className="mb-3 flex items-center justify-between text-xs font-semibold tracking-[0.16em] text-muted uppercase dark:text-white/55">
                <span>
                  Step {step + 1} of {steps.length}
                </span>
                <span>{Math.round(((step + 1) / steps.length) * 100)}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-charcoal/10 dark:bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-sage to-gold"
                  initial={false}
                  animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="font-display text-3xl text-charcoal dark:text-white">
                  {steps[step].title}
                </h3>
                <div className="mt-7 flex flex-wrap gap-3">
                  {options.map((option) => (
                    <OptionChip
                      key={option}
                      label={option}
                      selected={selected === option}
                      onClick={() => selectOption(option)}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              recommendation && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45 }}
                  className="grid gap-8 lg:grid-cols-[1.05fr_1fr]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] sm:aspect-[5/4] lg:aspect-auto lg:min-h-[360px]">
                    <Image
                      src={recommendation.image}
                      alt={recommendation.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.16em] text-gold uppercase">
                      <Sparkles size={16} />
                      Recommended Package
                    </p>
                    <h3 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl dark:text-white">
                      {recommendation.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted dark:text-white/70">
                      {recommendation.summary}
                    </p>
                    <p className="mt-6 text-sm font-semibold text-charcoal dark:text-white">
                      Includes
                    </p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {recommendation.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted dark:text-white/70"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-sage-dark dark:text-sage"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 rounded-2xl bg-beige/80 px-4 py-3 dark:bg-white/5">
                      <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase dark:text-white/50">
                        Price Range
                      </p>
                      <p className="mt-1 font-display text-2xl text-charcoal dark:text-white">
                        {recommendation.priceRange}
                      </p>
                      <p className="text-sm text-muted dark:text-white/60">
                        Estimated budget based on your answers
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={requestUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gold-soft"
                      >
                        Request This Package
                      </a>
                      <button
                        type="button"
                        onClick={reset}
                        className="rounded-full border border-charcoal/15 px-6 py-3 text-sm font-semibold text-charcoal transition hover:bg-white dark:border-white/20 dark:text-white dark:hover:bg-white/10"
                      >
                        Retake Quiz
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>

          {!finished && (
            <div className="mt-10 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-charcoal transition enabled:hover:bg-white disabled:opacity-40 dark:text-white dark:enabled:hover:bg-white/10"
              >
                <ArrowLeft size={16} />
                Back
              </button>
              <button
                type="button"
                onClick={next}
                disabled={!selected}
                className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white transition enabled:hover:bg-gold disabled:opacity-40 dark:bg-gold dark:text-charcoal dark:enabled:hover:bg-gold-soft"
              >
                {step === steps.length - 1 ? "See Recommendation" : "Continue"}
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {finished && (
            <div className="mt-6">
              <button
                type="button"
                onClick={back}
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-charcoal dark:hover:text-white"
              >
                <ArrowLeft size={16} />
                Edit answers
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
