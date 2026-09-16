# Burbank Mutual Aid — Content Editing Guide

This site is built so you can update copy without touching React. Here's what to know.

---

## Pages

| Page | URL | File |
|---|---|---|
| Home | `/` | `src/app/page.tsx` |
| About | `/about` | `src/app/about/page.tsx` |
| Get Involved | `/get-involved` | `src/app/get-involved/page.tsx` |
| Press | `/press` | `src/app/press/page.tsx` |

Old links still work: `/volunteer` and `/resources` both redirect to `/get-involved` (see `next.config.ts`).

---

## The simplest edits — `src/lib/site.ts`

Almost all sitewide copy lives in a single file: **`src/lib/site.ts`**.

- Organization name, tagline
- Public email
- Instagram URL + handle
- The vague "when and where" line (`event.summary` and `event.footer`)
- Mission statement (full paragraph)
- Related organizations (the side panel on Get Involved)
- Press articles (title, outlet, author, date, excerpt, link)

Open it, change the text between the quotes, keep the commas, save, push. The site updates everywhere.

**Do not put the exact distribution time or meeting spot anywhere on the site.** Share those with volunteers after they sign up. Only the vague phrasing ("Sunday evening in downtown Burbank") should appear.

---

## The volunteer form is your Google Form

The `/get-involved` page embeds your existing Google Form via iframe. That means:

- **You manage the form questions** in Google Forms, like you already do.
- **Submissions land in your Google Sheet** — same as today.
- **No database, no admin login, no extra service to keep running.**

If you want to swap the form (or update the URL), edit one line near the top of `src/app/get-involved/page.tsx`:

```ts
const FORM_URL = "https://docs.google.com/forms/d/e/.../viewform";
```

The site auto-redeploys when you push.

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

Set it in Vercel → Settings → Environment Variables. It must start with `https://`.

---

## SEO

- Page metadata is set per-route via `export const metadata` at the top of each `page.tsx`.
- Title template: `<page> · Burbank Mutual Aid`.
- `robots.txt` and `sitemap.xml` auto-generate from `src/app/robots.ts` and `src/app/sitemap.ts`.

---

## Keeping dependencies patched

GitHub's Dependabot opens pull requests titled "Bump next …" when a security fix is released. Merge them: Vercel builds a preview first, and if the preview looks right, merging deploys it.

---

## Future ideas (only if you want)

- Donation system (Stripe — Vercel has a free template)
- Newsletter (Buttondown, Beehiiv, or just a "subscribe via email" link)
- Multilingual / Spanish toggle
- Photos, once the group has agreed on how it wants to handle images of the people it serves

None of these are needed. The Google-Form-powered site already does the job.
