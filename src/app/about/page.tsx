import { Container, PageHeader } from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who Burbank Mutual Aid is and how we got here.",
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
    </>
  );
}
