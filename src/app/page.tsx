import Link from "next/link";
import {
  ArrowRight,
  CalendarHeart,
  HandHeart,
  ShoppingBag,
  Megaphone,
  MapPin,
  Newspaper,
} from "lucide-react";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--color-cream)] via-[var(--color-cream-dark)] to-[#e8d9b6]"
        />
        <div
          aria-hidden="true"
          className="absolute -top-32 right-[-10%] -z-10 size-[28rem] rounded-full bg-[var(--color-amber)]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 left-[-10%] -z-10 size-[28rem] rounded-full bg-[var(--color-forest)]/15 blur-3xl"
        />
        <Container className="py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-dark)]">
            Burbank, California
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--color-forest-dark)] sm:text-6xl md:text-7xl">
            Solidarity, not charity.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-charcoal-soft)] sm:text-xl">
            Neighbors taking care of neighbors — every Sunday night, outside the
            Burbank Central Library. Food, clothing, hygiene, and the kind of
            consistency that builds trust.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-forest)] px-6 py-3 text-base font-medium text-[var(--color-cream)] hover:bg-[var(--color-forest-dark)]"
            >
              Join Us <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-forest)]/30 bg-[var(--color-cream)]/70 px-6 py-3 text-base font-medium text-[var(--color-forest-dark)] hover:bg-[var(--color-cream)]"
            >
              What is mutual aid?
            </Link>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-dark)]">
              Who We Are
            </p>
            <p className="text-xl leading-relaxed text-[var(--color-charcoal)] md:col-span-2">
              {site.mission}
            </p>
          </div>
        </Container>
      </section>

      {/* Next event */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-cream-dark)]/50">
        <Container className="py-14 sm:py-16">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--color-forest)] text-[var(--color-cream)]">
              <CalendarHeart aria-hidden="true" className="size-6" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-dark)]">
                Next distribution
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-[var(--color-forest-dark)] sm:text-3xl">
                {site.event.cadence} · {site.event.time}
              </h2>
              <p className="mt-3 inline-flex items-start gap-2 text-base text-[var(--color-charcoal-soft)]">
                <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0" />
                <span>
                  {site.event.place}
                  <br />
                  <span className="text-sm text-[var(--color-muted)]">
                    {site.event.address}
                  </span>
                </span>
              </p>
              <p className="mt-3 max-w-2xl text-sm text-[var(--color-muted)]">
                {site.event.note}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* How to help */}
      <section>
        <Container className="py-16 sm:py-20">
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-forest-dark)] sm:text-4xl">
            How to help
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-[var(--color-charcoal-soft)]">
            Three ways to plug in. Pick whichever fits your week.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            <HelpCard
              icon={<HandHeart aria-hidden="true" className="size-6" />}
              title="Volunteer"
              body="Show up Sunday nights, help prep and distribute, build relationships with our neighbors."
              href="/volunteer"
              cta="Sign up"
            />
            <HelpCard
              icon={<ShoppingBag aria-hidden="true" className="size-6" />}
              title="Donate items"
              body="Socks, blankets, hygiene, granola bars, water. Reach out and we'll share the current needs list."
              href={`mailto:${site.email}?subject=Donating%20items`}
              cta="Email us"
            />
            <HelpCard
              icon={<Megaphone aria-hidden="true" className="size-6" />}
              title="Spread the word"
              body="Follow us on Instagram, share with neighbors, and tell folks they're welcome on a Sunday."
              href={site.instagram}
              cta="Follow on Instagram"
              external
            />
          </ul>
        </Container>
      </section>

      {/* Press */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-cream-dark)]/40">
        <Container className="py-14 sm:py-16">
          <div className="flex items-center gap-3">
            <Newspaper
              aria-hidden="true"
              className="size-5 text-[var(--color-amber-dark)]"
            />
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-dark)]">
              In the press
            </p>
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-forest-dark)] sm:text-3xl">
            Coverage of our work in Burbank
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {site.press.map((p) => (
              <li
                key={p.url}
                className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] p-6"
              >
                <p className="text-sm text-[var(--color-muted)]">
                  {p.outlet} · {p.date}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--color-charcoal)]">
                  {p.title}
                </h3>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-amber-dark)] hover:underline"
                >
                  Read article{" "}
                  <ArrowRight aria-hidden="true" className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm">
            <Link
              href="/press"
              className="text-[var(--color-forest-dark)] underline underline-offset-4"
            >
              See all press →
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
}

function HelpCard({
  icon,
  title,
  body,
  href,
  cta,
  external,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  href: string;
  cta: string;
  external?: boolean;
}) {
  const linkProps = external
    ? { target: "_blank", rel: "noreferrer" as const }
    : {};
  return (
    <li className="flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] p-6">
      <span className="grid size-10 place-items-center rounded-full bg-[var(--color-amber)]/15 text-[var(--color-amber-dark)]">
        {icon}
      </span>
      <h3 className="mt-4 text-xl font-semibold text-[var(--color-forest-dark)]">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-base text-[var(--color-charcoal-soft)]">
        {body}
      </p>
      <a
        href={href}
        className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-amber-dark)] hover:underline"
        {...linkProps}
      >
        {cta} <ArrowRight aria-hidden="true" className="size-3.5" />
      </a>
    </li>
  );
}
