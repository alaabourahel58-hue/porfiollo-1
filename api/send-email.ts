type VercelRequest = {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
};
type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: Record<string, unknown>) => void;
  setHeader: (name: string, value: string) => void;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  // Only accept requests from the same site. This is a useful baseline,
  // not a replacement for rate limiting on a public endpoint.
  const origin = req.headers.origin;
  const hostHeader = req.headers['x-forwarded-host'] || req.headers.host;
  const originHost = Array.isArray(origin) ? origin[0] : origin;
  const host = Array.isArray(hostHeader) ? hostHeader[0] : hostHeader;
  if (originHost && host) {
    try {
      if (new URL(originHost).host !== host) {
        return res.status(403).json({ error: 'Request origin not allowed.' });
      }
    } catch {
      return res.status(403).json({ error: 'Invalid request origin.' });
    }
  }

  const body = req.body && typeof req.body === 'object'
    ? req.body as { email?: unknown; website?: unknown }
    : {};
  // Hidden honeypot field for simple bot filtering.
  if (typeof body.website === 'string' && body.website.trim()) {
    return res.status(200).json({ ok: true });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const senderName = process.env.BREVO_SENDER_NAME || 'Alex Morgan Portfolio';

  if (!apiKey || !senderEmail) {
    console.error('Missing BREVO_API_KEY or BREVO_SENDER_EMAIL environment variable.');
    return res.status(500).json({ error: 'Email service is not configured yet.' });
  }

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: [{ email }],
        subject: 'Thanks for visiting the portfolio!',
        htmlContent: `
          <!doctype html>
          <html lang="en">
            <body style="margin:0;padding:32px;background:#fff7fb;font-family:Arial,sans-serif;color:#29212a">
              <div style="max-width:560px;margin:0 auto;padding:28px;background:#ffffff;border:1px solid #f0cddd;border-radius:16px">
                <h1 style="margin-top:0;color:#be185d;font-size:24px">Thanks for stopping by! 💗</h1>
                <p>Hello,</p>
                <p>Thanks for your interest in the Alex Morgan portfolio. This is a test email sent through Brevo.</p>
                <p>If you didn't request this email, you can safely ignore it.</p>
                <p style="margin-bottom:0">Best regards,<br><strong>Alex Morgan</strong></p>
              </div>
            </body>
          </html>
        `,
        textContent: "Hello,\n\nThanks for your interest in the Alex Morgan portfolio. This is a test email sent through Brevo.\n\nIf you didn't request this email, you can safely ignore it.\n\nBest regards,\nAlex Morgan",
      }),
    });

    if (!brevoResponse.ok) {
      const details = await brevoResponse.text();
      console.error('Brevo email request failed:', brevoResponse.status, details.slice(0, 500));
      return res.status(502).json({ error: 'The email could not be sent. Please try again later.' });
    }

    return res.status(200).json({ ok: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Email service request failed:', error);
    return res.status(502).json({ error: 'The email service is temporarily unavailable.' });
  }
}
