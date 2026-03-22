'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const links = [
  { href: '#about', label: 'About' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#products', label: 'Products' },
  { href: '#performance', label: 'Performance' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const [datasheetHref, setDatasheetHref] = useState('#contact');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_DATASHEET_URL?.trim();
    if (!url) return;

    // Absolute URLs: keep as-is (CORS may block preflight).
    if (url.startsWith('http://') || url.startsWith('https://')) {
      setDatasheetHref(url);
      return;
    }

    // Relative URLs: verify asset exists to avoid 404s.
    (async () => {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        if (response.ok) setDatasheetHref(url);
      } catch {
        // keep fallback
      }
    })();
  }, []);

  useEffect(() => {
    if (open) return;
    if (!pendingHref) return;

    const href = pendingHref;
    setPendingHref(null);

    // Allow the menu close render + overflow unlock to apply before scrolling.
    setTimeout(() => {
      if (!href.startsWith('#')) {
        window.location.href = href;
        return;
      }

      const target = document.querySelector(href);
      if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      window.location.hash = href;
    }, 0);
  }, [open, pendingHref]);

  function onNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    setOpen(false);
    setPendingHref(href);
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-offwhite/80 backdrop-blur-md border-b border-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center">
            <Image
              src="/images/company-logo.png"
              alt="Sapiens AeroComp logo"
              width={320}
              height={120}
              className="h-10 w-auto sm:h-11 object-contain"
              priority
            />
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm font-semibold">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-body hover:text-teal-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={datasheetHref}
              className="bg-navy-900 text-white px-4 py-2 rounded-full text-xs tracking-wide hover:bg-teal-600 transition-colors"
            >
              Request Datasheet
            </a>
          </div>
          <button
            aria-label="Toggle menu"
            className="md:hidden p-2 text-navy-900"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-offwhite border-t border-white/60"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-body font-semibold"
                  onClick={(event) => onNavClick(event, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={datasheetHref}
                className="inline-flex items-center justify-center w-full bg-navy-900 text-white px-4 py-2 rounded-full text-xs tracking-wide"
                onClick={(event) => onNavClick(event, datasheetHref)}
              >
                Request Datasheet
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
