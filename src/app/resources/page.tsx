import { Container, PageHeader } from "@/components/Container";
import { Phone, ExternalLink, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Burbank-area homeless services, related mutual aid networks, and recommended reading.",
};

const services: { name: string; phone?: string; url?: string; note?: string }[] = [
  {
    name: "Burbank Temporary Aid Center (BTAC)",
    phone: "(818) 848-2822",
    note: "Food pantry, hygiene, case management. Established 1974.",
  },
  {
    name: "City of Burbank Homeless Solution Hotline",
    phone: "(818) 238-5888",
  },
  {
    name: "Family Service Agency of Burbank",
    phone: "(818) 845-7671",
    note: "Counseling, family support, basic needs.",
  },
  {
    name: "Ascencia Access Center (Glendale)",
    phone: "(818) 246-7900",
    note: "Shelter, housing navigation, drop-in services.",
  },
  {
    name: "Home Again LA",
    phone: "(818) 847-1547",
    note: "Family shelter and support services.",
  },
  {
    name: "Salvation Army Burbank",
    phone: "(818) 845-7214",
  },
  {
    name: "Burbank Police Mental Health Evaluation Team (MHET)",
    phone: "(818) 238-3391",
    note: "Co-response team for mental health calls.",
  },
];

const orgs: { name: string; url: string; note: string }[] = [
  {
    name: "Burbank Tenants Union",
    url: "https://burbanktenants.com",
    note: "Volunteer-run renter-rights group. Meets Thursdays at 7:30 PM, online unless specified.",
  },
  {
    name: "Mutual Aid LA Network",
    url: "https://mutualaidla.org",
    note: "Directory of mutual aid groups across LA County.",
  },
  {
    name: "San Fernando Valley Mutual Aid",
    url: "https://www.instagram.com/sfvmutualaid/",
    note: "Sister group serving the Valley.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="If you need help, or want to help — start here."
        lede="A working list of Burbank-area services for unhoused neighbors, related mutual aid networks, and reading we recommend."
      />

      <Container className="py-14 sm:py-20 space-y-16">
        {/* Services */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-forest-dark)] sm:text-3xl">
            Burbank-area services
          </h2>
          <p className="mt-2 max-w-2xl text-base text-[var(--color-muted)]">
            We don&apos;t run any of these — but they&apos;re the institutions
            we work alongside. Call ahead; hours change.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <li
                key={s.name}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] p-5"
              >
                <h3 className="text-lg font-semibold text-[var(--color-forest-dark)]">
                  {s.name}
                </h3>
                {s.phone ? (
                  <a
                    href={`tel:${s.phone.replace(/[^\d+]/g, "")}`}
                    className="mt-2 inline-flex items-center gap-2 text-base font-medium text-[var(--color-amber-dark)] hover:underline"
                  >
                    <Phone aria-hidden="true" className="size-4" />
                    {s.phone}
                  </a>
                ) : null}
                {s.note ? (
                  <p className="mt-2 text-sm text-[var(--color-charcoal-soft)]">
                    {s.note}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        {/* Related organizations */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-forest-dark)] sm:text-3xl">
            Related organizations
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {orgs.map((o) => (
              <li
                key={o.url}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] p-5"
              >
                <h3 className="text-lg font-semibold text-[var(--color-forest-dark)]">
                  {o.name}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-charcoal-soft)]">
                  {o.note}
                </p>
                <a
                  href={o.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-amber-dark)] hover:underline"
                >
                  Visit{" "}
                  <ExternalLink aria-hidden="true" className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Reading */}
        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-forest-dark)] sm:text-3xl">
            Recommended reading
          </h2>
          <div className="mt-6 rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] p-6">
            <BookOpen
              aria-hidden="true"
              className="size-6 text-[var(--color-amber-dark)]"
            />
            <h3 className="mt-3 text-lg font-semibold text-[var(--color-forest-dark)]">
              <em>
                Mutual Aid: Building Solidarity During This Crisis (And the
                Next)
              </em>
            </h3>
            <p className="text-sm text-[var(--color-muted)]">
              By Dean Spade · Verso Books · 2020
            </p>
            <p className="mt-3 max-w-2xl text-base text-[var(--color-charcoal-soft)]">
              The clearest contemporary primer on what mutual aid is, how
              groups stay healthy, and how to avoid the traps of charity
              thinking.
            </p>
          </div>
        </section>
      </Container>
    </>
  );
}
