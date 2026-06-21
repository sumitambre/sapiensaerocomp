# Sanity CMS setup

## 1. Create the Sanity project

Create a project at <https://www.sanity.io/manage>, using a `production` dataset. Copy the project ID.

## 2. Add environment variables

Add these values to `.env.local` locally and to the production hosting environment:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-02-19
SANITY_API_WRITE_TOKEN=your_server_only_write_token
```

Create `SANITY_API_WRITE_TOKEN` in the Sanity project API settings using the **Editor** role (or a custom role with document create permission). Viewer tokens cannot collect contact submissions. Never prefix this token with `NEXT_PUBLIC_`.

## 3. Configure Studio access

In Sanity project settings, add these CORS origins with authenticated requests enabled:

- `http://localhost:3000`
- The production site origin, for example `https://www.sapiensaerocomp.com`

Open `/studio` and sign in with a user who has access to the Sanity project.

## 4. Publish and index posts

Create and publish a Blog Post in `/studio`. Published posts appear at `/blog` and are added to `/sitemap.xml` within about 60 seconds.

Submit `https://www.sapiensaerocomp.com/sitemap.xml` once in Google Search Console and Bing Webmaster Tools. New sitemap entries are then discovered automatically, but search engines control when they are indexed.

For HTML-tag ownership verification, copy the verification values into the Vercel environment variables `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION`, then redeploy.

## Contact submissions

New contact forms are saved as `Contact Submission` documents and still sent by Resend. Leads are grouped in Studio as New, In progress, Replied, and All submissions.
