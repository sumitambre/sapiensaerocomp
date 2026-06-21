import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { sanityWriteClient } from '@/sanity/lib/client';

type ContactPayload = {
  email?: string;
  phone?: string;
  message?: string;
  website?: string;
  sourcePage?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const toEmailRaw = process.env.CONTACT_TO_EMAIL;
const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Sapiens AeroComp <onboarding@resend.dev>';

const resend = resendApiKey ? new Resend(resendApiKey) : null;

function parseRecipientEmails(value: string | undefined) {
  if (!value) return [];
  return value
    .split(/[;,]/g)
    .map((part) => part.trim())
    .filter(Boolean);
}

export async function POST(request: Request) {
  const toEmails = parseRecipientEmails(toEmailRaw);

  if (!sanityWriteClient) {
    return NextResponse.json(
      { error: 'Contact storage is not configured. Set SANITY_API_WRITE_TOKEN.' },
      { status: 503 }
    );
  }

  try {
    const body = (await request.json()) as ContactPayload;
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const message = body.message?.trim();
    const website = body.website?.trim();
    const sourcePage = body.sourcePage?.trim();

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!email || !message) {
      return NextResponse.json({ error: 'Email and message are required.' }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
    }

    if (message.length > 5000 || (phone && phone.length > 80)) {
      return NextResponse.json({ error: 'The submitted message is too long.' }, { status: 400 });
    }

    const submittedAt = new Date().toISOString();

    try {
      await sanityWriteClient.create({
        _type: 'contactSubmission',
        status: 'new',
        submittedAt,
        email,
        phone: phone || undefined,
        message,
        sourcePage: sourcePage || '/',
      });
    } catch (error) {
      console.error('Failed to save contact submission to Sanity.', error);
      return NextResponse.json(
        { error: 'Failed to save your message. Check the Sanity write token and try again.' },
        { status: 502 }
      );
    }

    if (resend && toEmails.length > 0) {
      try {
        await resend.emails.send({
          from: fromEmail,
          to: toEmails,
          replyTo: email,
          subject: `New Contact Lead from ${email}`,
          text: `Sender: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
        });
      } catch (error) {
        // The lead is already safely stored in Sanity. Email is only a notification.
        console.error('Contact submission was saved, but the Resend notification failed.', error);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Invalid contact submission request.', error);
    return NextResponse.json({ error: 'Invalid contact request.' }, { status: 400 });
  }
}
