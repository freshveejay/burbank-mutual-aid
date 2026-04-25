import { Container, PageHeader } from "@/components/Container";
import { Replace } from "@/components/Replace";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Coverage of Burbank Mutual Aid in the Burbank Leader and other outlets.",
};

export default function PressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press"
        title="In the news."
        lede="Coverage of our work — and the broader conversation about homelessness in Burbank."
      />

      <Container className="py-14 sm:py-20 space-y-16">
        <section>
          <ul className="grid gap-5 sm:grid-cols-2">
            {site.press.map((p) => (
              <li
                key={p.url}
                className="flex flex-col rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] p-6"
              >
                <p className="text-sm text-[var(--color-muted)]">
                  {p.outlet} · {p.date} · {p.author}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-[var(--color-forest-dark)]">
                  {p.title}
                </h2>
                <p className="mt-3 flex-1 text-base text-[var(--color-charcoal-soft)]">
                  {p.excerpt}
                </p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-amber-dark)] hover:underline"
                >
                  Read on {p.outlet}{" "}
                  <ArrowRight aria-hidden="true" className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-forest-dark)] sm:text-3xl">
            Photos
          </h2>
          <p className="mt-2 max-w-2xl text-base text-[var(--color-muted)]">
            Coming soon.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="aspect-[4/3] rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream-dark)]/40 p-4 text-center"
              >
                <div className="grid h-full place-items-center">
                  <Replace id={`gallery-photo-${n}`} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
