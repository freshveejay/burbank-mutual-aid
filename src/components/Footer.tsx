import Link from "next/link";
import { Mail, Heart } from "lucide-react";
import { site } from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-line)] bg-[var(--color-cream-dark)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-[var(--color-forest-dark)]">
            {site.name}
          </p>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            {site.tagline}
          </p>
          <p className="mt-4 text-sm text-[var(--color-charcoal-soft)]">
            {site.event.cadence} · {site.event.time}
            <br />
            {site.event.place}
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-base">
            <li>
              <Link href="/about" className="hover:text-[var(--color-amber-dark)]">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/volunteer"
                className="hover:text-[var(--color-amber-dark)]"
              >
                Volunteer
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="hover:text-[var(--color-amber-dark)]"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:text-[var(--color-amber-dark)]">
                Press
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            Connect
          </p>
          <ul className="mt-3 space-y-2 text-base">
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[var(--color-amber-dark)]"
              >
                <InstagramIcon className="size-4" />
                {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 hover:text-[var(--color-amber-dark)]"
              >
                <Mail aria-hidden="true" className="size-4" />
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-line)]/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-5 py-4 text-sm text-[var(--color-muted)]">
          <p className="inline-flex items-center gap-1.5">
            Built with{" "}
            <Heart aria-hidden="true" className="size-3.5 fill-current" /> in
            Burbank.
          </p>
          <p>
            © {new Date().getFullYear()} {site.name}. Volunteer-run.
          </p>
        </div>
      </div>
    </footer>
  );
}
