"use server";

import { z } from "zod";
import { Resend } from "resend";

const VolunteerSchema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Please enter a valid email").max(200),
  phone: z.string().max(40).optional().or(z.literal("")),
  availability: z.array(z.string()).optional().default([]),
  skills: z.array(z.string()).optional().default([]),
  referralSource: z.string().max(80).optional().or(z.literal("")),
  notes: z.string().max(2000).optional().or(z.literal("")),
  // Honeypot — should be empty for humans
  website: z.string().max(0).optional().or(z.literal("")),
});

export type VolunteerFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

export async function submitVolunteer(
  _prev: VolunteerFormState,
  formData: FormData
): Promise<VolunteerFormState> {
  const parsed = VolunteerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    availability: formData.getAll("availability").map(String),
    skills: formData.getAll("skills").map(String),
    referralSource: formData.get("referralSource") ?? "",
    notes: formData.get("notes") ?? "",
    website: formData.get("website") ?? "",
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0]?.toString() ?? "form";
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  // Honeypot triggered — silently succeed.
  if (parsed.data.website) {
    return { status: "success" };
  }

  const data = parsed.data;
  const adminEmail = process.env.ADMIN_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;
  const fromAddress = process.env.RESEND_FROM ?? "onboarding@resend.dev";

  // STUB MODE: no Resend key yet — log and succeed. The form is still useful
  // in dev/preview, and MJ can wire keys later via Vercel env vars.
  if (!resendKey || !adminEmail) {
    console.info("[volunteer-signup] (stub mode — no email sent)", {
      ...data,
      receivedAt: new Date().toISOString(),
    });
    return { status: "success" };
  }

  try {
    const resend = new Resend(resendKey);
    const lines = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      data.availability.length
        ? `Availability: ${data.availability.join(", ")}`
        : null,
      data.skills.length ? `Skills/interests: ${data.skills.join(", ")}` : null,
      data.referralSource ? `How they heard: ${data.referralSource}` : null,
      data.notes ? `\nNotes:\n${data.notes}` : null,
    ].filter(Boolean) as string[];

    await resend.emails.send({
      from: `Burbank Mutual Aid <${fromAddress}>`,
      to: [adminEmail],
      replyTo: data.email,
      subject: `New volunteer signup — ${data.name}`,
      text: lines.join("\n"),
    });
  } catch (err) {
    console.error("[volunteer-signup] Resend error", err);
    return {
      status: "error",
      message:
        "We couldn't send the notification email. Please email us directly and we'll get you on the list.",
    };
  }

  return { status: "success" };
}
