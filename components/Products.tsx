'use client';

import { motion } from 'framer-motion';

const products = [
  {
    name: '14" × 4.8" CFRP',
    weight: '11.5g',
    desc: 'Carbon fiber (CFRP) drone propeller optimized for low vibration and benchmark-level geometry (flagship).',
    img: '/images/14inch propeller made in India.png',
    alt: '14x4.8 inch carbon fiber (CFRP) drone propeller made in India',
  },
  {
    name: '26" × 7.8" CFRP',
    weight: '62g',
    desc: 'Carbon fiber (CFRP) UAV propeller for heavy-lift drones with ~3500g thrust at 1700 RPM.',
    img: '/images/26inch propeller made in India.png',
    alt: '26x7.8 inch carbon fiber (CFRP) heavy lift drone propeller made in India',
  },
  {
    name: '18" × 6.1" CFRP',
    weight: 'In development',
    desc: 'Next-gen carbon fiber (CFRP) UAV propeller geometry under validation.',
    img: '/images/18inch propeller made in India.png',
    alt: '18x6.1 inch carbon fiber (CFRP) UAV propeller in development',
  },
  {
    name: 'Carbon Fiber Plates',
    weight: '0.5–5mm',
    desc: 'Carbon fiber plates (0.5–5mm) with custom machining for drone structures, jigs, and tooling.',
    img: '/images/carbon fiber plate made in india.jpg',
    alt: 'Carbon fiber plate sheet (0.5mm to 5mm) made in India',
  },
  {
    name: 'Custom UAV Body Part',
    weight: 'Built to Client Requirements',
    desc: 'We provide end to end support for design, Development, and Batch manufacturing of UAV parts as per custom needs.',
    img: '/images/Custom_UAV_Body_Part.jpg',
    alt: 'Custom UAV body part design, development, and batch manufacturing support',
  },
  {
    name: 'Custom Propeller Development',
    weight: 'Built to Client Requirements',
    desc: 'We provide end to end support for design, Development, and Batch manufacturing of UAV parts as per custom needs.',
    img: '/images/customer carbon fiber mold.png',
    alt: 'Custom UAV body part design, development, and batch manufacturing support',
  },
];

export default function Products() {
  return (
    <section id="products" className="section-anchor section-pad bg-offwhite px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-gray">Products</p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-heading">Precision CFRP Propeller Portfolio</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="h-44 bg-gray-100">
                <img
                  src={product.img}
                  alt={product.alt ?? product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-navy-900">{product.name}</h3>
                <p className="text-amber-400 text-lg font-semibold mt-2">{product.weight}</p>
                <p className="text-body mt-4">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray"></p>
      </div>
    </section>
  );
}
