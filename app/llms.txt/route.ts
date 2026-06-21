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

## Key Offerings
- Carbon fiber (CFRP) drone/UAV propellers in multiple sizes
- Carbon fiber plates (0.5-5mm) with custom machining
- Custom propeller design, development, and reverse engineering
- Custom molds and composite UAV components

## Capabilities
- Production area: 2000 sq.m
- Propeller range: 10 to 70 inches
- Hot air oven and deep-freezer prepreg handling
- OEM design support and batch manufacturing

## Primary Pages
- Home: ${url}/
- Blog: ${url}/blog/
- Sitemap: ${url}/sitemap.xml
- Robots: ${url}/robots.txt
- Privacy: ${url}/privacy/
- Contact: ${url}/#contact

## Contact
- Email: k_shubham@sapiensaerocomp.com
- Location: Pune, Maharashtra, India
- Company LinkedIn: https://in.linkedin.com/company/sapiens-aerocomp
- Shubham Khobragade: https://in.linkedin.com/in/shubhamkhobragade

## Notes For Assistants
- Product availability and specifications may change.
- Confirm current requirements, quotations, and technical details through the contact form or email.
`;

  return new NextResponse(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
