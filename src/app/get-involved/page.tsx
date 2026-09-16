import { Container, PageHeader } from "@/components/Container";
import { ExternalLink } from "lucide-react";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join Burbank Mutual Aid. Sign up to volunteer with our weekly Sunday evening distributions in downtown Burbank.",
};

// The signup form is a Google Form managed by the crew. To swap it, change
// this one URL.
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdGC1TWUQqJtoLdfPZ7dPEvYp7pa_xIkDexPu1vVytvy16shg/viewform";
const FORM_EMBED_URL = `${FORM_URL}?embedded=true`;

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get involved"
        title="Come show up with us."
        lede={`Tell us a bit about yourself and we'll be in touch. Next Distribution: ${site.event.summary}.`}
      />
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <aside className="space-y-10 md:col-span-1">
            <section>
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
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-cream)] px-5 py-2.5 text-sm font-medium text-[var(--color-forest-dark)] hover:bg-[var(--color-cream-dark)]"
              >
                Open form in a new tab{" "}
                <ExternalLink aria-hidden="true" className="size-3.5" />
              </a>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[var(--color-forest-dark)]">
                Related organizations
              </h2>
              <ul className="mt-4 space-y-4">
                {site.orgs.map((o) => (
                  <li
                    key={o.url}
                    className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] p-4"
                  >
                    <h3 className="text-base font-semibold text-[var(--color-forest-dark)]">
                      {o.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-charcoal-soft)]">
                      {o.note}
                    </p>
                    <a
                      href={o.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-amber-dark)] hover:underline"
                    >
                      Visit{" "}
                      <ExternalLink aria-hidden="true" className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
          <div className="md:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)]">
              <iframe
                src={FORM_EMBED_URL}
                title="Burbank Mutual Aid volunteer signup form"
                className="w-full"
                style={{ height: "1800px", border: 0 }}
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
            <p className="mt-3 text-sm text-[var(--color-muted)]">
              Form not loading? Use the button on the left to open it in a new
              tab.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
