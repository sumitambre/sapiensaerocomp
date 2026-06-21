import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();
const bingSiteVerification = process.env.BING_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'https://www.sapiensaerocomp.com'),
  title: {
    default: 'Sapiens AeroComp | Carbon Fiber (CFRP) Drone Propellers & Custom Molds',
    template: '%s | Sapiens AeroComp',
  },
  description:
    'Indian manufacturer in Pune of carbon fiber (CFRP) drone/UAV propellers engineered for low vibration and high efficiency. Also offering custom carbon fiber mold design and manufacturing.',
  authors: [{ name: 'Sapiens AeroComp Pvt. Ltd.', url: '/' }],
  creator: 'Sapiens AeroComp Pvt. Ltd.',
  publisher: 'Sapiens AeroComp Pvt. Ltd.',
  category: 'Aerospace manufacturing',
  keywords: [
    'carbon fiber propeller',
    'carbon fiber drone propellers',
    'CFRP propeller',
    'CFRP drone propellers',
    'UAV propellers',
    'drone propeller manufacturer India',
    'heavy lift drone propeller',
    'custom carbon fiber mold',
    'carbon fiber mold design service',
    'carbon fiber plates',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Sapiens AeroComp',
    locale: 'en_IN',
    title: 'Sapiens AeroComp | Carbon Fiber (CFRP) Drone Propellers & Custom Molds',
    description:
      'High-performance carbon fiber (CFRP) drone/UAV propellers built for low vibration and reliability, plus custom carbon fiber mold design and manufacturing.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sapiens AeroComp | Carbon Fiber (CFRP) Drone Propellers',
    description:
      'Carbon fiber (CFRP) drone/UAV propellers for low vibration and high efficiency. Custom carbon fiber molds available.',
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  verification: {
    google: googleSiteVerification || undefined,
    other: bingSiteVerification ? { 'msvalidate.01': bingSiteVerification } : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased bg-offwhite text-body">{children}</body>
    </html>
  );
}

