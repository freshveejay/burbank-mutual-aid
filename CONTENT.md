# Burbank Mutual Aid — Content Editing Guide

This site is built so you (MJ) can update copy without touching React. Here's what to know.

---

## The simplest edits — `src/lib/site.ts`

Almost all sitewide copy lives in a single file: **`src/lib/site.ts`**.

- Organization name, tagline
- Public email
- Instagram URL + handle
- Meeting cadence, time, place, address, parking note
- Mission statement (full paragraph)
- Press articles (title, outlet, author, date, excerpt, link)

Open it, change the text, save, push. The site updates everywhere.

---

## The volunteer form is your Google Form

The `/volunteer` page embeds your existing Google Form via iframe. That means:

- **You manage the form questions** in Google Forms, like you already do.
- **Submissions land in your Google Sheet** — same as today.
- **No database, no admin login, no extra service to keep running.**

If you want to swap the form (or update the URL), edit one line at the top of `src/app/volunteer/page.tsx`:

```ts
const FORM_URL = "https://docs.google.com/forms/d/e/.../viewform";
```

The site auto-redeploys when you push.

---

## `{REPLACE: …}` markers

Anywhere on the site you see a yellow dashed box like **`{REPLACE: mj-bio}`**, that's a placeholder waiting on real content from you. Each id matches a `<Replace id="…">` tag in the code.

| ID | Page | What's needed |
|---|---|---|
| `mj-bio` | `/about` | A few sentences from MJ in her own words |
| `team-photo` | `/about` | A photo from a Sunday distribution |
| `gallery-photo-1` | `/press` | First photo for the gallery |
| `gallery-photo-2` | `/press` | Second photo for the gallery |
| `gallery-photo-3` | `/press` | Third photo for the gallery |

When you replace one, delete the `<Replace … />` and put your real content (or `<Image>` tag, paragraph, etc.) in its place.

---

## Adding a logo

Drop a square SVG or PNG into `public/logo.svg`, then in `src/components/Header.tsx` swap the **"BMA"** circle for an `<Image>`:

```tsx
<Image src="/logo.svg" alt="Burbank Mutual Aid" width={36} height={36} />
```

---

## Environment variables

The site needs **only one** env var, and only for SEO polish:

```
NEXT_PUBLIC_SITE_URL=https://burbankmutualaid.org   # update once domain is live
```

Set it in Vercel → Settings → Environment Variables. Everything else (Resend, Supabase, admin password) was removed once the Google Form took over signups.

---

## SEO

- Page metadata is set per-route via `export const metadata` at the top of each `page.tsx`.
- Title template: `<page> · Burbank Mutual Aid`.
- `robots.txt` and `sitemap.xml` auto-generate from `src/app/robots.ts` and `src/app/sitemap.ts`.

---

## Future ideas (only if you want)

- Donation system (Stripe — Vercel has a free template)
- Newsletter (Buttondown, Beehiiv, or just a "subscribe via email" link)
- Multilingual / Spanish toggle
- Photo gallery with proper image optimization

None of these are needed. The Google-Form-powered site already does the job.
