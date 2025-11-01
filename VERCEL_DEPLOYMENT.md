# Vercel Deployment Guide

This guide will help you deploy your portfolio to Vercel in just a few minutes.

## Prerequisites

- GitHub account with your portfolio repository
- Vercel account (sign up at https://vercel.com)
- EmailJS credentials (from `.env` file)

---

## Step 1: Push Code to GitHub

Make sure all your changes are committed and pushed to GitHub:

```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin master
```

---

## Step 2: Import Project to Vercel

1. Go to https://vercel.com/dashboard
2. Click **"Add New Project"** or **"Import Project"**
3. Connect your GitHub account if you haven't already
4. Select your portfolio repository (`my-portfolio` or `vishnuu-portfolio`)
5. Click **"Import"**

---

## Step 3: Configure Build Settings

Vercel should auto-detect your settings, but verify these:

- **Framework Preset:** Vite
- **Root Directory:** `./` (leave blank)
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

---

## Step 4: Add Environment Variables

**IMPORTANT:** Add your EmailJS credentials as environment variables.

In the Vercel project settings:

1. Scroll down to **"Environment Variables"**
2. Add these 3 variables (copy from your `.env` file):

| Name | Value |
|------|-------|
| `VITE_EMAILJS_SERVICE_ID` | `service_0t2jrwo` |
| `VITE_EMAILJS_TEMPLATE_ID` | `template_kyibkld` |
| `VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID` | `template_d7lv5a8` |
| `VITE_EMAILJS_PUBLIC_KEY` | `BQkx09zmg7Ppt-d5_` |

**Important Notes:**
- Make sure to add these for **Production**, **Preview**, and **Development** environments
- Click **"Add"** after each variable
- These are your actual credentials from the `.env` file

---

## Step 5: Deploy

1. Click **"Deploy"**
2. Wait for the build to complete (usually 1-3 minutes)
3. Once deployed, you'll get a URL like: `https://your-portfolio.vercel.app`

---

## Step 6: Test Your Deployment

1. Visit your Vercel URL
2. Test the contact form to ensure EmailJS is working
3. Check that all sections load properly
4. Test on mobile devices

---

## Custom Domain (Optional)

### Add Your Own Domain

1. In Vercel project settings, go to **"Domains"**
2. Click **"Add"**
3. Enter your domain name (e.g., `vishnuu.dev`)
4. Follow Vercel's instructions to:
   - Add DNS records to your domain provider
   - Wait for DNS propagation (can take up to 48 hours)

### Recommended Domain Providers
- **Namecheap** - Good pricing, easy DNS management
- **Google Domains** - Simple interface
- **Cloudflare** - Free DNS, great performance

---

## Automatic Deployments

Vercel automatically deploys your site when you push to GitHub:

- **Push to `master`** → Production deployment
- **Push to other branches** → Preview deployment
- **Pull requests** → Preview deployment with unique URL

---

## Build Errors? Troubleshooting

### Error: TypeScript compilation failed

**Solution:** Run locally first to catch errors:
```bash
npm run build
```

Fix any TypeScript errors, then push again.

### Error: Environment variables not found

**Solution:**
1. Check that all environment variables are added in Vercel dashboard
2. Make sure variable names start with `VITE_`
3. Redeploy after adding variables

### Error: Module not found

**Solution:**
```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install

# Test build locally
npm run build
```

---

## Performance Optimization

### Enable Edge Functions (Optional)

Vercel's Edge Functions can make your site even faster:

1. Go to project settings
2. Enable **Edge Functions**
3. Enable **Edge Middleware** for global redirects

### Image Optimization

Vercel automatically optimizes images. Make sure you're using:
- WebP format when possible
- Proper image sizing
- Lazy loading (already implemented with `react-intersection-observer`)

---

## Monitoring & Analytics

### Vercel Analytics (Recommended)

1. Go to **Analytics** tab in Vercel dashboard
2. Enable **Web Analytics**
3. Free tier includes:
   - Page views
   - User sessions
   - Performance metrics
   - Core Web Vitals

### Google Analytics (Optional)

Add Google Analytics to your site:

1. Get your GA tracking ID
2. Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## Vercel CLI (Optional)

Install Vercel CLI for deployment from terminal:

```bash
# Install globally
npm install -g vercel

# Deploy to production
vercel --prod

# Deploy preview
vercel
```

---

## Common Commands

```bash
# Pull environment variables from Vercel
vercel env pull

# View deployment logs
vercel logs

# List all deployments
vercel ls

# Remove deployment
vercel remove [deployment-url]
```

---

## Security Best Practices

1. ✅ **Never commit `.env`** (already in `.gitignore`)
2. ✅ **Use environment variables** for all secrets
3. ✅ **Enable HTTPS** (Vercel does this automatically)
4. ✅ **Add security headers** (optional, in `vercel.json`)

### Optional Security Headers

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## Cost

**Free Tier Includes:**
- Unlimited deployments
- Automatic HTTPS
- Preview deployments
- 100 GB bandwidth/month
- Vercel Analytics (basic)

**Paid Plans:**
- Pro: $20/month (1 TB bandwidth, advanced analytics)
- Enterprise: Custom pricing

**Your portfolio will fit comfortably in the free tier!**

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Discord:** https://vercel.com/discord
- **GitHub Issues:** Report bugs in your repo
- **EmailJS Support:** https://www.emailjs.com/support/

---

## Quick Checklist

Before deploying, make sure:

- [x] All TypeScript errors are fixed (`npm run build` succeeds)
- [x] `.env` file is in `.gitignore`
- [x] Code is pushed to GitHub
- [x] Environment variables are ready to add in Vercel
- [x] EmailJS templates are configured and active
- [x] Profile photo is in `/public/profile.jpeg`
- [x] All images are optimized

---

## Post-Deployment

After successful deployment:

1. ✅ Test contact form with real email
2. ✅ Check all sections and animations
3. ✅ Test on mobile devices
4. ✅ Share your portfolio URL!
5. ✅ Update LinkedIn/GitHub with your portfolio link

---

## Your Portfolio URLs

After deployment, you'll have:

- **Production:** `https://your-portfolio.vercel.app`
- **Custom Domain (optional):** `https://vishnuu.dev`
- **Preview (per PR):** `https://your-portfolio-[hash].vercel.app`

---

## Updating Your Portfolio

To update your deployed portfolio:

1. Make changes locally
2. Test with `npm run dev`
3. Build to check for errors: `npm run build`
4. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin master
   ```
5. Vercel automatically deploys the changes!

---

## Need Help?

If you encounter any issues:

1. Check the Vercel deployment logs
2. Run `npm run build` locally to see errors
3. Verify environment variables are set correctly
4. Check browser console for runtime errors
5. Refer to `claude.md` for project specifications

---

**You're all set! Deploy with confidence! 🚀**
