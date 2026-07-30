"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, ImagePlus, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { requestOccasions } from "@/data/features";
import { WHATSAPP_NUMBER } from "@/data/content";
import {
  Field,
  SectionHeader,
  inputClassName,
} from "@/components/ui/FeatureUI";

type FormState = {
  customerName: string;
  phone: string;
  email: string;
  occasion: string;
  eventDate: string;
  location: string;
  budget: string;
  recipientName: string;
  relationship: string;
  vision: string;
  specialRequests: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  customerName: "",
  phone: "",
  email: "",
  occasion: "",
  eventDate: "",
  location: "",
  budget: "",
  recipientName: "",
  relationship: "",
  vision: "",
  specialRequests: "",
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.customerName.trim()) errors.customerName = "Please enter your name.";
  if (!form.phone.trim()) errors.phone = "Please enter a phone number.";
  else if (!/^[+\d\s()-]{7,}$/.test(form.phone.trim()))
    errors.phone = "Enter a valid phone number.";
  if (!form.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!form.occasion) errors.occasion = "Please choose an occasion.";
  if (!form.eventDate) errors.eventDate = "Please select a date.";
  if (!form.location.trim()) errors.location = "Please share the location.";
  if (!form.budget) errors.budget = "Please choose a budget.";
  if (!form.recipientName.trim())
    errors.recipientName = "Please enter the recipient’s name.";
  if (!form.relationship.trim())
    errors.relationship = "Please share your relationship.";
  if (!form.vision.trim() || form.vision.trim().length < 12)
    errors.vision = "Tell us a little more about your vision.";
  return errors;
}

