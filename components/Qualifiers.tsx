'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const badges = [
  'MSME Registered',
  'Startup India Recognized',
  'Flight Tested — 900 hours MSL',
  'Bench Tested at Defence Drone OEM facility',
  'Only Indian company to develop 14" × 4.8" at global benchmark accuracy',
];

export default function Qualifiers() {
  return (
    <section id="qualifiers" className="section-anchor section-pad bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-gray">Trust & Qualification</p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-heading">Validated by Industry and Flight Hours</h2>
        </motion.div>
        <div className="grid gap-4">
          {badges.map((badge) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-offwhite rounded-2xl p-5"
            >
              <CheckCircle2 className="text-teal-500" />
              <span className="text-lg font-semibold text-navy-900">{badge}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

