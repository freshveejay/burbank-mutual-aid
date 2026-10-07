import { Container, PageHeader } from "@/components/Container";
import { ArrowRight, Newspaper } from "lucide-react";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who Burbank Mutual Aid is, how we got here, and press coverage of our work.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A small group of neighbors, showing up consistently."
        lede="Burbank Mutual Aid volunteers come together weekly to make community connections and help meet basic survival needs."
      />

      {/* Origin */}
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-dark)]">
            Origin
          </p>
          <div className="space-y-5 text-lg leading-relaxed text-[var(--color-charcoal)] md:col-span-2">
            <p>
              We&apos;re not a charity. We&apos;re a group of volunteers that
              wants to build a resilient community that can withstand turbulent
              times. We work alongside the people most affected by a system
              that has failed — learning together, taking collective action,
              and pushing for real change.
            </p>
          </div>
        </div>
      </Container>

      {/* How we got here */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-cream-dark)]/50">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-dark)]">
              How we got here
            </p>
            <div className="space-y-5 text-lg leading-relaxed text-[var(--color-charcoal)] md:col-span-2">
              <p>
                A group of community members noticed that Burbank was severely
                lacking in services for the unhoused and decided to create an
                offshoot from San Fernando Valley Mutual Aid (SFVMA). We started
                with canvassing, moved to food, and as we continued to show up,
                realized hygiene supplies and clothing were sorely needed.
              </p>
            </div>
          </div>
        </Container>
      </section>
      {/* Press — moved here from the former /press page */}
      <section id="press" className="border-t border-[var(--color-line)]">
        <Container className="py-14 sm:py-20">
          <div className="flex items-center gap-3">
            <Newspaper
              aria-hidden="true"
              className="size-5 text-[var(--color-amber-dark)]"
            />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-dark)]">
              Press
            </p>
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-forest-dark)] sm:text-3xl">
            Coverage of our work
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {site.press.map((p) => (
              <li
                key={p.url}
                className="flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] p-6"
              >
                <p className="text-sm text-[var(--color-muted)]">
                  {p.outlet} · {p.date} · {p.author}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-[var(--color-forest-dark)]">
                  {p.title}
                </h3>
                <p className="mt-3 flex-1 text-base text-[var(--color-charcoal-soft)]">
                  {p.excerpt}
                </p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-amber-dark)] hover:underline"
                >
                  Read on {p.outlet}{" "}
                  <ArrowRight aria-hidden="true" className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