export function SurpriseRequestForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [previews, setPreviews] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setFormError("");
  };

  const onFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []).slice(0, 4);
    if (!files.length) return;

    const readers = files.map(
      (file) =>
        new Promise<string>((resolve, reject) => {
          if (!file.type.startsWith("image/")) {
            reject(new Error("Only image files are allowed."));
            return;
          }
          if (file.size > 5 * 1024 * 1024) {
            reject(new Error("Each image must be under 5MB."));
            return;
          }
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.onerror = () => reject(new Error("Could not read image."));
          reader.readAsDataURL(file);
        }),
    );

    Promise.all(readers)
      .then((urls) => {
        setPreviews((prev) => [...prev, ...urls].slice(0, 4));
        setFormError("");
      })
      .catch((err: Error) => setFormError(err.message));

    e.target.value = "";
  };

  const removePreview = (index: number) => {
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const whatsappUrl = useMemo(() => {
    const message = [
      "New Surprise Request from the website:",
      `Name: ${form.customerName}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Occasion: ${form.occasion}`,
      `Date: ${form.eventDate}`,
      `Location: ${form.location}`,
      `Budget: ${form.budget}`,
      `Recipient: ${form.recipientName} (${form.relationship})`,
      `Vision: ${form.vision}`,
      form.specialRequests ? `Special requests: ${form.specialRequests}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [form]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setFormError("Please complete the highlighted fields.");
      return;
    }

    setSubmitting(true);
    setFormError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setSuccess(true);
      setForm(initialForm);
      setPreviews([]);
    } catch {
      setFormError("Something went wrong. Please try again or chat on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="request"
      className="section-padding bg-beige py-24 sm:py-28 dark:bg-[#1a1a1a]"
    >
      <div className="container-luxury">
        <SectionHeader
          eyebrow="Plan With Us"
          title="Send a Surprise Request"
          description="Share your vision and we’ll craft a moment they’ll never forget."
        />

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-[var(--shadow-lift)] backdrop-blur-xl sm:p-10 dark:border-white/10 dark:bg-white/5">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  className="mx-auto mb-5 inline-flex rounded-full bg-sage/25 p-4 text-sage-dark dark:text-sage"
                >
                  <CheckCircle2 size={36} />
                </motion.div>
                <h3 className="font-display text-3xl text-charcoal dark:text-white">
                  Thank you for trusting Bloom &amp; Beyond.
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-muted dark:text-white/70">
                  We&apos;ll review your request and contact you on WhatsApp
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="mt-8 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-white transition hover:bg-gold dark:bg-gold dark:text-charcoal"
                >
                  Send Another Request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                className="grid gap-5 sm:grid-cols-2"
                noValidate
              >
                <Field
                  label="Customer Name"
                  htmlFor="customerName"
                  error={errors.customerName}
                  required
                >
                  <input
                    id="customerName"
                    className={inputClassName}
                    value={form.customerName}
                    onChange={(e) => update("customerName", e.target.value)}
                    autoComplete="name"
                  />
                </Field>

                <Field
                  label="Phone Number"
                  htmlFor="phone"
                  error={errors.phone}
                  required
                >
                  <input
                    id="phone"
                    className={inputClassName}
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    autoComplete="tel"
                    placeholder="+90 ..."
                  />
                </Field>

                <Field
                  label="Email"
                  htmlFor="email"
                  error={errors.email}
                  required
                >
                  <input
                    id="email"
                    type="email"
                    className={inputClassName}
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    autoComplete="email"
                  />
                </Field>

                <Field
                  label="Occasion"
                  htmlFor="occasion"
                  error={errors.occasion}
                  required
                >
                  <select
                    id="occasion"
                    className={inputClassName}
                    value={form.occasion}
                    onChange={(e) => update("occasion", e.target.value)}
                  >
                    <option value="">Select occasion</option>
                    {requestOccasions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label="Date of Event"
                  htmlFor="eventDate"
                  error={errors.eventDate}
                  required
                >
                  <input
                    id="eventDate"
                    type="date"
                    className={inputClassName}
                    value={form.eventDate}
                    onChange={(e) => update("eventDate", e.target.value)}
                  />
                </Field>

                <Field
                  label="Location"
                  htmlFor="location"
                  error={errors.location}
                  required
                >
                  <input
                    id="location"
                    className={inputClassName}
                    value={form.location}
                    onChange={(e) => update("location", e.target.value)}
                    placeholder="City, hotel, or home"
                  />
                </Field>

                <Field
                  label="Budget"
                  htmlFor="budget"
                  error={errors.budget}
                  required
                >
                  <select
                    id="budget"
                    className={inputClassName}
                    value={form.budget}
                    onChange={(e) => update("budget", e.target.value)}
                  >
                    <option value="">Select budget</option>
                    <option value="Under €50">Under €50</option>
                    <option value="€50–100">€50–100</option>
                    <option value="€100–250">€100–250</option>
                    <option value="€250+">€250+</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </Field>

                <Field
                  label="Recipient Name"
                  htmlFor="recipientName"
                  error={errors.recipientName}
                  required
                >
                  <input
                    id="recipientName"
                    className={inputClassName}
                    value={form.recipientName}
                    onChange={(e) => update("recipientName", e.target.value)}
                  />
                </Field>

                <Field
                  label="Relationship to Recipient"
                  htmlFor="relationship"
                  error={errors.relationship}
                  required
                >
                  <input
                    id="relationship"
                    className={inputClassName}
                    value={form.relationship}
                    onChange={(e) => update("relationship", e.target.value)}
                    placeholder="Partner, parent, friend..."
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field
                    label="Describe Your Vision"
                    htmlFor="vision"
                    error={errors.vision}
                    required
                  >
                    <textarea
                      id="vision"
                      rows={4}
                      className={`${inputClassName} resize-y`}
                      value={form.vision}
                      onChange={(e) => update("vision", e.target.value)}
                      placeholder="Colors, mood, must-have details..."
                    />
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <Field
                    label="Special Requests"
                    htmlFor="specialRequests"
                    error={errors.specialRequests}
                  >
                    <textarea
                      id="specialRequests"
                      rows={3}
                      className={`${inputClassName} resize-y`}
                      value={form.specialRequests}
                      onChange={(e) =>
                        update("specialRequests", e.target.value)
                      }
                      placeholder="Allergies, secrecy notes, timing preferences..."
                    />
                  </Field>
                </div>

                <div className="sm:col-span-2">
                  <p className="mb-2 text-sm font-semibold text-charcoal dark:text-white">
                    Upload Inspiration Images
                  </p>
                  <label className="flex cursor-pointer flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-charcoal/20 bg-beige/50 px-4 py-8 text-center transition hover:border-gold dark:border-white/20 dark:bg-white/5">
                    <ImagePlus className="mb-2 text-gold" size={24} />
                    <span className="text-sm font-semibold text-charcoal dark:text-white">
                      Add up to 4 images
                    </span>
                    <span className="mt-1 text-xs text-muted dark:text-white/55">
                      JPG or PNG, max 5MB each
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="sr-only"
                      onChange={onFiles}
                    />
                  </label>

                  {previews.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {previews.map((src, index) => (
                        <div
                          key={`${src.slice(0, 24)}-${index}`}
                          className="relative aspect-square overflow-hidden rounded-2xl"
                        >
                          <Image
                            src={src}
                            alt={`Inspiration upload ${index + 1}`}
                            fill
                            unoptimized
                            className="object-cover"
                          />
                          <button
                            type="button"
                            aria-label="Remove image"
                            onClick={() => removePreview(index)}
                            className="absolute top-2 right-2 rounded-full bg-charcoal/70 p-1 text-white"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {formError && (
                  <p
                    role="alert"
                    className="sm:col-span-2 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-300"
                  >
                    {formError}
                  </p>
                )}

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-gold-soft disabled:opacity-60 sm:w-auto"
                  >
                    {submitting ? "Sending..." : "Submit Surprise Request"}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
