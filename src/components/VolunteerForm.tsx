"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitVolunteer, type VolunteerFormState } from "@/app/volunteer/actions";

const AVAILABILITY = [
  { value: "sundays", label: "Sundays (7:30 PM)" },
  { value: "weekday-prep", label: "Weekday prep / errands" },
  { value: "either", label: "Either / flexible" },
];

const SKILLS = [
  { value: "cooking", label: "Cooking / food prep" },
  { value: "driving", label: "Driving / pickups" },
  { value: "organizing", label: "Organizing / coordination" },
  { value: "social-media", label: "Social media" },
  { value: "fundraising", label: "Fundraising" },
  { value: "first-aid", label: "Medical / first aid" },
  { value: "spanish", label: "Spanish speaker" },
  { value: "other", label: "Other (tell us in notes)" },
];

const REFERRAL = [
  "A friend",
  "Social media",
  "Burbank Leader",
  "An event / distribution",
  "Burbank Tenants Union (BTU)",
  "Other",
];

const initial: VolunteerFormState = { status: "idle" };

export function VolunteerForm() {
  const [state, formAction] = useActionState(submitVolunteer, initial);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-[var(--color-forest)]/30 bg-[var(--color-forest)]/5 p-8"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2
            aria-hidden="true"
            className="size-6 text-[var(--color-forest)]"
          />
          <div>
            <h2 className="text-2xl font-semibold text-[var(--color-forest-dark)]">
              Thanks — we got it.
            </h2>
            <p className="mt-2 text-base text-[var(--color-charcoal-soft)]">
              We&apos;ll be in touch within 48 hours with details about Sunday
              and how to plug in. Welcome.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const fieldErrors =
    state.status === "error" ? state.fieldErrors ?? {} : {};

  return (
    <form
      action={formAction}
      className="space-y-6"
      aria-describedby={state.status === "error" ? "form-error" : undefined}
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <Field
        label="Name"
        name="name"
        required
        autoComplete="name"
        error={fieldErrors.name}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        autoComplete="email"
        error={fieldErrors.email}
      />
      <Field
        label="Phone (optional)"
        name="phone"
        type="tel"
        autoComplete="tel"
        error={fieldErrors.phone}
      />

      <CheckboxGroup
        label="Availability"
        name="availability"
        options={AVAILABILITY}
        hint="Pick whatever fits. We meet Sundays at 7:30 PM, but there's plenty of weekday work too."
      />

      <CheckboxGroup
        label="Skills / interests"
        name="skills"
        options={SKILLS}
        hint="No skill required to volunteer — these just help us match you."
      />

      <div>
        <label
          htmlFor="referralSource"
          className="block text-sm font-medium text-[var(--color-charcoal)]"
        >
          How did you hear about us?
        </label>
        <select
          id="referralSource"
          name="referralSource"
          defaultValue=""
          className="mt-2 w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-cream)] px-3 py-2 text-base text-[var(--color-charcoal)] focus:border-[var(--color-amber)]"
        >
          <option value="">— Select one —</option>
          {REFERRAL.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-[var(--color-charcoal)]"
        >
          Anything else you&apos;d like us to know?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="mt-2 w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-cream)] px-3 py-2 text-base text-[var(--color-charcoal)] focus:border-[var(--color-amber)]"
        />
      </div>

      {state.status === "error" ? (
        <p
          id="form-error"
          role="alert"
          className="flex items-start gap-2 rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-900"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 size-4" />
          {state.message}
        </p>
      ) : null}

      <SubmitButton />

      <p className="text-sm text-[var(--color-muted)]">
        We review every signup before sharing distribution details — this isn&apos;t
        about gatekeeping, it&apos;s about keeping our neighbors safe. We&apos;ll
        reach out within 48 hours.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-[var(--color-charcoal)]"
      >
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className="mt-2 w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-cream)] px-3 py-2 text-base text-[var(--color-charcoal)] focus:border-[var(--color-amber)]"
      />
      {error ? (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function CheckboxGroup({
  label,
  name,
  options,
  hint,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  hint?: string;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-[var(--color-charcoal)]">
        {label}
      </legend>
      {hint ? (
        <p className="mt-1 text-sm text-[var(--color-muted)]">{hint}</p>
      ) : null}
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {options.map((opt) => (
          <li key={opt.value}>
            <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-[var(--color-line)] bg-[var(--color-cream)] px-3 py-2 hover:bg-[var(--color-cream-dark)]/60">
              <input
                type="checkbox"
                name={name}
                value={opt.value}
                className="mt-1 size-4 accent-[var(--color-forest)]"
              />
              <span className="text-base text-[var(--color-charcoal)]">
                {opt.label}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-full bg-[var(--color-forest)] px-6 py-3 text-base font-medium text-[var(--color-cream)] hover:bg-[var(--color-forest-dark)] disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 aria-hidden="true" className="size-4 animate-spin" />
          Sending…
        </>
      ) : (
        "Send my info"
      )}
    </button>
  );
}
