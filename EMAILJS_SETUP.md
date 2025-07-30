# EmailJS Setup Instructions

This portfolio uses EmailJS to handle contact form submissions. Follow these steps to set it up:

## 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact from {{from_name}} - {{service_interest}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interest: {{service_interest}}

Message:
{{message}}

---
Sent on: {{timestamp}}
Reply to: {{reply_to}}
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (User ID)

## 5. Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Update Email Address

In `src/components/Footer.tsx`, update the email address on line 66:

```typescript
to_email: 'your-email@example.com', // Replace with your email
```

## 7. Test the Form

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Check your email for the message
4. Check the browser console for any errors

## Troubleshooting

- If emails aren't being received, check your EmailJS dashboard logs
- Make sure your email service is properly configured
- Verify that your template variables match the ones in the code
- Check the browser console for any error messages

## Fallback Behavior

If EmailJS is not configured or fails, the form will:
1. Open the user's default email client with a pre-filled message
2. Display an appropriate status message to the user
3. Log detailed error information to the console

This ensures users can always contact you, even if EmailJS is not working.
