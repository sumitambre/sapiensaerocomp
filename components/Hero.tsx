'use client';

import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const datasheetUrl = process.env.NEXT_PUBLIC_DATASHEET_URL?.trim();
  const datasheetHref = datasheetUrl && datasheetUrl.length > 0 ? datasheetUrl : '#contact';

  return (
    <section id="hero" className="section-anchor relative isolate min-h-screen pt-20 pb-12 md:pt-24 md:pb-16 flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-navy-900/80 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,147,156,0.35),_transparent_55%)]" />
      <div className="absolute -top-20 -right-16 h-56 w-56 md:-top-32 md:-right-20 md:h-72 md:w-72 rounded-full bg-amber-400/30 blur-3xl" />
      <div className="absolute -bottom-14 -left-8 h-56 w-56 md:bottom-0 md:left-0 md:h-64 md:w-64 rounded-full bg-teal-600/30 blur-3xl" />

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-14 items-center">
            <div className="text-white">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="uppercase tracking-[0.28em] sm:tracking-[0.35em] text-[11px] sm:text-xs text-offwhite/80"
              >
                Indigenous CFRP Propellers
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-4 text-[2.35rem] leading-[1.08] sm:text-5xl sm:leading-tight lg:text-6xl font-bold text-white"
              >
                High-Performance Propulsion for UAV & Air Mobility Platforms
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-5 sm:mt-6 text-lg sm:text-xl text-offwhite/90 max-w-xl"
              >
                Lightweight. Structurally Optimized. Bench-Tested. A fully indigenous alternative built for reliability, low vibration, and rapid OEM iteration.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <a
                  href={datasheetHref}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-orange-500 text-white px-6 py-4 rounded-full font-semibold shadow-glow hover:bg-orange-500/90 transition"
                >
                  <Download size={18} />
                  Request Datasheet
                </a>
                <a
                  href="#contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-teal-500 text-teal-500 px-6 py-4 rounded-full font-semibold hover:bg-teal-500 hover:text-white transition"
                >
                  <Mail size={18} />
                  Discuss Custom Design
                </a>
              </motion.div>
              <div className="mt-8 sm:mt-10 grid gap-3 text-xs text-offwhite/80 sm:flex sm:flex-wrap sm:gap-4">
                <span className="px-3 py-1.5 rounded-full bg-white/10 w-fit max-w-full break-words">MSME Registered</span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 w-fit max-w-full break-words">Startup India Recognized</span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 w-fit max-w-full break-words">Indigenous Manufacturing - India</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/10 border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-md"
            >
              <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/20">
                <Image
                  src="/images/hero-image.png"
                  alt="14x4.8 inch carbon fiber (CFRP) drone propeller"
                  width={1280}
                  height={540}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-5 text-offwhite/90 text-sm uppercase tracking-[0.25em]">Flagship Prop</div>
              <h3 className="mt-3 text-[2.2rem] leading-tight sm:text-3xl font-bold text-white">14&quot; × 4.8&quot; CFRP</h3>
              <p className="mt-4 text-offwhite/80">
                11.5g propeller with benchmark-level geometry. Matches leading foreign benchmark performance with up to 24% lower vibration.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 text-sm">
                <div className="rounded-xl bg-white/10 p-3 sm:p-4">
                  <p className="text-offwhite/70">Weight</p>
                  <p className="text-base sm:text-lg font-semibold text-white">11.5g</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 sm:p-4">
                  <p className="text-offwhite/70">Development</p>
                  <p className="text-base sm:text-lg font-semibold text-white">3-4 weeks</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 sm:p-4">
                  <p className="text-offwhite/70">Manufacturing</p>
                  <p className="text-base sm:text-lg font-semibold text-white">Ready in 4 weeks</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3 sm:p-4">
                  <p className="text-offwhite/70">Range</p>
                  <p className="text-base sm:text-lg font-semibold text-white">10&quot; to 70&quot;</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

