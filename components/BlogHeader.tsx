import Image from 'next/image';
import Link from 'next/link';

export default function BlogHeader() {
  return (
    <header className="border-b border-white/60 bg-offwhite">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Link href="/" aria-label="Sapiens AeroComp home">
          <Image
            src="/images/company-logo.png"
            alt="Sapiens AeroComp logo"
            width={320}
            height={120}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="flex items-center gap-5 text-sm font-semibold">
          <Link className="hover:text-teal-600" href="/blog">
            Blog
          </Link>
          <Link className="rounded-full bg-navy-900 px-4 py-2 text-white hover:bg-teal-600" href="/#contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
