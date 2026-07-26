# Sydenham ASC Website — Deployment Guide

Your holding page is ready. Follow these steps to get it live on your domain in the next 30 minutes.

---

## Step 1: Push to GitHub

### 1a. Create a new GitHub repository

Go to [github.com/new](https://github.com/new) and:
- **Repository name:** `sydenham-asc`
- **Description:** "Sydenham After School Club website"
- **Visibility:** Public (Vercel needs to see it)
- **DO NOT initialize with README** (we already have one)
- Click **Create repository**

You'll see a page with commands. Copy the URL—it'll look like `https://github.com/YOUR-USERNAME/sydenham-asc.git`

### 1b. Push the project from your computer

Open Terminal and run these commands (replace `YOUR-USERNAME` with your GitHub username):

```bash
cd ~/Downloads/sydenham-asc
git add .
git commit -m "Initial commit: holding page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/sydenham-asc.git
git push -u origin main
```

**Done?** Check GitHub — you should see the files there.

---

## Step 2: Deploy to Vercel

### 2a. Go to Vercel

Visit [vercel.com](https://vercel.com) and sign up (or log in).

### 2b. Import the GitHub repo

1. Click **Add New → Project**
2. Click **Import Git Repository**
3. Paste: `https://github.com/YOUR-USERNAME/sydenham-asc.git`
4. Click **Continue**

Vercel will ask for a Project Name — keep it as `sydenham-asc`.

### 2c. Configure & Deploy

1. Under **Environment Variables** — leave blank (we don't need any)
2. Click **Deploy**

Vercel will build and deploy. Wait 2–3 minutes. You'll get a message: **"Congratulations, your site is live!"**

Vercel gives you a temporary URL like `sydenham-asc.vercel.app`. Visit it to confirm the holding page shows.

### 2d. Get your Vercel deployment info

After deployment, click **Domains** in the Vercel dashboard. You'll see the assigned domain and options. Note down:
- **Vercel assigned domain:** e.g., `sydenham-asc.vercel.app`
- **Your custom domain:** `sydenhamasc.co.uk` (not yet connected)

---

## Step 3: Point DNS to Vercel (Hostinger)

Now your site is live on Vercel. You need to tell Hostinger's DNS to send traffic to Vercel.

### 3a. Log into Hostinger

1. Go to [hostinger.com](https://hostinger.com) → My Products
2. Find your domain `sydenhamasc.co.uk`
3. Click **Manage DNS** (or go to DNS Settings)

### 3b. Add DNS Records

You'll see existing DNS records. **Delete or ignore old ones.** Add these new records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.19.165 | 3600 |
| CNAME | www | cname.vercel-dns.com. | 3600 |

**Where to get these values?**
- In your Vercel dashboard, click your project → **Settings → Domains**
- You'll see the exact DNS records Vercel wants. Copy them exactly.

### 3c. Save & Wait

Click Save. DNS typically propagates in 15 minutes to 24 hours. You can check progress at [whatsmydns.net](https://whatsmydns.net) — enter `sydenhamasc.co.uk` and search.

Once propagated, visit `https://sydenhamasc.co.uk` in your browser. You should see the holding page.

---

## Step 4: Connect Custom Domain in Vercel

Once DNS is pointing correctly:

1. In Vercel, go to your project **Settings → Domains**
2. Add `sydenhamasc.co.uk` as a custom domain
3. Vercel will auto-detect the DNS is configured
4. Mark as primary domain

Done! Your site is now live on your real domain.

---

## Next Steps: Full Website Build

Once the holding page is live, I'll build the full site with:
- Home, About, Services, Pricing, Locations, Tuition, Contact pages
- Parent-focused design with photos, success stories, staff info
- Integrated booking link to your CMS (book.sydenhamasc.co.uk)
- SEO optimization & redirects from old URLs

We'll deploy updates to the same domain with zero downtime.

---

## Troubleshooting

**"ERR_NAME_NOT_RESOLVED" or site not loading?**
- DNS not propagated yet. Wait 15–30 mins and refresh.
- Check [whatsmydns.net](https://whatsmydns.net) to confirm DNS is live.

**"Vercel deployment failed"?**
- Check Vercel's build logs (Deployments tab).
- Likely a `package.json` or `astro.config.mjs` issue — I can debug.

**Questions?** Message me and I'll help.
