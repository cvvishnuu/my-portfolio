# 📧 Quick Contact Form Setup

## Current Status
✅ Contact form is **ready to use** - it just needs your EmailJS credentials!
✅ Right now it works in "demo mode" (simulates sending)

## To Make It Live (15 minutes)

### 1. Create EmailJS Account
Go to [emailjs.com](https://www.emailjs.com/) and sign up (use Google for fastest setup)

### 2. Get Your 3 Credentials
1. **Service ID** - Connect Gmail service → Copy Service ID
2. **Template ID** - Create email template → Copy Template ID
3. **Public Key** - Go to Account → Copy Public Key

### 3. Add to .env File
Open `.env` in your project root and fill in:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 4. Restart Dev Server
```bash
# Stop current server (Ctrl+C)
npm run dev
```

### 5. Test It!
- Fill out contact form on your portfolio
- Click "Send Message"
- Check your email inbox!

## How It Works

**Without credentials (current):**
- Form shows success message
- Nothing actually sent (demo mode)
- Console shows: "EmailJS not configured"

**With credentials (after setup):**
- Form sends real emails via EmailJS
- You receive messages at: `cvishnuu01@gmail.com`
- FREE: 200 emails/month

## Need Detailed Instructions?
See **EMAILJS_SETUP.md** for step-by-step guide with screenshots.

## Why This Is Better Than Building a Backend

✅ No server costs
✅ No backend to maintain
✅ No database needed
✅ Secure (EmailJS handles it)
✅ Free tier is generous (200/month)
✅ Takes 15 minutes to set up

## Security
- `.env` is in `.gitignore` (credentials won't be committed)
- Use `.env.example` to show what's needed without exposing secrets
- EmailJS Public Key is safe for client-side use
