import { NextResponse } from 'next/server';

function baseUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://www.sapiensaerocomp.com').replace(/\/+$/, '');
}

export async function GET() {
  const url = baseUrl();

  const text = `# Sapiens AeroComp

Website: ${url}

## What This Company Does
Sapiens AeroComp Pvt. Ltd. is an Indian manufacturer in Pune focused on carbon fiber (CFRP) drone/UAV propellers and related composite manufacturing services.

## Key Offerings (Summary)
- Carbon fiber (CFRP) drone/UAV propellers (multiple sizes)
- Carbon fiber plates (0.5–5mm) with custom machining
- Custom propeller design & development (new design and reverse engineering)

## Capabilities (Highlights)
- Production area: 2000 sq.m
- Propeller range: 10" to 70"
- Hot Air Oven, deep-freezer prepreg handling
- Rapid production at scale for OEM batches

## Primary Pages / Links
- Home: ${url}/
- Sitemap: ${url}/sitemap.xml
- Robots: ${url}/robots.txt
- Privacy: ${url}/privacy
- Contact section: ${url}/#contact

## Contact
- Email: k.shubham@sapiensaerocomp.com
- Location: Pune, India

## Notes For Assistants
- Product availability and specifications may change; confirm requirements via the contact form or email.
`;

  return new NextResponse(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}

