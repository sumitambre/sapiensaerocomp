'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: 'Fill the form and we will send your request to our inbox.',
  });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: 'idle', message: 'Sending...' });
    setIsSubmitting(true);

    // Capture the form element before any async boundary; React may clear event.currentTarget after awaits.
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const payload = {
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email.');
      }

      form.reset();
      setStatus({ type: 'success', message: 'Thanks. Your message has been sent successfully.' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send email. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-anchor section-pad bg-navy-900 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-offwhite/70">Contact</p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">Let&apos;s Build Your Propeller Stack</h2>
        </motion.div>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-offwhite/80">
              Share your thrust requirements, platform constraints, or custom geometry needs through the form. We&apos;ll review the details and respond by email.
            </p>
            <div className="space-y-4 text-base">
              <div className="flex items-center gap-3">
                <MapPin className="text-teal-400" size={22} />
                <span>Pune, India</span>
              </div>
            </div>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="bg-white rounded-3xl p-8 text-body space-y-5"
          >
            <div>
              <label className="text-sm font-semibold text-heading">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="mt-2 w-full rounded-xl border border-gray/30 p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-heading">Phone (Optional)</label>
              <input
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="Your Phone Number"
                className="mt-2 w-full rounded-xl border border-gray/30 p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-heading">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Your Message"
                className="mt-2 w-full rounded-xl border border-gray/30 p-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-orange-500 text-white py-3 font-semibold hover:bg-orange-500/90 transition disabled:cursor-not-allowed disabled:bg-gray"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <p className={`text-xs ${status.type === 'error' ? 'text-red-600' : 'text-gray'}`}>{status.message}</p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
