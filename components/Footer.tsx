import { Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 px-4 py-10 text-sm text-offwhite/70">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
            <a className="hover:text-offwhite/90" href="/">
              Home
            </a>
            <a className="hover:text-offwhite/90" href="/#products">
              Products
            </a>
            <a className="hover:text-offwhite/90" href="/#capabilities">
              Capabilities
            </a>
            <a className="hover:text-offwhite/90" href="/#contact">
              Contact
            </a>
            <a className="hover:text-offwhite/90" href="/blog/">
              Blog
            </a>
            <a className="hover:text-offwhite/90" href="/privacy/">
              Privacy
            </a>
          </div>
          <p className="text-center md:text-left">
            &copy; 2026 Sapiens AeroComp Pvt. Ltd. All rights reserved. Pune, India.
            <br />
            Created by <a href="mailto:official.creativedevs@gmail.com">Creativedevs</a>
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-6 md:justify-start">
          <a
            className="inline-flex items-center gap-2 hover:text-offwhite"
            href="mailto:k_shubham@sapiensaerocomp.com"
          >
            <Mail size={17} aria-hidden="true" />
            <span>k_shubham@sapiensaerocomp.com</span>
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-offwhite"
            href="https://in.linkedin.com/company/sapiens-aerocomp"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Sapiens AeroComp company page on LinkedIn"
          >
            <Linkedin size={18} aria-hidden="true" />
            <span>Company LinkedIn</span>
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-offwhite"
            href="https://in.linkedin.com/in/shubhamkhobragade"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Shubham Khobragade on LinkedIn"
          >
            <Linkedin size={18} aria-hidden="true" />
            <span>Founder LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
