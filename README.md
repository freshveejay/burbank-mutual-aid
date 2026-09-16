# Burbank Mutual Aid — website

Five-page brochure site for Burbank Mutual Aid, built with Next.js and deployed on Vercel.

- **Editing copy, the volunteer form link, or press items:** see [`CONTENT.md`](./CONTENT.md). Almost everything lives in `src/lib/site.ts`.
- **Local preview:** `pnpm install`, then `pnpm dev` and open <http://localhost:3000>.
- **Deploying:** push to `main`. Vercel builds and publishes automatically.
- **Only environment variable:** `NEXT_PUBLIC_SITE_URL` (see `.env.example`). Set it in Vercel → Settings → Environment Variables.

Volunteer signups go to the embedded Google Form; there is no database, login, or server code to maintain.
