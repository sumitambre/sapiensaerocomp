'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

const rows = [
  {
    issue: 'Foreign legacy systems',
    solution: 'Proven indigenous alternative tested by Defence drone OEMs.',
  },
  {
    issue: 'Long lead times',
    solution: '3–4 week development plus 4-week manufacturing readiness.',
  },
  {
    issue: 'Inconsistent quality',
    solution: 'Repeatable CFRP manufacturing with rigorous bench testing.',
  },
];

export default function ProblemSolution() {
  return (
    <section id="solutions" className="section-anchor section-pad bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-gray">Problem ? Solution</p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-heading">Replace Delays With Indigenous Performance</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-navy-900">Industry Challenges</h3>
            {rows.map((row) => (
              <motion.div
                key={row.issue}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-amber-400/10 border border-amber-400/30"
              >
                <AlertTriangle className="text-amber-400 mt-1" />
                <p className="text-lg font-semibold text-body">{row.issue}</p>
              </motion.div>
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-navy-900">Sapiens Response</h3>
            {rows.map((row) => (
              <motion.div
                key={row.solution}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-teal-500/10 border border-teal-500/30"
              >
                <ShieldCheck className="text-teal-500 mt-1" />
                <p className="text-lg font-semibold text-navy-900">{row.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

