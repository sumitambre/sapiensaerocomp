'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';
import { isSanityConfigured } from '@/sanity/env';

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-offwhite p-6">
        <div className="max-w-xl rounded-3xl bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-navy-900">Sanity is not configured</h1>
          <p className="mt-4 leading-7">
            Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET, then restart the application.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
