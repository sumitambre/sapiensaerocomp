'use client';

import { motion } from 'framer-motion';

const data = [
  { metric: 'Weight', sapiens: '11.5g', tMotor: '10.5g' },
  { metric: 'Thrust', sapiens: 'High', tMotor: 'High' },
  { metric: 'Mechanical Watts', sapiens: 'Low', tMotor: 'Medium' },
  { metric: 'Electrical Watts', sapiens: 'Low', tMotor: 'Medium' },
  { metric: 'Vibration', sapiens: '24% less', tMotor: 'Baseline' },
];

export default function Performance() {
  return (
    <section id="performance" className="section-anchor section-pad bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-gray">Performance Data</p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-heading">Bench-Tested for Vibration and Efficiency</h2>
        </motion.div>
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto bg-offwhite rounded-2xl p-6"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-navy-900">
                  <th className="p-3 text-sm uppercase tracking-wide">Metric</th>
                  <th className="p-3 text-sm uppercase tracking-wide">Sapiens-01</th>
                  <th className="p-3 text-sm uppercase tracking-wide">T-Motor 14&quot; × 4.8&quot;</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.metric} className="border-t border-white/60">
                    <td className="p-3 font-medium">{row.metric}</td>
                    <td className="p-3 text-teal-500 font-semibold">{row.sapiens}</td>
                    <td className="p-3 text-gray">{row.tMotor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy-900 text-white rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white">Vibration Comparison</h3>
            <p className="mt-3 text-offwhite/80">
              Sapiens-01 shows up to 24% lower vibration versus imported benchmarks, improving airframe stability and component life.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex justify-between text-sm text-offwhite/70">
                  <span>Sapiens-01</span>
                  <span>76%</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-white/10">
                  <div className="h-3 rounded-full bg-teal-500" style={{ width: '76%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-offwhite/70">
                  <span>T-Motor</span>
                  <span>100%</span>
                </div>
                <div className="mt-2 h-3 rounded-full bg-white/10">
                  <div className="h-3 rounded-full bg-amber-400" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
            <p className="mt-6 text-xs text-offwhite/60">Chart illustrates relative vibration magnitude (lower is better).</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

