import { Container, PageHeader } from "@/components/Container";
import { Lock, LogOut } from "lucide-react";
import { isAuthenticated, loginAction, logoutAction } from "./actions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

const SAMPLE_VOLUNTEERS = [
  {
    name: "Sample Signup",
    email: "sample@example.com",
    availability: "Sundays",
    skills: "Cooking, organizing",
    referralSource: "Burbank Leader",
    status: "pending" as const,
    createdAt: "Apr 22, 2026",
  },
];

type SearchParams = { error?: string };

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const authed = await isAuthenticated();
  const adminConfigured = Boolean(process.env.ADMIN_PASSWORD);

  if (!authed) {
    return (
      <>
        <PageHeader eyebrow="Admin" title="Volunteer review" />
        <Container className="py-14 sm:py-20">
          <div className="max-w-md">
            <div className="flex items-center gap-2 text-[var(--color-forest-dark)]">
              <Lock aria-hidden="true" className="size-5" />
              <h2 className="text-xl font-semibold">Sign in</h2>
            </div>
            {!adminConfigured ? (
              <p className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
                <strong>Admin not yet configured.</strong> Set{" "}
                <code className="rounded bg-amber-100 px-1">ADMIN_PASSWORD</code>{" "}
                in <code className="rounded bg-amber-100 px-1">.env.local</code>{" "}
                (and in your Vercel project env vars) to enable this page.
              </p>
            ) : null}
            <form action={loginAction} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[var(--color-charcoal)]"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="mt-2 w-full rounded-lg border border-[var(--color-line)] bg-[var(--color-cream)] px-3 py-2 text-base text-[var(--color-charcoal)] focus:border-[var(--color-amber)]"
                />
              </div>
              {params.error === "wrong-password" ? (
                <p className="text-sm text-red-700" role="alert">
                  Wrong password.
                </p>
              ) : null}
              {params.error === "not-configured" ? (
                <p className="text-sm text-red-700" role="alert">
                  ADMIN_PASSWORD not set on the server.
                </p>
              ) : null}
              <button
                type="submit"
                className="rounded-full bg-[var(--color-forest)] px-5 py-2.5 text-base font-medium text-[var(--color-cream)] hover:bg-[var(--color-forest-dark)]"
              >
                Sign in
              </button>
            </form>
          </div>
        </Container>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Admin"
        title="Volunteer signups"
        lede="Mock data — wire up Supabase later to persist real submissions."
      />
      <Container className="py-10 sm:py-14">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-[var(--color-muted)]">
            Showing {SAMPLE_VOLUNTEERS.length} sample row.
          </p>
          <form action={logoutAction}>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-2 text-sm font-medium text-[var(--color-charcoal-soft)] hover:bg-[var(--color-cream-dark)]"
            >
              <LogOut aria-hidden="true" className="size-4" />
              Sign out
            </button>
          </form>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[var(--color-cream-dark)]/60 text-xs uppercase tracking-wide text-[var(--color-muted)]">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Availability</th>
                  <th className="px-4 py-3">Skills</th>
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-line)]">
                {SAMPLE_VOLUNTEERS.map((v) => (
                  <tr key={v.email}>
                    <td className="px-4 py-3 font-medium text-[var(--color-charcoal)]">
                      {v.name}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-charcoal-soft)]">
                      {v.email}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-charcoal-soft)]">
                      {v.availability}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-charcoal-soft)]">
                      {v.skills}
                    </td>
                    <td className="px-4 py-3 text-[var(--color-charcoal-soft)]">
                      {v.referralSource}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-flex rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-900">
                        {v.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[var(--color-charcoal-soft)]">
                      {v.createdAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-sm text-[var(--color-muted)]">
          When you&apos;re ready, swap{" "}
          <code className="rounded bg-[var(--color-cream-dark)] px-1">
            SAMPLE_VOLUNTEERS
          </code>{" "}
          for a Supabase query and add columns for review (approve / decline /
          notes). The volunteer form action in{" "}
          <code className="rounded bg-[var(--color-cream-dark)] px-1">
            app/volunteer/actions.ts
          </code>{" "}
          is already structured to write a row before sending the email.
        </p>
      </Container>
    </>
  );
}
