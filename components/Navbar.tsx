'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
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
              href="#contact"
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
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full bg-navy-900 text-white px-4 py-2 rounded-full text-xs tracking-wide"
                onClick={() => setOpen(false)}
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

