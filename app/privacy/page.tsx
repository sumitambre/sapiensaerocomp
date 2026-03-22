import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Sapiens AeroComp website.',
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-navy-900">Privacy Policy</h1>
      <p className="mt-4 text-body">
        This Privacy Policy describes how Sapiens AeroComp collects and uses information submitted through this website.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-navy-900">Information We Collect</h2>
      <ul className="mt-4 space-y-2 text-body list-disc pl-6">
        <li>Contact details you submit (such as email and phone number, if provided).</li>
        <li>Message content you submit through the contact form.</li>
        <li>Basic technical information required to operate the website (such as request logs).</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-navy-900">How We Use Information</h2>
      <ul className="mt-4 space-y-2 text-body list-disc pl-6">
        <li>To respond to inquiries and provide requested information (datasheets, quotations, or technical details).</li>
        <li>To improve the website and maintain security.</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-navy-900">Sharing</h2>
      <p className="mt-4 text-body">
        We do not sell your personal information. We may use service providers (for example, email delivery) strictly to
        process your submission.
      </p>

      <h2 className="mt-10 text-2xl font-bold text-navy-900">Retention</h2>
      <p className="mt-4 text-body">We retain submissions as needed to respond and for business record purposes.</p>

      <h2 className="mt-10 text-2xl font-bold text-navy-900">Contact</h2>
      <p className="mt-4 text-body">
        For privacy questions, email:{' '}
        <a className="text-teal-600 underline" href="mailto:k.shubham@sapiensaerocomp.com">
          k.shubham@sapiensaerocomp.com
        </a>
      </p>
    </main>
  );
}

