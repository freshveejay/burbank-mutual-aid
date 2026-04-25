import { Container, PageHeader } from "@/components/Container";
import { VolunteerForm } from "@/components/VolunteerForm";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Join Burbank Mutual Aid. Sign up to volunteer with our weekly Sunday distributions outside the Burbank Central Library.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="Come show up with us."
        lede={`Tell us a bit about yourself and we'll be in touch. We meet ${site.event.cadence.toLowerCase()} at ${site.event.time} at the ${site.event.place}.`}
      />
      <Container className="py-14 sm:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <aside className="md:col-span-1">
            <h2 className="text-lg font-semibold text-[var(--color-forest-dark)]">
              What to expect
            </h2>
            <ul className="mt-4 space-y-3 text-base text-[var(--color-charcoal-soft)]">
              <li>
                We&apos;ll review your signup and email you within 48 hours.
              </li>
              <li>
                If it&apos;s a fit, we&apos;ll share location details and a
                shift you can join.
              </li>
              <li>
                You don&apos;t need experience. Just show up consistently and
                lead with respect.
              </li>
              <li>
                Questions before you sign up? Email{" "}
                <a
                  className="text-[var(--color-amber-dark)] underline underline-offset-4"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
                .
              </li>
            </ul>
          </aside>
          <div className="md:col-span-2">
            <VolunteerForm />
          </div>
        </div>
      </Container>
    </>
  );
}
