# Full Site — What's Built & How to Go Live

The full multi-page site is ready in this folder. It replaces the holding page.
Your site is built with Astro (Vercel installs and builds it automatically on push —
you don't need to install anything to deploy).

## Pages built
- **Home** (`/`) — hero, two pillars, why-choose, stats, testimonial, CTA
- **After School Club** (`/after-school-club`) — activities, pick-up service, hours
- **Tuition & GCSE** (`/tuition`) — how it works, subjects, session times
- **Fees** (`/fees`) — pricing tables + Tax-Free Childcare section
- **Join the Team** (`/join-us`) — vacancies + online application form with CV upload
- **About** (`/about`) — story, values (Aspire · Achieve · Excel), safeguarding
- **Contact** (`/contact`) — enquiry form + Google map

Design matches your real logo: amber + green, warm charcoal, elegant serif headings.
Old URLs (/gcse, /contact-us, etc.) redirect automatically via `vercel.json`.

---

## Before you push: 2 things to do

### 1. Get your free Web3Forms key (makes the forms work)
The application form and contact form send submissions to your email. They need a key.

1. Go to **web3forms.com**
2. Enter **info@sydenhamasc.co.uk** and get your free Access Key by email
3. In these two files, replace `YOUR_WEB3FORMS_ACCESS_KEY` with your key:
   - `src/pages/join-us.astro`
   - `src/pages/contact.astro`

(Until you do this, forms will show an error on submit. Everything else works.)

### 2. Confirm the details I filled in as placeholders
- **Fees** — I used your old published prices for the club. Tuition prices show `£__`.
  Update `src/pages/fees.astro` with current numbers before launch.
- **Vacancies** — edit the `vacancies` list at the top of `src/pages/join-us.astro`
  (change roles, pay, requirements — or set it to `[]` for "no current vacancies").
- **Photos** — the site uses tasteful placeholders. Send me real photos and I'll drop them in.
- **Logo** — I can embed your actual logo file if you send it (recovered from your old site).

---

## Push it live

From Terminal:

```bash
cd ~/Ai-lab/agent-os/sydenham-website
git add .
git commit -m "Full website: multi-page premium redesign"
git push
```

Vercel auto-builds and deploys in ~2 minutes. Because your domain already points to
Vercel, `sydenhamasc.co.uk` updates automatically.

**Safety net:** if a build ever fails, Vercel keeps serving the last working version —
your site can't go down from a bad push.

### Want to preview before it's live?
Push to a branch instead of main and Vercel gives you a preview URL:
```bash
git checkout -b preview
git add . && git commit -m "preview" && git push -u origin preview
```
Check the preview link in your Vercel dashboard, then merge to main when happy.

---

## Later (when you're ready)
- Point **book.sydenhamasc.co.uk** at your booking CMS and I'll wire the "Book a Place"
  buttons straight to it.
- Set up Google Business Profile + link your Google reviews on the home page.
