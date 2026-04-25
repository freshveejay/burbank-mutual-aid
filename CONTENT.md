# Burbank Mutual Aid — Content Editing Guide

This site is built so you (MJ) can update most copy without touching React. Everything that needs your input is listed below.

---

## Quick edits — single source of truth

Almost all sitewide copy lives in **`src/lib/site.ts`**:

- Organization name, tagline
- Public email
- Instagram URL + handle
- Meeting cadence, time, place, address, parking note
- Mission statement (full paragraph)
- Press articles (title, outlet, author, date, excerpt, link)

Open that file, change the text, save. The site updates everywhere.

---

## `{REPLACE: …}` markers

Anywhere on the rendered site, you'll see a yellow dashed box like this:
**`{REPLACE: mj-bio}`**

Each one is a placeholder waiting on real content from you. The id matches a `<Replace id="…">` tag in the code. Search the codebase for the id to find where it lives.

| ID | Page | What's needed |
|---|---|---|
| `mj-bio` | `/about` | A few sentences from MJ in her own words (origin, why mutual aid, what brings her to this work) |
| `team-photo` | `/about` | A photo from a Sunday distribution. Put the file in `public/` and replace the `<Replace>` with `<Image src="/your-file.jpg" … />` |
| `gallery-photo-1` | `/press` | First photo for the gallery |
| `gallery-photo-2` | `/press` | Second photo for the gallery |
| `gallery-photo-3` | `/press` | Third photo for the gallery |

When you replace one, just delete the `<Replace … />` and put your real content (or `<Image>` tag, paragraph, etc.) in its place.

---

## Adding a logo

Drop a square SVG/PNG into `public/logo.svg` (or similar), then in `src/components/Header.tsx` swap the **"BMA"** circle for an `<Image>`:

```tsx
<Image src="/logo.svg" alt="Burbank Mutual Aid" width={36} height={36} />
```

---

## Volunteer form notifications

The form (`/volunteer`) submits to a server action in `src/app/volunteer/actions.ts`. Behavior:

- **Without `RESEND_API_KEY` + `ADMIN_EMAIL` set** → the submission is logged to the server console and the volunteer sees a success message. Useful for previews; nothing is emailed.
- **With both set** → an email is sent to `ADMIN_EMAIL` with the volunteer's full submission. Set these in `.env.local` for local dev and in Vercel Settings → Environment Variables for previews/production.

To verify a custom send-from address (e.g. `hello@burbankmutualaid.org`), follow Resend's domain verification flow, then update `RESEND_FROM` in your env vars.

---

## Admin page (`/admin`)

Gated by a single password set in `ADMIN_PASSWORD`. Currently shows mock data only. When you're ready to persist real signups:

1. Create a Supabase project, run the SQL migration in `supabase/schema.sql` (you'll need to add this file).
2. Update `src/app/volunteer/actions.ts` to insert into the `volunteers` table before sending the email.
3. Update `src/app/admin/page.tsx` to fetch real rows from Supabase.

---

## SEO

- Page metadata is set per-route via `export const metadata` at the top of each `page.tsx`.
- The site title template is `<page> · Burbank Mutual Aid`.
- `robots.txt` and `sitemap.xml` auto-generate from `src/app/robots.ts` and `src/app/sitemap.ts`. Update `NEXT_PUBLIC_SITE_URL` once you have a domain.

---

## What hasn't been built yet (Phase 2+)

- Supabase persistence and admin review actions
- Shift calendar
- SMS reminders (Twilio)
- Donation system (Stripe)
- Multilingual (Spanish)
- Newsletter

These are intentionally deferred until Burbank Mutual Aid has a stronger volunteer base and a clearer need.
