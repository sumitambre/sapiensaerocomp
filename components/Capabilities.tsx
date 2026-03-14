'use client';

import { motion } from 'framer-motion';
import { Factory, Flame, Snowflake, Package, Ruler, Settings } from 'lucide-react';

const caps = [
  { icon: Factory, label: '2000 sq.m Production Area' },
  { icon: Flame, label: 'Hot Air Oven' },
  { icon: Snowflake, label: 'Deep Freezer for Prepreg handling' },
  { icon: Package, label: 'Rapid production at scale for OEM batches' },
  { icon: Ruler, label: '10" to 70" propeller range' },
  { icon: Settings, label: 'Custom OEM design support' },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="section-anchor section-pad bg-offwhite px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-gray">Capabilities</p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-heading">Built for Scale, Validation, and OEM Support</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {caps.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white p-6 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/15 grid place-items-center">
                  <Icon className="w-6 h-6 text-teal-500" />
                </div>
                <p className="mt-4 font-semibold text-body">{cap.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

