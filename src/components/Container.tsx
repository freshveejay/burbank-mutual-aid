import { type ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-5 ${className}`}>{children}</div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="border-b border-[var(--color-line)] bg-[var(--color-cream-dark)]/40 py-14 sm:py-20">
      <Container>
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-amber-dark)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight text-[var(--color-forest-dark)] sm:text-5xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-5 max-w-2xl text-lg text-[var(--color-charcoal-soft)] sm:text-xl">
            {lede}
          </p>
        ) : null}
      </Container>
    </header>
  );
}
