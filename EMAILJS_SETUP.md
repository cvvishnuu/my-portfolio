# EmailJS Setup Guide for Contact Form

## Overview
Your portfolio uses EmailJS to send messages from the contact form directly to your email inbox. This guide will walk you through the setup process step by step.

## How It Works
When someone fills out your contact form and clicks "Send Message":
1. The form data is sent to EmailJS servers
2. EmailJS processes the message using your configured template
3. **You receive the message directly in your email inbox** (the email you configured)
4. The sender receives a success/error message on the website

## Setup Steps

### Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** in the top right corner
3. Sign up using:
   - Your Google account (recommended for easy setup), OR
   - Email and password
4. Verify your email address if you signed up with email

### Step 2: Add an Email Service
1. After logging in, go to the **Email Services** page
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended if you have a Gmail account)
   - **Outlook**
   - **Yahoo**
   - Or any other supported provider
4. Follow the authentication steps to connect your email account
5. **Important**: Copy the **Service ID** - you'll need this later
   - Example: `service_abc123`

### Step 3: Create an Email Template
1. Go to the **Email Templates** page
2. Click **"Create New Template"**
3. Configure the template:

   **From:**
   ```
   {{from_name}} <{{from_email}}>
   ```

   **To:**
   ```
   cvishnuu01@gmail.com
   ```
   *(This is YOUR email where you'll receive messages)*

   **Subject:**
   ```
   New Portfolio Contact from {{from_name}}
   ```

   **Message Body:**
   ```
   You have received a new message from your portfolio website.

   From: {{from_name}}
   Email: {{from_email}}

   Message:
   {{message}}

   ---
   This message was sent from your portfolio contact form.
   ```

4. Click **"Save"**
5. **Important**: Copy the **Template ID** - you'll need this later
   - Example: `template_xyz789`

### Step 4: Get Your Public Key
1. Go to **Account** → **General** (or **API Keys**)
2. Find your **Public Key** (it might also be called "User ID")
3. **Important**: Copy the **Public Key** - you'll need this later
   - Example: `abcdefghijk123456`

### Step 5: Add Credentials to .env File
1. Open the file: `.env` in the root of your project
2. You'll see three empty fields:
   ```env
   VITE_EMAILJS_SERVICE_ID=
   VITE_EMAILJS_TEMPLATE_ID=
   VITE_EMAILJS_PUBLIC_KEY=
   ```

3. Fill in your actual credentials (no quotes needed):
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=abcdefghijk123456
   ```

4. **Save the file**

5. **Restart your dev server** (stop with Ctrl+C and run `npm run dev` again)
   - Environment variables only load when the server starts
   - Changes to .env require a server restart

### Step 6: Test Your Contact Form
1. Save all changes
2. Open your portfolio in a browser
3. Scroll to the Contact section
4. Fill out the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
5. Click "Send Message"
6. **Check your email inbox** (cvishnuu01@gmail.com)
7. You should receive an email with the test message!

## Where You'll Receive Messages

**You will receive ALL contact form submissions directly in your email inbox at:**
`cvishnuu01@gmail.com`

Each email will contain:
- The sender's name
- The sender's email address
- Their message
- A note that it came from your portfolio

## Free Tier Limits

EmailJS Free Plan includes:
- **200 emails per month**
- Unlimited templates
- Unlimited email services
- 2 users

This is more than enough for a personal portfolio! If you need more, you can upgrade to a paid plan later.

## Troubleshooting

### Messages not being received?
1. Check your spam/junk folder
2. Verify your Service ID, Template ID, and Public Key are correct
3. Make sure you uncommented the EmailJS code
4. Check the browser console for error messages

### "Failed to send" error?
1. Verify your EmailJS account is verified
2. Check that your email service is properly connected
3. Make sure you're not exceeding the 200 emails/month limit
4. Try regenerating your Public Key and updating the code

### Gmail blocking emails?
1. Make sure you allowed EmailJS access to your Gmail account
2. Check Gmail's "Less secure app access" settings
3. Try using Gmail's "App Passwords" feature if you have 2FA enabled

## Security Note

Your EmailJS credentials are safe to use in the frontend code because:
- The Public Key is designed to be used in client-side code
- EmailJS has built-in rate limiting and security features
- Your Service ID and Template ID are not sensitive

## Need Help?

If you encounter any issues:
1. Check EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Contact EmailJS support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
3. Check the browser console for detailed error messages

## Summary

✅ **What you need to do:**
1. Create EmailJS account
2. Connect your email (Gmail recommended)
3. Create email template
4. Get Service ID, Template ID, and Public Key
5. Add credentials to `.env` file
6. Restart dev server (`npm run dev`)
7. Test the contact form

✅ **Where messages will be sent:**
- **Your email inbox:** cvishnuu01@gmail.com

✅ **What viewers see:**
- A success message when their message is sent
- An error message if something goes wrong
- No access to your email or credentials

That's it! Once set up, you'll receive all contact form submissions directly in your email inbox.
