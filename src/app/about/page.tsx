import { Container, PageHeader } from "@/components/Container";
import { Replace } from "@/components/Replace";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Burbank Mutual Aid started, what mutual aid actually means, and the principles behind our Sunday distributions.",
};

const timeline = [
  {
    when: "Late 2024",
    what: "MJ Kinney meets D — a 60-year-old unhoused man living near the Central Library — and begins helping out informally.",
  },
  {
    when: "Throughout 2025",
    what: "Friends and neighbors join in. Sunday and Friday distributions start outside the library; a small core group forms.",
  },
  {
    when: "February 27, 2026",
    what: "City of Burbank issues overnight citations to people sleeping outside the library. The incident galvanizes the group.",
  },
  {
    when: "March 2026",
    what: "Burbank Mutual Aid speaks at City Council. Burbank Leader covers the work.",
  },
  {
    when: "April 17, 2026",
    what: "Group consolidates to a single weekly distribution on Sundays at 7:30 PM to protect against burnout while we grow the volunteer base.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A small group of neighbors, showing up consistently."
        lede="Burbank Mutual Aid started with one relationship and grew into a weekly practice."
      />

      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-dark)]">
            Origin
          </p>
          <div className="space-y-5 text-lg leading-relaxed text-[var(--color-charcoal)] md:col-span-2">
            <p>
              The group began with MJ Kinney, a Burbank resident who lives near
              the Central Library. MJ kept running into a 60-year-old unhoused
              man we'll call D, sitting outside the library, and started
              bringing him food, water, and conversation. One person became a
              handful of friends. A handful became a Sunday-night routine.
            </p>
            <p>
              We're not a charity. We're not a 501(c)(3). We're a volunteer
              community that believes <em>consistency builds trust, and trust
              builds understanding</em>. From that foundation, we work alongside
              the people most affected by a system that has failed — learning
              together, taking collective action, and pushing for real change.
            </p>
            <p className="text-base text-[var(--color-muted)]">
              <Replace id="mj-bio">
                {`{REPLACE: MJ's bio — a few sentences from MJ in her own words}`}
              </Replace>
              <br />
              <Replace id="team-photo">
                {`{REPLACE: Team photo from a Sunday distribution}`}
              </Replace>
            </p>
          </div>
        </div>
      </Container>

      {/* What is mutual aid */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-cream-dark)]/50">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-dark)]">
              What is mutual aid?
            </p>
            <div className="space-y-6 text-lg leading-relaxed text-[var(--color-charcoal)] md:col-span-2">
              <p>
                Mutual aid is collective coordination to meet each other's
                needs. The phrase was coined by Peter Kropotkin in his 1902 book{" "}
                <em>Mutual Aid: A Factor of Evolution</em>, where he argued that
                cooperation — not competition — has driven human survival.
              </p>
              <p>
                Where charity is vertical (top-down, conditional, with a clear
                line between giver and receiver), mutual aid is horizontal:
                peer-to-peer, unconditional, and built on the recognition that
                we all need each other at different times.
              </p>
              <blockquote className="border-l-4 border-[var(--color-amber)] bg-[var(--color-cream)] p-6 text-xl italic leading-relaxed text-[var(--color-forest-dark)]">
                "I don't believe in charity. I believe in solidarity. Charity is
                vertical. It goes from the top to the bottom. Solidarity is
                horizontal. It respects the other person."
                <footer className="mt-3 text-sm not-italic text-[var(--color-muted)]">
                  — Eduardo Galeano
                </footer>
              </blockquote>
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-forest-dark)]">
                  A short, partial history
                </h3>
                <ul className="mt-4 space-y-3 text-base">
                  <li>
                    <strong>1800s — </strong>Chinese immigrant{" "}
                    <em>huiguan</em> societies in the US pool resources for
                    members shut out of mainstream institutions.
                  </li>
                  <li>
                    <strong>1960s — </strong>The Black Panthers' free breakfast
                    program feeds tens of thousands of children daily, becoming
                    a model for community-led care.
                  </li>
                  <li>
                    <strong>1980s — </strong>AIDS-crisis mutual aid networks
                    deliver care, food, and housing when institutions refused
                    to.
                  </li>
                  <li>
                    <strong>2020 — </strong>Pandemic mutual aid groups go from
                    a handful nationwide to more than 800 in a few months.
                  </li>
                </ul>
                <p className="mt-5 text-base text-[var(--color-muted)]">
                  For a deeper read, we recommend Dean Spade's{" "}
                  <em>
                    Mutual Aid: Building Solidarity During This Crisis (And the
                    Next)
                  </em>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-dark)]">
            How we got here
          </p>
          <ol className="space-y-6 md:col-span-2">
            {timeline.map((t) => (
              <li
                key={t.when}
                className="grid gap-2 border-l-2 border-[var(--color-line)] pl-5 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:border-l-0 sm:pl-0"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-amber-dark)]">
                  {t.when}
                </p>
                <p className="text-base leading-relaxed text-[var(--color-charcoal)]">
                  {t.what}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </>
  );
}
