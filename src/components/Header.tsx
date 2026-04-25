import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/about", label: "About" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/resources", label: "Resources" },
  { href: "/press", label: "Press" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-line)] bg-[var(--color-cream)]/90 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-cream)]/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-[var(--color-forest-dark)] sm:text-lg"
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-full bg-[var(--color-forest)] text-[var(--color-cream)]"
          >
            <span className="text-sm font-bold">BMA</span>
          </span>
          <span>{site.name}</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 text-sm sm:gap-2 sm:text-base">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hidden rounded-full px-3 py-1.5 text-[var(--color-charcoal-soft)] hover:bg-[var(--color-cream-dark)] sm:inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/volunteer"
                className="rounded-full bg-[var(--color-forest)] px-4 py-2 text-sm font-medium text-[var(--color-cream)] hover:bg-[var(--color-forest-dark)]"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Mobile-only secondary nav */}
      <nav
        aria-label="Mobile primary"
        className="border-t border-[var(--color-line)]/60 sm:hidden"
      >
        <ul className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2 text-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-2 py-1 text-[var(--color-charcoal-soft)]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
