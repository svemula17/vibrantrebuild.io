# Vibrant Inc Rebuild

Local Next.js rebuild of `vibrantinc.com` focused on a tighter IA, stronger brand credibility, and a simpler lead-generation path.

## What is included

- App Router Next.js marketing site
- Core routes: home, services, service detail, about, partners, careers, contact
- SEO setup with metadata, redirects, `robots.ts`, and `sitemap.ts`
- CMS-ready content layer with typed collections and local fallback content
- Server-side contact form validation with a honeypot and success event hook

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Next steps

- Replace local fallback content in `content/site-content.ts` with a real headless CMS adapter
- Wire the contact action to email delivery or a CRM
- Add brand imagery, partner logos, and case studies
