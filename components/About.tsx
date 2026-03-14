'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-anchor section-pad bg-offwhite px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-gray">Who We Are</p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-heading">Sapiens AeroComp Pvt. Ltd.</h2>
        </motion.div>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg">
              We are a Pune-based Indian manufacturer of carbon fiber (CFRP) drone/UAV propellers, founded by aerospace professionals with more than 8 years of experience in propulsion and composite manufacturing.
            </p>
            <p className="text-lg">
              Our team completed 18 months of R&amp;D and thousands of iterations to deliver benchmark-accurate propellers with repeatable quality and readiness for OEM production.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="px-4 py-2 rounded-full bg-white shadow">Pune, India</span>
              <span className="px-4 py-2 rounded-full bg-white shadow">Indigenous Manufacturing</span>
              <span className="px-4 py-2 rounded-full bg-white shadow">Rapid OEM Iteration</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-navy-900">Core Focus</h3>
            <ul className="mt-6 space-y-4 text-body">
              <li>High-efficiency CFRP propellers for UAV and air mobility platforms.</li>
              <li>Low-vibration geometries validated by bench tests and OEM partners.</li>
              <li>End-to-end design support: sizing, optimization, and manufacturing readiness.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

