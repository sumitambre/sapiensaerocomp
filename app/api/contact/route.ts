import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  email?: string;
  phone?: string;
  message?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL;
const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Sapiens AeroComp <onboarding@resend.dev>';

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  if (!resend || !toEmail) {
    return NextResponse.json(
      { error: 'Email service is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL.' },
      { status: 500 }
    );
  }

  try {
    const body = (await request.json()) as ContactPayload;
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const message = body.message?.trim();

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required.' }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Lead from ${email}`,
      text: `Sender: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
